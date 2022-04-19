import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';
import Serviceloop from '../../Templates/Serviceloop/Serviceloop';
import Slider from './Sections/Slider';

const Home = () => {
    const [services] = useServices()

    return (
        
        <div id='home'>
            <Slider></Slider>
            <div className="py-5"></div>
            <div className="heading text-center">
                <h2 className="title">Popular Tour Packages</h2>
                <p>Look deep into nature, and then you will understand everything better. Get your dream travel today</p>

            </div>

            <div className="py-5">
                <Container>
                    <Row>

                        {
                            services.slice(0, 3).map(getService => <Serviceloop key={getService.id} data={getService}></Serviceloop>)
                        }
                    </Row>
                    <div className="readmore text-center py-5">
                        <Link className='btn btn-success' to={'/services'}>See  More Services</Link>
                    </div>


                </Container>
            </div>


        </div>
    );
};

export default Home;