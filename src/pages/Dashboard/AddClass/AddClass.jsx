import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();

  


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const class_name = form.class_name.value;
    const class_image  = form.class_image.value;
    const instructor = form.instructor.value;
    const email = form.email.value;
    const price = form.price.value;
    const available_seat = form.available_seat.value;
    const enrolled_student = 0;
    const status = "pending";
    const feedback = "";


    const classes = {
     class_image, class_name, instructor, email, price, available_seat, enrolled_student, status, feedback
    };

    fetch("https://summer-camp-server-woad-six.vercel.app/class", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classes),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Added Toy Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset()
        }
      })
      .catch((error) => console.error(error.massage));
  };

  return (
    <div className="md:w-6/12 w-10/12 mx-auto my-16">
      <h1 className="mb-12 font-primary uppercase text-4xl font-extrabold  tr text-sky-500 lg:text-5xl  text-center border-0 border-b-4 border-sky-500 rounded-lg w-1/2 mx-auto  ">
        Add Your Class
      </h1>
      <form id="myform" onSubmit={handleSubmit}>
        {/* Instructor name */}
        <div className="form-control mb-5 ">
          <label className="input-group-lg">
            <span className="">Instructor name</span>
            <input
              type="text"
              name="instructor"
              required
              defaultValue={user?.displayName
              }
              disabled
              placeholder="Instructor Name"
              className=" block py-2.5 px-4 w-full  bg-transparent border-0 border-b-2 border-rose-500 rounded-lg peer"
            />
          </label>
        </div>
        {/* instructor email */}
        <div className="form-control mb-5 ">
          <label className="input-group-lg">
            <span className="">Instructor Email</span>
            <input
              type="text"
              name="email"
              required
              defaultValue={user?.email}
              disabled
              placeholder="Seller Email"
              className=" block py-2.5 px-4 w-full  bg-transparent border-0 border-b-2 border-rose-500 rounded-lg peer"
            />
          </label>
        </div>

        {/* CLASS name */}
        <div className="form-control mb-5">
          <label className="input-group-lg">
            <span className="">Class Name</span>
            <input
              required
              type="text"
              name="class_name"
              placeholder="Class Name"
              className="input input-bordered border-b-2 border-0 rounded-lg border-sky-500 focus:outline-none w-full"
            />
          </label>
        </div>
        {/* img URL */}
        <div className="form-control mb-5">
          <label className="input-group-lg">
            <span className="">Class Image</span>
            <input
              required
              type="url"
              name="class_image"
              placeholder="Class Image URL "
              className="input input-bordered border-b-2 border-0 rounded-lg border-sky-500 focus:outline-none w-full"
            />
          </label>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          {/* price */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              required
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-o w-full   bg-transparent border-0 border-b-2 border-sky-300 rounded-lg   focus:outline-none focus:ring-0  peer"
              placeholder=" "
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute px-4  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>

          {/* Available Seat */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              required
              type="number"
              name="available_seat"
              id="
              available_seat
              "
              className="block py-2.5 px-0 w-full   bg-transparent border-0 border-b-2 border-sky-300 rounded-lg    focus:outline-none focus:ring-0  peer"
              placeholder="
               "
            />
            <label
              htmlFor=" available_seat
              "
              className="peer-focus:font-medium absolute  px-4  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Available Seat
            </label>
          </div>
        </div>
        <button type="submit" className="button-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClass;
