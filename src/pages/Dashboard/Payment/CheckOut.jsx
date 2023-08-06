import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ classes }) => {
  const { instructor, class_image, class_name, price, class_id, _id, enrolled_student, available_seat } = classes;
  console.log(classes)
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate= useNavigate()

  const [paymentError, setPaymentError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [prossesing, setProssesing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) { 
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log("client secret", res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setPaymentError(error.message);
    } else {
      setPaymentError("");
    }
    setProssesing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setPaymentError(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProssesing(false);

    if (paymentIntent?.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);
      const payment = {
        email: user?.email,
        name: user?.displayName,
        transactionId,
        price,
        date: new Date(),
        instructor,
        class_image,
        class_name,
        status: "Enrolled",
        class_id,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Success.",
            showConfirmButton: false,
            timer: 1000,
          });
          axiosSecure.put(`/update-seat-enrollment/${class_id}`, {
            available_seat: available_seat ,
              enrolled_student: enrolled_student
            })
            .then((res) => {
              console.log(res.data);
              axiosSecure.delete(`/carts/${_id}`).then((res) => {
                console.log(res.data);
              });
              refetch();
            });
          navigate("/dashboard/my-enroll-class")
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="card shadow-xl px-5 py-2"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn button-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || prossesing}
        >
          Pay ${price}
        </button>
      </form>
      {paymentError && <p className="text-red-500">{paymentError}</p>}
      {transactionId && (
        <p className="text-green-500">
          {" "}
          Payment Succesfull. Your Transection id{" "}
          <span className="text-purple-700">{transactionId}</span>
        </p>
      )}
    </div>
  );
};

export default CheckOut;
