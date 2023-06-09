/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import banner from "../../../../public/Banner/banner1.jpg";
import banner2 from "../../../../public/Banner/banner2.jpg";
import banner3 from "../../../../public/Banner/banner3.jpg";
import banner4 from "../../../../public/Banner/banner4.jpg";
import Button from "../../Shared/Button/Button";

const Banner = () => {
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
            <div className="hero-overlay bg-opacity-50"></div>
            <div className=" text-neutral-content">
              <div className="w-3/6 px-20 ml-10 text-white">
                <h1 className="mb-5 text-8xl font-bold font-cinzel">
                  {" "}
                  <span className="text-cyan-400">Yogasala</span> <br />{" "}
                  <span className="ml-28 text-sky-400">studio</span>
                </h1>
                <p className="mb-5  text-xl">
                  Experience a summer of wellness at YogaSala's Yoga Camp! Join
                  our expert instructors for a transformative journey into the
                  world of yoga. Discover new poses, enhance flexibility, and
                  cultivate mindfulness in a fun and supportive environment.
                  Enroll today and empower yourself with the gift of yoga this
                  summer.
                </p>
                <Button btnHeading={"Book Your Class Now"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div
            className="hero h-screen"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className=" text-neutral-content">
              <div className="w-3/6 px-20 ml-10 text-white">
                <h1 className="mb-5 text-8xl font-bold font-cinzel">
                  {" "}
                  <span className="text-cyan-400">Yogasala</span> <br />{" "}
                  <span className="ml-28 text-sky-400">studio</span>
                </h1>
                <p className="mb-5  text-xl">
                  YogaSala A vibrant yoga community promoting holistic
                  well-being. Experience transformative classes led by
                  experienced instructors. Find balance, strength, and
                  mindfulness in a nurturing environment. Join our supportive
                  community and embrace a healthier, fulfilling life.
                </p>
                <Button btnHeading={"Book Your Class Now"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div
            className="hero h-screen"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className=" text-neutral-content">
              <div className="w-3/6 px-20 ml-10 text-white">
                <h1 className="mb-5 text-8xl font-bold font-cinzel">
                  {" "}
                  <span className="text-cyan-400">Yogasala</span> <br />{" "}
                  <span className="ml-28 text-sky-400">studio</span>
                </h1>
                <p className="mb-5  text-xl">
                  YogaSala A vibrant yoga community promoting holistic
                  well-being. Experience transformative classes led by
                  experienced instructors. Find balance, strength, and
                  mindfulness in a nurturing environment. Join our supportive
                  community and embrace a healthier, fulfilling life.
                </p>
                <Button btnHeading={"Book Your Class Now"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <div
            className="hero h-screen"
            style={{ backgroundImage: `url(${banner4})` }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className=" text-neutral-content">
              <div className="w-3/6 px-20 ml-10 text-white">
                <h1 className="mb-5 text-8xl font-bold font-cinzel">
                  {" "}
                  <span className="text-cyan-400">Yogasala</span> <br />{" "}
                  <span className="ml-28 text-sky-400">studio</span>
                </h1>
                <p className="mb-5  text-xl">
                  YogaSala A vibrant yoga community promoting holistic
                  well-being. Experience transformative classes led by
                  experienced instructors. Find balance, strength, and
                  mindfulness in a nurturing environment. Join our supportive
                  community and embrace a healthier, fulfilling life.
                </p>
                <Button btnHeading={"Book Your Class Now"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
