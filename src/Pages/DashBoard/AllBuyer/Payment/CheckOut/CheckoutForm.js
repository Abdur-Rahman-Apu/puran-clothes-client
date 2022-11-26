import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'

const CheckoutForm = ({ booking }) => {

    const { price, buyerEmail, sellerEmail, productName } = booking;
    console.log("booking", productName, sellerEmail);
    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionID, setTransactionId] = useState('')

    const [processing, setProcessing] = useState(false)



    const [clientSecret, setClientSecret] = useState("");



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [booking]);


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            console.log(error);
        } else {
            setCardError('')
        }


        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email: buyerEmail
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return
        }

        if (paymentIntent.status === 'succeeded') {
            setSuccess('Payment is Completed successfully')
            setTransactionId(paymentIntent.id)

            //store payment info in the databases

        }

        setProcessing(false)
        console.log('paymentIntent', paymentIntent);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='border border-orange-500 rounded-lg p-4'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'orange',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </div>
            <button className='btn bg-orange-400 btn-sm border-0 my-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>

            <>
                <p className='text-red-500'>{cardError}</p>
                <div>
                    {
                        success && <div>
                            <p className='text-sm text-green-500'>{success}</p>
                            <p className='text-sm '>Your transaction id is: {transactionID}</p>
                        </div>
                    }
                </div>
            </>
        </form>
    );
};

export default CheckoutForm;