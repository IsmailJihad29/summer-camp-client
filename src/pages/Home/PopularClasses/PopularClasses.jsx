
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import useClass from "../../../hooks/useClass";
import ClassCards from "../../Shared/ClassCards/ClassCards";

const PopularClasses = () => {
  const [classes] = useClass();
  
  const sortedClasses = classes.sort((a, b) => b.enrolled_student - a.enrolled_student);
  const topClasses = sortedClasses.slice(0, 6);
 
  return (
    <div>
      <SectionTittle sectionHeading={"Top Classes"} subHeading={"see Our"} />

      <div className=" grid gap-6 md:grid-cols-3 w-9/12 mx-auto pt-10 mb-10">
        {topClasses.map((item) => (
          <ClassCards key={item._id} item={item}></ClassCards>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
