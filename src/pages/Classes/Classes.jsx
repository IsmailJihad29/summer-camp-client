import { useEffect} from "react";

const Classes = () => {
 
   
    useEffect (() => {
        fetch("classes.json")
            .then(res => res.json())
            .then(data => {
            console.log(data);
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Classes;