
import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Services.css'

const Serviceloop = (props) => {
    const { id, name, image, short_disc } = props.data;

    const navigate = useNavigate();
    const handleCheckout = (serviec_id) => {
        // console.log(tourid);
        const url = '/checkout/' + serviec_id;
        navigate(url);
    }
    return (
        <Col md={4} id={"loop_" + id}>
            <div className="service_card p-3 shadow">
                <div className="service_image">
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className="service_body p-3">
                    <h4>{name}</h4>
                    <p>{short_disc}</p>
                    <Button onClick={() => handleCheckout(id)} className='book_now col-12 my-3'>Book Now</Button>
                </div>
            </div>
            
        </Col>
    );
};

export default Serviceloop;