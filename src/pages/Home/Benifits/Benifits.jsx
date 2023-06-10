import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import icon1 from "../../../../public/Icons/icon1.png";
import icon2 from "../../../../public/Icons/yoga.png";
import icon3 from "../../../../public/Icons/yoga2.png";
import icon4 from "../../../../public/Icons/meditation.png";

const Benifits = () => {
  return (
    <section className="my-12">
      <SectionTittle
        sectionHeading={"Yoga Life for Greater Self Control"}
        subHeading={"Yoga Benifits"}
      />

      <div className="md:flex mx-auto md:w-9/12  p-5 gap-8">
        <div className="w-6/12">
          <img className="w-20" src={icon1} alt="" />
          <h3 className="text-xl font-bold font-garamond mt-4">
            Reduce Stress
          </h3>
          <p>
            Yoga reduces stress by promoting relaxation, calming the mind, and
            restoring balance to the body.
          </p>
        </div>
        <div className="w-6/12">
          <img className="w-20" src={icon3} alt="" />
          <h3 className="text-xl font-bold font-garamond mt-4">Balance life</h3>
          <p>
            Yoga helps balance life by harmonizing the body, mind, and spirit,
            fostering a sense of well-being and inner equilibrium.
          </p>
        </div>
        <div className="w-6/12">
          <img className="w-20" src={icon2} alt="" />
          <h3 className="text-xl font-bold font-garamond mt-4">
            Body Exercise
          </h3>
          <p>
            Yoga combines body and mind in a holistic body exercise that
            promotes strength, flexibility, balance, and overall physical
            well-being.
          </p>
        </div>
        <div className="w-6/12">
          <img className="w-20" src={icon4} alt="" />
          <h3 className="text-xl font-bold font-garamond mt-4">
            Peace Meditations
          </h3>
          <p>
            Yoga brings peace through quieting the mind, releasing tension, and
            nurturing self-awareness, fostering inner tranquility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
