/* eslint-disable react/prop-types */
const SectionTittle = ({sectionHeading, subHeading}) => {
    return (
      
            <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"  className='md:w-4/12 mx-auto  text-center  rounded-lg border-0 border-x-4 border-sky-400 my-12'>
            <p className='text-sky-400 mb-2 text-xl font-cinzel '>
                {subHeading} 
            </p>
            <h3 className='text-4xl font-bold   py-4  font-cinzel'>
                    {sectionHeading}
                
                </h3>
                
        </div>
        
        
    );
};

export default SectionTittle;