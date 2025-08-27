// src/components/Testimonials.tsx
import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
  name: string;
  source: string;
  review: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Merche',
    source: 'Hace un mes',
    review: 'Si quieres que tu dispositivo sea reparado a tiempo y de forma profesional, te recomiendo que lo visites una vez. Mi experiencia es excelente y el personal es muy amable. Recomendable',
  },
  {
    name: 'lucia perejuan',
    source: 'Hace 5 meses',
    review: 'Totalmente recomendables, servicio rápido y efectivo, precio ajustado y trato amable, ¡no se puede pedir más!',
  },
  {
    name: 'Almudena Campuzano',
    source: 'Hace 6 meses',
    review: 'So kind! I asked a bit of a stupid question (I thought my airpods were broken, but actually, turned out it was my charging cable). They were so nice about it, and trouble shooted it for me in no time. Thank you!',
  },
  {
    name: 'Clara de Riquer',
    source: 'Hace 6 meses',
    review: 'Muy buenos en su trabajo, muy buen trato y me arreglaron el móvil aunque en muchos otros lugares me dijeron que no se podía arreglar.',
  },
  {
    name: 'Giovanna de prat',
    source: 'Hace 11 meses',
    review: 'Los conozco desde que abrieron en la plaza artós en una tienda pequeña. Con el tiempo, han ido creciendo. Siempre me han atendido de maravilla y con una sonrisa. He comprado de todo y hasta un ordenador. Los recomiendo siempre. Son horados y rápidos. Y siempre te dan una solución.',
  },
  {
    name: 'Highlands',
    source: 'Hace un año',
    review: 'Os felicito por la honestidad y por ser correctos. Vine hace unos días a cambiar los micrófonos y la pantalla de mi móvil. Cuando hicieron el cambio me dijeron que tenía 6 meses de garantía y he vuelto un par de veces porque los microfonos no van del todo bien, a la final han detectado que la placa principal de móvil está fallando y me han devuelto el dinero que pagué en sus totalidad. De nuevo gracias! Seguiré viniendo.',
  },
];

const Testimonials: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-3 text-dark section-title ">{translations.testimonialsTitle}</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Carousel indicators={false} controls={false} interval={5000} className="testimonial-carousel">
              {testimonialsData.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <Card className="border-0 shadow-sm p-4 text-center">
                    <Card.Body>
                      <Card.Text className="fst-italic mb-3">
                        "{testimonial.review}"
                      </Card.Text>
                      <Card.Title className="mb-0 fw-bold">{testimonial.name}</Card.Title>
                      <Card.Text className="text-muted">{testimonial.source}</Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;