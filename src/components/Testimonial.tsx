// src/components/Testimonials.tsx
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Testimonials: React.FC = () => {
    return (
        <section className="bg-white py-5">
            <Container>
                <h2 className="text-center mb-5">Testimonials</h2>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <Card className="border-0 shadow-sm p-4">
                            <Image src="https://via.placeholder.com/80" roundedCircle className="mx-auto mb-3" />
                            <Card.Text className="fst-italic">
                                "We can fix it almost any device you can think of. Get a free estimate today."
                            </Card.Text>
                            <Card.Title className="mb-0">- John Doe</Card.Title>
                            <Card.Text className="text-muted">CEO, Tech Company</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;