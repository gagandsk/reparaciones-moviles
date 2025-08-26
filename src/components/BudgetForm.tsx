import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_1ari839';
const TEMPLATE_ID = 'template_nclqqyw';
const PUBLIC_KEY = 'XAgPdQ1R-fghUzpJl';

const BudgetForm: React.FC = () => {
  const { translations } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  const formInitialDetails = {
    name: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    problem: '',
    additionalComments: '',
  };

  const [formData, setFormData] = useState(formInitialDetails);
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;

    // Activar la validación de Bootstrap
    setValidated(true);

    // Salir si el formulario no es válido
    if (form && form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      if (form) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
          publicKey: PUBLIC_KEY,
        });

        setFormStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: translations.successMessage || 'Presupuesto solicitado con éxito',
        });
        setFormData(formInitialDetails);
        setValidated(false); // Reinicia el estado de validación
      }
    } catch (error) {
      console.error('FAILED...', error);
      setFormStatus({
        submitting: false,
        submitted: true,
        error: true,
        message: translations.errorMessage || 'Error al enviar el presupuesto. Inténtalo de nuevo más tarde.',
      });
    }
  };

  const brands = [
    'Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Huawei', 'Google Pixel', 'Realme', 'Sony', 'Motorola', 'Otros',
  ];

  const problems = Object.values(translations.formProblems || {});

  return (
    <section id="budget-calc" className="budget-section py-6">
      <Container>
        <h2 className="text-center fw-bold mb-5 section-title">
          {translations.budgetTitle || "Solicita tu Presupuesto de Reparación"}
        </h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="budget-card shadow-lg border-0 rounded-4 p-5 bg-white">
              <Card.Body>
                {formStatus.submitted && (
                  <Alert
                    variant={formStatus.error ? 'danger' : 'success'}
                    className="fade show mb-5"
                    style={{ borderLeft: '5px solid var(--yellow-bright)', borderRadius: '0.75rem', padding: '1.5rem' }}
                  >
                    {formStatus.message}
                  </Alert>
                )}

                <Form noValidate validated={validated} ref={formRef} onSubmit={handleSubmit}>
                  {/* Nombre */}
                  <Form.Group className="mb-5" controlId="formName">
                    <Form.Label className="text-muted mb-2">{translations.formName}</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-4 border-0 p-3 bg-light-custom shadow-sm"
                    />
                    <Form.Control.Feedback type="invalid">
                      {translations.requiredName || 'El nombre es requerido.'}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Email */}
                  <Form.Group className="mb-5" controlId="formEmail">
                    <Form.Label className="text-muted mb-2">{translations.formEmail}</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-4 border-0 p-3 bg-light-custom shadow-sm"
                    />
                    <Form.Control.Feedback type="invalid">
                      {translations.requiredEmail || 'El email es requerido.'}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Teléfono */}
                  <Form.Group className="mb-5" controlId="formPhone">
                    <Form.Label className="text-muted mb-2">{translations.formPhone}</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="rounded-4 border-0 p-3 bg-light-custom shadow-sm"
                    />
                    <Form.Control.Feedback type="invalid">
                      {translations.requiredPhone || 'El teléfono es requerido.'}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Marca */}
                  <Form.Group className="mb-5" controlId="formBrand">
                    <Form.Label className="text-muted mb-2">{translations.formBrand}</Form.Label>
                    <Form.Control
                      as="select"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      className="rounded-4 border-0 p-3 bg-light-custom shadow-sm"
                    >
                      <option value="">{translations.formBrand}</option>
                      {brands.map((brand, index) => (
                        <option key={index} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  {/* Modelo */}
                  <Form.Group className="mb-5" controlId="formModel">
                    <Form.Label className="text-muted mb-2">{translations.formModel}</Form.Label>
                    <Form.Control
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      className="rounded-4 border-0 p-3 bg-light-custom shadow-sm"
                    />
                  </Form.Group>
                  {/* Problema */}
                  <Form.Group className="mb-5" controlId="formProblem">
                    <Form.Label className="text-muted mb-2">{translations.formProblemPlaceholder}</Form.Label>
                    <Form.Control
                      as="select"
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      required
                      className="rounded-4 border-0 p-3 bg-light-custom shadow-sm"
                    >
                      <option value="">{translations.formProblemPlaceholder}</option>
                      {problems.map((problem, index) => (
                        <option key={index} value={problem as string}>
                          {problem as string}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {translations.requiredProblem || 'El problema es requerido.'}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* Comentarios adicionales */}
                  <Form.Group className="mb-5" controlId="formAdditionalComments">
                    <Form.Label className="text-muted mb-2">{translations.formAdditionalComments}</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="additionalComments"
                      value={formData.additionalComments}
                      onChange={handleChange}
                      className="rounded-4 border-0 p-3 bg-light-custom shadow-sm"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="btn-primary-custom w-100 py-3 rounded-4 text-white fw-semibold"
                    disabled={formStatus.submitting}
                  >
                    <span>{formStatus.submitting ? (translations.sending || 'Enviando...') : (translations.formButton || 'Solicitar Presupuesto')}</span>
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

export default BudgetForm;