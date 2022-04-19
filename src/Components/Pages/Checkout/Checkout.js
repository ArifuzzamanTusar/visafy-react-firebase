import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
    const { id } = useParams();
    const handleBooking = (event) => {
        event.preventDefault();
        toast.success("Thanks for your booking!")
    }

    return (

        <div>
            <Container>
                <h1 className="text-center py-5">Checkout for {id}</h1>
                <div className="checkout-form p-5">
                    <Form onSubmit={handleBooking}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Adress</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com" />
                        </Form.Group>
                       
                        <Button variant="primary" type="submit">
                            Confirm Purchase
                        </Button>

                    </Form>

                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Container>
        </div>
    );
};

export default Checkout;