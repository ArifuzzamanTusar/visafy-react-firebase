import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <div className="page-header text-center py-5 ">
                    <h1 className="py-2">About Page</h1>
                </div>

                <Row>

                    <Col md={6}>
                        <div className="p-3">

                            {/* Image section  */}
                            <img className='img-fluid' src="https://i.ibb.co/s2P6WJs/carter-yocham-tn-YWFvk-fr-U-unsplash.jpg" alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="p-3">
                            {/* about section  */}
                            <h3>Name</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, molestias. Asperiores aliquid distinctio enim fugit! Dolor, voluptates fuga. Magni, hic.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ea soluta, est laudantium iusto illo eveniet. Dicta quia reprehenderit nisi?</p>
                        </div>
                    </Col>
                </Row>











            </Container>

        </div>
    );
};

export default About;