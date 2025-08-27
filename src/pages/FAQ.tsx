// src/pages/FAQ.tsx
import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const FAQ: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section className="py-4 bg-light-custom mt-5">
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-5">{translations.faq.title}</h2>
        <Accordion defaultActiveKey="0">
          {translations.faq.questions.map((item, index) => (
            <Card className="mb-3 rounded-3 shadow-sm border-0" key={index}>
              <Accordion.Item eventKey={String(index)}>
                <Accordion.Header className="py-3 px-4 fw-bold">{item.question}</Accordion.Header>
                <Accordion.Body className="p-4 text-secondary">
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;