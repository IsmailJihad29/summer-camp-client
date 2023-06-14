/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import banner from "../../../../public/Banner/bg5.jpg";
import banner2 from "../../../../public/Banner/bg2.jpg";
import banner3 from "../../../../public/Banner/bg3.webp";
import banner4 from "../../../../public/Banner/bg1.jpg";
import banner5 from "../../../../public/Banner/bg4.jpg";
import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerDetails = (
    <>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className=" text-neutral-content">
        <div className="w-3/6 px-20 ml-10 text-white">
          <h1 className="mb-5 text-8xl font-bold font-cinzel">
            {" "}
            <span className="text-cyan-400">Rhythm </span> <br />{" "}
            <span className="ml-28 text-sky-400">Studios</span>
          </h1>
          <p className="mb-5  text-xl">
            Unleash Your Musical Potential! Join Rhythm Studios Today. Discover
            the Joy of Music. Experience the Rhythm of Life.
          </p>
          <Link to={'/classes'}><Button btnHeading={"Book Your Class Now"}/></Link>
        </div>
      </div>
    </>
  );
  return (
    <section className="">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide>
          <div
            className="hero h-screen"
            style={{ backgroundImage: `url(${banner})` }}
          >
            {bannerDetails}
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div
            className="hero h-screen"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            {bannerDetails}
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div
            className="hero h-screen"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            {bannerDetails}
          </div>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <div
            className="hero h-screen"
            style={{ backgroundImage: `url(${banner4})` }}
          >
            {bannerDetails}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-screen"
            style={{ backgroundImage: `url(${banner5})` }}
          >
            {bannerDetails}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
