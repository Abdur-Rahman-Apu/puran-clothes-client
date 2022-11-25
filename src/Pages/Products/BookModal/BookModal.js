import React from 'react';

const BookModal = ({ product }) => {

    const { productName, productImage, location, originalPrice, resalePrice, postTime, sellerName, verified, yearsOfUse } = product;
    console.log(product);
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Order now</h3>

                    <form className='grid grid-cols-1 gap-6 mt-10'>

                        <input type="text" disabled value="user name" className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" disabled value="email" className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" disabled value={productName} className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" disabled value={resalePrice} className="input input-bordered input-accent w-full max-w-xs" />




                        <input name='name' type="text" placeholder="Enter your phone no" className="input input-bordered input-accent w-full max-w-xs" />
                        <input name='name' type="text" placeholder="Enter meeting location" className="input input-bordered input-accent w-full max-w-xs" />


                        <input className='btn btn-accent' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;