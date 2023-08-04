import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOut = ({ price }) => {
  console.log(price)
    const stripe = useStripe()
  const elements = useElements()
  
  const [paymentError, setPaymentError] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
          return
          
      }
      
      const {error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
      })

      if (error) {
        console.log(error)
        setPaymentError(error.message)
      }
      else {
        setPaymentError("")
        console.log("payment method", paymentMethod)
      }
      
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn button-primary btn-sm mt-4' type="submit" disabled={!stripe}>
        Pay 
      </button>
        </form>
        {
          paymentError && <p className='text-red-500'>{ paymentError}</p>
        }
        </div>
    );
};

export default CheckOut;