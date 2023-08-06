import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {

    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: classes = [] } = useQuery({
        queryKey: ["classes",],
        queryFn: async () => {
            const res = await axiosSecure(`/class`);
          return res.data;
        },
      });
   

    
    return [classes, refetch]
}

export default useClass