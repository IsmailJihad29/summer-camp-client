import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePaymentHistory = () => {

    const { user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: paymentHistory = [] } = useQuery({

        queryKey: ['paymentHistory', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payment-history?email=${user?.email}`)
            return res.data;
        },
    })

    return [paymentHistory, refetch]

}

export default usePaymentHistory;