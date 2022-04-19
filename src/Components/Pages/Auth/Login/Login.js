import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../utilities/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let userError;

    const handleEmail = (event) => {
        setEmail(event.target.value);

    }
    const handlePassword = (event) => {
        setPassword(event.target.value);

    }


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);




    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);


    }


    if (loading) {
        return (
            <Loading></Loading>
        )
    }
    if (error) {
        // toast.error(error.message);
        userError = <p className='bg-danger text-white p-3'>{error.message}</p>;

    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='my-5'>
            <Container>
                <Col md={4} className="mx-auto">
                    <div className="shadow-lg p-5">
                        <h3 className="text-center py-3">
                            Sign in
                        </h3>
                        <Form onSubmit={handleLogin}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" required onChange={handleEmail} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" required onChange={handlePassword} />
                            </FloatingLabel>
                            <div className="p-3"></div>
                            <Button className='col-12' variant='primary' type='submit'>Login</Button>
                        </Form>
                        <div className="p-2"></div>
                        {userError}
                        <p className="text-center py-3">-------- OR --------</p>
                        <SocialLogin></SocialLogin>

                        <div className="py-3">
                            <p className='text-center py-1 '> Don't have a account?<Link to={'/signup'}> Register</Link> </p>
                            <p className='text-center py-1'> Forgot password? <br/><Link to={'/reset-password'}> Reset Now</Link> </p>
                        </div>



                    </div>
                </Col>
            </Container>

        </div>
    );
};

export default Login;