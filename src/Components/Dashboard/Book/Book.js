import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import PaymentCardBox from '../PaymentCardBox/PaymentCardBox';
const stripePromise = loadStripe("pk_test_51IeNLRLDDKKbKSIyViGtdDHnhxruSjjtVmIhTk2LNomjXtgQlYsaWWeomQqHU2geHBnZGICGl6NbUn9FgIJOJkQx00TVuvByKM");

const Book = () => {
    return (
        <div className="mt-5 mb-5">
            <Elements stripe={stripePromise}>
                <PaymentCardBox></PaymentCardBox>
            </Elements>
        </div>
    );
};

export default Book;