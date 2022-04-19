import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <div className="page-header text-center py-5 ">
                    <h1 className="py-2">Blog Page</h1>
                </div>

                <Row>


                    <Col md={12}>
                        <div className="p-3">
                            {/* QA here */}

                            <div className="p-4 my-3">
                                <h3 className="question py-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laudantium!
                                </h3>
                                <div className="answer">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt magni obcaecati tenetur aut laboriosam cupiditate dolore aperiam suscipit officia nesciunt praesentium rerum soluta perferendis mollitia, unde sunt ratione. Perspiciatis delectus odit repellat ipsa quam saepe unde nam neque eum impedit? Officiis a quam magnam reprehenderit enim earum iusto minus!

                                </div>
                            </div>
                            {/* ----------------------  */}
                            <div className="p-4 my-3">
                                <h3 className="question py-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laudantium!
                                </h3>
                                <div className="answer">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt magni obcaecati tenetur aut laboriosam cupiditate dolore aperiam suscipit officia nesciunt praesentium rerum soluta perferendis mollitia, unde sunt ratione. Perspiciatis delectus odit repellat ipsa quam saepe unde nam neque eum impedit? Officiis a quam magnam reprehenderit enim earum iusto minus!

                                </div>
                            </div>
                            {/* ------------------------------ */}
                            <div className="p-4 my-3">
                                <h3 className="question py-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laudantium!
                                </h3>
                                <div className="answer">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt magni obcaecati tenetur aut laboriosam cupiditate dolore aperiam suscipit officia nesciunt praesentium rerum soluta perferendis mollitia, unde sunt ratione. Perspiciatis delectus odit repellat ipsa quam saepe unde nam neque eum impedit? Officiis a quam magnam reprehenderit enim earum iusto minus!

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>











            </Container>

        </div>
    );
};

export default Blogs;