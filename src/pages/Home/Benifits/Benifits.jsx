import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import icon1 from "../../../../public/Icons/education.png";
import icon2 from "../../../../public/Icons/instructor.png";
import icon3 from "../../../../public/Icons/support.png";
import icon4 from "../../../../public/Icons/perfom.png";

const Benifits = () => {
  return (
    <section className="my-12 mt-20">
      <SectionTittle
        sectionHeading={" What We Offer at Rhythm Studios"}
        subHeading={"Discover"}
      />

      <div className="md:flex mx-auto md:w-9/12 font-semibold mb-20 p-5 gap-8  ">
        <div className="w-6/12 card shadow-xl p-10 hover:scale-105 transition-transform duration-300">
          <img className="w-20" src={icon1} alt="" />
          <h3 className="text-xl text-sky-400 font-bold font-garamond mt-4">
            Comprehensive Music Education
          </h3>
          <p>
            Expert guidance and personalized instruction for students of all
            ages and skill levels, helping you reach your full musical
            potential.
          </p>
        </div>

        <div className="w-6/12 card shadow-xl p-10 hover:scale-105 transition-transform duration-300">
          <img className="w-20" src={icon3} alt="" />
          <h3 className="text-xl font-bold text-sky-400 font-garamond mt-4">
            Expert Instructors
          </h3>
          <p>
            Passionate and experienced instructors dedicated to understanding
            your goals, providing personalized instruction, and ongoing support.
          </p>
        </div>
        <div className="w-6/12 card shadow-xl p-10 hover:scale-105 transition-transform duration-300">
          <img className="w-20" src={icon2} alt="" />
          <h3 className="text-xl font-bold text-sky-400 font-garamond mt-4">
            Supportive Community
          </h3>
          <p>
            Join a vibrant musical community, connecting with like-minded
            individuals, collaborating on projects, and receiving encouragement.
          </p>
        </div>

        <div className="w-6/12 card shadow-xl p-10 hover:scale-105 transition-transform duration-300">
          <img className="w-20" src={icon4} alt="" />
          <h3 className="text-xl font-bold text-sky-400 font-garamond mt-4">
            Performance Opportunities
          </h3>
          <p>
            Showcase your talent and boost confidence through regular recitals
            and ensemble showcases, celebrating your progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
