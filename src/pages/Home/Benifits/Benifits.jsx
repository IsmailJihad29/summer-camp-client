import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import icon1 from "../../../../public/Icons/icon1.png"

const Benifits = () => {
    return (
        <section className="my-12">
            <SectionTittle sectionHeading={'Yoga Life for Greater Self Control'} subHeading={'Yoga Benifits'} />
            
            <div className="md:flex mx-auto md:w-9/12  p-5 gap-8">
                <div className="w-6/12">
                    <img className="w-20" src={icon1} alt="" />
                    <h3 className="text-xl font-bold font-garamond">Reduce Stress</h3>
                    <p>Yoga reduces stress by promoting relaxation, calming the mind, and restoring balance to the body.</p>
                </div>
                <div className="w-6/12">
                    <img className="w-20" src={icon1} alt="" />
                    <h3 className="text-xl font-bold font-garamond">Reduce Stress</h3>
                    <p>Yoga reduces stress by promoting relaxation, calming the mind, and restoring balance to the body.</p>
                </div>
                <div className="w-6/12">
                    <img className="w-20" src={icon1} alt="" />
                    <h3 className="text-xl font-bold font-garamond">Reduce Stress</h3>
                    <p>Yoga reduces stress by promoting relaxation, calming the mind, and restoring balance to the body.</p>
                </div>
                <div className="w-6/12">
                    <img className="w-20" src={icon1} alt="" />
                    <h3 className="text-xl font-bold font-garamond">Reduce Stress</h3>
                    <p>Yoga reduces stress by promoting relaxation, calming the mind, and restoring balance to the body.</p>
                </div>
               
                
            </div>
        </section>
    );
};

export default Benifits;