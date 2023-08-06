import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SectionTittle from '../../Shared/SectionTittle/SectionTittle';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK)

const Payment = () => {
    const classes = useLoaderData()

    return (
        <div className='w-full'>
            <SectionTittle subHeading={"Start Your Rythm Journey"} sectionHeading={"Pay Now"}></SectionTittle>
            <div className='w-1/3 mx-auto mt-4'>
            <Elements stripe={stripePromise}>
                <CheckOut  classes={classes}></CheckOut>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;