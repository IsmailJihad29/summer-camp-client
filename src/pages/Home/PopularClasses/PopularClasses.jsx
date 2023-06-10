import { useEffect, useState } from "react";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import PopularClass from "../PopularClass/PopularClass";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
   
    useEffect(() => {
        fetch("classes.json")
            .then(res => res.json())
            .then(data => {
                setClasses(data)
        })
    },[])

    return (
        <div>
            <SectionTittle sectionHeading={'Top Classes'} subHeading={'see Our'} />
           
            <div className=" grid gap-6 md:grid-cols-3 w-9/12 mx-auto pt-10">
                {
                    classes.map((item) => (
                                            <PopularClass key={item._id} item={item} /> 
                                        ))
                }
            </div>
        </div>
    );
};

export default PopularClasses;