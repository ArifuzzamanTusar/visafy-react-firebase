import React from 'react';
import { Col } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../utilities/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, gloading, gerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errormgs;

    if (gerror) {
        errormgs=
          <div>
            <p className='bg-danger text-white p-3'>Error: {gerror.message}</p>
          </div>;
       
        
      }
      if (gloading) {
         return(<Loading></Loading>)
      }
      if (user) {
        
          navigate(from, {replace:true})
        
        
      }
    return (
        <div>
            <Col md={12}>
                <button onClick={()=> signInWithGoogle()}  className='btn btn-outline-success col-12' >   <FaGoogle /> Continue with Google</button>
                {errormgs}
            </Col>
        </div>
    );
};

export default SocialLogin;