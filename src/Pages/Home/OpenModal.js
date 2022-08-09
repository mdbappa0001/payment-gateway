import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1DprCocrPsKOt6bqlHnY9u0bzi6gwBs362ufNt42p8bKYYCI9YVE5nVPhJDUqCa54bCL0v0JV9emQcreUyIm2c00glvakKz8');

const OpenModal = ({ purchase, setPurchase }) => {

    const { _id, img, price } = purchase;
   

    // const handlePurchase = event => {
    //     event.preventDefault();
    //     setPurchase(null);

    // }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-center lg:mb-3">Please Pay For : <img className='w-16 ml-48' src={img} alt="" /></h3>
                    <h3 className=" text-xl  text-center lg:mb-2">Id : <span className='text-blue-500 font-bold'>${_id}</span></h3>
                    <h3 className=" text-xl  text-center lg:mb-2">Price : <span className='text-blue-500 font-bold'>${price}</span></h3>


                    <div class="card w-full bg-base-100 shadow-xl mt-12">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm purchase={purchase}></CheckoutForm>
                            </Elements>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OpenModal;