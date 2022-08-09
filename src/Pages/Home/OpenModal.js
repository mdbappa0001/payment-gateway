import React from 'react';

const OpenModal = ({ purchase, setPurchase }) => {

    const { name, price } = purchase;

    const handlePurchase = event => {
        event.preventDefault();
        setPurchase(null);
       
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-secondary text-center lg:mb-6">Enroll For : <span className='text-red'>{name}</span></h3>
                    <h3 className=" text-xl font-bold text-secondary text-center lg:mb-4">Price : <span className='text-red-500'>${price}</span></h3>

                    <form onSubmit={handlePurchase}
                        className='grid grid-cols-1 gap-3 justify-items-center mt-6'>
                        <input type="text" name='name' placeholder='Enter your name'  className="input input-bordered w-full max-w-xs" required/>
                        <input type="text" name='address' placeholder='Enter your address' className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default OpenModal;