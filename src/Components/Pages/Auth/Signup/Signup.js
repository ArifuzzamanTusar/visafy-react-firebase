import React, { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../utilities/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
   


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');


    const [passwordError, setPasswordError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');

    // --- 
    // Set registration error 
    const [regError, setRegError] = useState();

    // Validation 
  

    const handleEmail = (event) => {
        let getEmail = event.target.value;
        setEmail(getEmail);


    }
    // Password length check 
    const handlePassword = (event) => {
        let getPassword = event.target.value;
        if (getPassword.length > 5) {
            setPassword(getPassword);
            setPasswordError(false);
        }
        else {
            setPasswordError(
                <small className='errorText'>Must be 6 Character</small>
            )
        }


    }
    // password match 
    const handleRePassword = (event) => {
        let getRePassword = event.target.value;
        if (getRePassword === password) {
            setRePassword(password);
            setPasswordMatchError(false);

        }
        else {
            setPasswordMatchError(
                <small className='errorText'>Password Didn't match</small>

            );

        }

    }

    // Redirecting user to his prevoius route 
    if (user) {
        navigate(from, { replace: true })
    }
    // Showing loading component  
    if (loading) {
        return (<Loading></Loading>);
    }
    if (error) {
        toast.error(error.message);
    }
   

    // ----------- SIGN UP PROCESS--------------------
    const handleSignup = async (event) => {
        event.preventDefault();

        if (password.length > 5 && password === rePassword) {
            await createUserWithEmailAndPassword(email, password);
            

        }
        else {
            setRegError(
                // <small className='errorText'>Please Check errors {updateError}</small>
                <p className='bg-danger text-white p-3'>Please Check Errors</p>
            )
        }

    }




    return (
        <div className='py-5'>
            <Container>
                <Col md={4} className="mx-auto">
                    <div className="shadow-lg p-5">
                        <h3 className="text-center py-3">
                            Create new account
                        </h3>
                        <Form onSubmit={handleSignup} >
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" required  onKeyUp={handleEmail}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                <Form.Control type="password" placeholder="Password" required onKeyUp={handlePassword} />
                            </FloatingLabel>
                            <div className="my-2 text-danger">{passwordError}</div> 
                           
                            <FloatingLabel controlId="floatingPassword2" label="Re-Type password" className="mb-3">
                                <Form.Control type="password" placeholder="Password" required  onKeyUp={handleRePassword}/>
                            </FloatingLabel>
                            <div className="my-2 text-danger">{passwordMatchError}</div> 
                            
                            <div className="p-3"></div>
                            <Button className='col-12' variant='primary' type='submit'>Login</Button>
                            <div className="my-2 text-danger">{regError}</div> 
                        </Form>
                        <div className="p-2"></div>

                        <p className="text-center py-3">-------- OR --------</p>
                        <SocialLogin></SocialLogin>

                        <div className="py-3">
                            <p className='text-center py-1 '> Already have a account?<Link to={'/login'}> Login</Link> </p>
                        </div>



                    </div>
                </Col>

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
            <div className="py-5"></div>
        </div>
    );
};

export default Signup;