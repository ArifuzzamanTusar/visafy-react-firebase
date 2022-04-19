import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://i.ibb.co/R2yNHP7/eva-darron-o-Cd-Vt-GFe-DC0-unsplash.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption_container'>
                        <div className="carousel_inner container">
                            <h2 className='slider_title'>Welcome to Visafy</h2>

                            <p className='col-md-6'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci vel enim magni exercitationem cupiditate dignissimos ea ipsa sapiente id.</p>


                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://i.ibb.co/71Tt3CL/kerwin-elias-TKE02-PRu97k-unsplash.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption_container'>
                        <div className="carousel_inner container">
                            <h2 className='slider_title'>Lorem ipsum dolor sit amet.</h2>

                            <p className='col-md-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quaerat vel sunt placeat. Quaerat, soluta. Deserunt necessitatibus corrupti voluptate sapiente? </p>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-image"
                        src="https://i.ibb.co/2M1GR28/maksym-ostrozhynskyy-y-PP-9-Na-IP9o-unsplash.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption_container'>
                        <div className="carousel_inner container">
                            <h2 className='slider_title'>Lorem ipsum dolor sit amet.</h2>

                            <p className='col-md-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nemo labore fugit itaque ullam eius ducimus porro possimus magni neque!</p>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>





            </Carousel>
        </div>
    );
};

export default Slider;