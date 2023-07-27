import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
    // const [classes, setClasses] = useState([]);
    // const [loading, setLoading] = useState(true);
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: classes = [] } = useQuery({
        queryKey: ["classes",],
        queryFn: async () => {
            const res = await axiosSecure(`/class`);
            // console.log(res.data);
          return res.data;
        },
      });
   
    // useEffect(() => {
    //     fetch("http://localhost:5000/class")
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //             setLoading(false)
    //     })
    // }, [])
    
    return [classes, refetch]
}

export default useClass