
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUserRole = () => {
    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: userCheck = [] } = useQuery({
      queryKey: ["userCheck", user?.email],
      // enabled: !loading,
      queryFn: async () => {
          const res = await axiosSecure.post('/checkuser-role', {
            email: user?.email
          });
        return res?.data?.role;
      },
    });
  
    return [userCheck, refetch];
  };

export default useUserRole;