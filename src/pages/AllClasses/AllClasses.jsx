import useClass from "../../hooks/useClass";
import Cover from "../Cover/Cover";
import coverImg from "../../../public/cover/Cover1.jpg"
import ClassCards from "../Shared/ClassCards/ClassCards";

const AllClasses = () => {
    const [classes] = useClass();

    const accpetClass = classes.filter(data => data.status === "accepted")


    return (

        
        <section>
            <Cover img={coverImg} info={"Enroll in our courses to unlock your full potential, enhance your skills, and experience the joy of music."} tittle={"Heres Ours Courses"}></Cover>
             <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1  w-9/12 mx-auto pt-10 mb-10">
            {
                accpetClass.map(item =>  <ClassCards key={item._id} item={item}></ClassCards> )
            }
        </div>
       </section>
    );
};

export default AllClasses;