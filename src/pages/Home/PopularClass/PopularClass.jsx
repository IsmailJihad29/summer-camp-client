/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../../Shared/Button/Button";

const PopularClass = ({ item }) => {
    const {class_name, instructor_name, available_seat, price, class_image } = item
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl ">
        <figure>
            <img
              src={class_image}
                    alt=""
                    className="w-full  rounded-b-full "
            />
        </figure>
            <p className="bg-slate-900 text-white absolute right-0 rounded px-4 mr-4 mt-4">{ price}</p>
          <div className="card-body items-center">
                <h2 className="card-title"> {class_name }</h2>
                <p>Instructor { instructor_name}</p>
                <p>Available Seats { available_seat}</p>
               
            
            <div className="card-actions justify-end">
                <Button btnHeading={'enroll now'}/>
            </div>
          </div>
        </div>
    );
};

export default PopularClass;