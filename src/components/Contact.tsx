// src/components/Contact.tsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_euu7fne';
const TEMPLATE_ID = 'template_kntjrue';
const PUBLIC_KEY = 'XAgPdQ1R-fghUzpJl';

const Contact: React.FC = () => {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    problem: '',
    additionalComments: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    
    setValidated(true);

    if (form.checkValidity() === true) {
      setFormStatus({ submitting: true, submitted: false, error: false });

      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          from_brand: formData.brand,
          from_model: formData.model,
          from_problem: formData.problem,
          from_additionalComments: formData.additionalComments
        }, PUBLIC_KEY);

        setFormStatus({ submitting: false, submitted: true, error: false });
        setFormData({
          name: '',
          email: '',
          phone: '',
          brand: '',
          model: '',
          problem: '',
          additionalComments: ''
        });
        setValidated(false); // Reset validation state after successful submission
      } catch (error) {
        console.error("Error al enviar el correo:", error);
        setFormStatus({ submitting: false, submitted: true, error: true });
      }
    }
  };

  const brands = ['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Huawei', 'Google Pixel', 'Realme', 'Sony', 'Motorola', 'Otros'];
  const problems = [
    'Pantalla',
    'Bateria',
    'Camara frontal',
    'Camara trasera',
    'Chasis/Cristal trasero',
    'Puerto de Carga',
    'Botones Volumen/Encendido',
    'Daños por agua',
    'No enciende',
    'Microfono',
    'Altavoz (problemas de sonido)',
    'No lo sé (diagnóstico FREE)',
    'Otros'
  ];

  return (
    <section id="contact" className="py-4 bg-light-custom">
      <Container>
        <h2 className="text-center fw-bold mb-3">{translations.contactTitle}</h2>
        <p className="text-center mb-5 text-secondary">{translations.contactSubtitle}</p>
        <Row className="justify-content-center">
          {/* Lado Izquierdo: Información de Contacto */}
          <Col lg={5} className="mb-4 mb-lg-0 text-center text-lg-start">
            <h3 className="fw-bold mb-4">{translations.customer_support}</h3>
            <p className="mb-4 text-secondary">{translations.customer_support_description}</p>
            <div className="d-flex flex-column align-items-center align-items-lg-start">
              {/* Teléfono */}
              <div className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone fs-4 me-3 text-secondary-custom"></i>
                <a href={`tel:${translations.contactPhone}`} className="text-secondary text-decoration-none">
                  <span className="fw-bold">{translations.contactPhone}</span>
                </a>
              </div>
              {/* Dirección */}
              <div className="mb-3 d-flex align-items-center">
                <i className="bi bi-geo-alt fs-4 me-3 text-secondary-custom"></i>
                <a href="#map-section" className="text-secondary text-decoration-none">
                  <span className="fw-bold">{translations.contactAddress}</span>
                </a>
              </div>
              {/* Horario */}
              <div className="mb-3 d-flex align-items-center">
                <i className="bi bi-clock fs-4 me-3 text-secondary-custom"></i>
                <div>
                  <p className="text-secondary mb-1">{translations.mondaySaturdayMorning}</p>
                  <p className="text-secondary mb-0">{translations.mondaySaturdayAfternoon}</p>
                </div>
              </div>
            </div>
          </Col>
          {/* Lado Derecho: Formulario de Contacto */}
          <Col lg={6}>
            <Card className="shadow-sm border-0 rounded-3">
              <Card.Body>
                <h3 className="fw-bold mb-4">{translations.send_us_a_message}</h3>

                {formStatus.submitted && (
                  <Alert variant={formStatus.error ? "danger" : "success"} className="fade show">
                    {formStatus.error ? translations.formError : translations.formSuccess}
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  {/* Nombre */}
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder={translations.formName}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-pill"
                    />
                    <Form.Control.Feedback type="invalid">
                      {translations.formNameRequired}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Email */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder={translations.formEmail}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-pill"
                    />
                    <Form.Control.Feedback type="invalid">
                      {translations.formEmailInvalid}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Teléfono */}
                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Control
                      type="tel"
                      placeholder={translations.formPhone}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="rounded-pill"
                    />
                    <Form.Control.Feedback type="invalid">
                      {translations.formPhoneRequired}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Marca */}
                  <Form.Group className="mb-3" controlId="formBrand">
                    <Form.Select
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      className="rounded-pill"
                    >
                      <option value="">{translations.formBrand}</option>
                      {brands.map((brand, index) => (
                        <option key={index} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  {/* Modelo */}
                  <Form.Group className="mb-3" controlId="formModel">
                    <Form.Control
                      type="text"
                      placeholder={translations.formModel}
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      className="rounded-pill"
                    />
                  </Form.Group>
                  {/* Problema */}
                  <Form.Group className="mb-3" controlId="formProblem">
                    <Form.Select
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      required
                      className="rounded-3"
                    >
                      <option value="">{translations.formProblem}</option>
                      {problems.map((problem, index) => (
                        <option key={index} value={problem}>
                          {problem}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {translations.formProblemRequired}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Comentarios adicionales */}
                  <Form.Group className="mb-3" controlId="formAdditionalComments">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder={translations.formAdditionalComments}
                      name="additionalComments"
                      value={formData.additionalComments}
                      onChange={handleChange}
                      className="rounded-3"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-social-media w-100 mt-3 rounded-pill"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? translations.formSending : translations.formButton}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;