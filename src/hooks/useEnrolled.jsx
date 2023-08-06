import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useEnrolled = () => {

    const { user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolledClass = [] } = useQuery({

        queryKey: ['enrolledClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled?email=${user?.email}`)
            return res.data;
        },
    })

    return [enrolledClass, refetch]

}

export default useEnrolled;