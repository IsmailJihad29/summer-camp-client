import React, { useEffect, useState } from "react";
import Rating from "react-rating";

import "swiper/css";
import "swiper/css/navigation";

import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import reviewPhoto from "../../../../public/reviews/review.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-red-three.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mt-32">
      <div>
        <SectionTittle
          sectionHeading={"Student Reviews"}
          subHeading={"See Our"}
        ></SectionTittle>
      </div>

      <div className="lg:flex gap-5 items-center px-10 mx-auto">
        <div data-aos="zoom-in-left">
          <img className="" src={reviewPhoto} alt="" />
        </div>
        <div data-aos="zoom-in-right" className="my-20 lg:w-1/2 mx-auto">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center m-24 ">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src={review.photoURL} />
                    </div>
                  </div>
                  <p className="py-8">{review.review}</p>
                  <h3 className="text-2xl text-orange-400">{review.name}</h3>
                  <p className="text-2xl text-orange-400">{review.email}</p>
                  <Rating initialRating={review.rating} readonly />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
