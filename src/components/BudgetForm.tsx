import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Badge } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

import apple from "../assets/apple.png";
import google from "../assets/google.png";
import huawei from "../assets/huawei.png";
import motorola from "../assets/motorola.png";
import oppo from "../assets/oppo.png";
import samsung from "../assets/samsung.png";
import sony from "../assets/sony.png";
import xiaomi from "../assets/xiaomi.png";


const SERVICE_ID = 'service_1ari839';
const TEMPLATE_ID = 'template_nclqqyw';
const PUBLIC_KEY = 'XAgPdQ1R-fghUzpJl';

const BudgetForm: React.FC = () => {
  const { translations } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isFormAnimating, setIsFormAnimating] = useState(false);

  const totalSteps = 3;

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1: {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{7,15}$/;
        return (
          formData.name.trim() &&
          emailRegex.test(formData.email) &&
          phoneRegex.test(formData.phone)
        );
      }
      case 2:
        return formData.brand && formData.problem;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    const form = formRef.current;
    if (form && !canProceedToNextStep()) {
      setValidated(true);
      return;
    }
    setIsFormAnimating(true);
    setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      setIsFormAnimating(false);
      // Scroll to the top of the card
      if (cardRef.current) {
        cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  const prevStep = () => {
    setIsFormAnimating(true);
    setTimeout(() => {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
      setIsFormAnimating(false);
      // Optional: Scroll to top on prev step as well
      if (cardRef.current) {
        cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;

    if (form && form.checkValidity() === false) {
      setValidated(true);
      e.stopPropagation();
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      if (form) {
        // Ensure form fields are populated with current state values
        (form.elements.namedItem('name') as HTMLInputElement).value = formData.name;
        (form.elements.namedItem('email') as HTMLInputElement).value = formData.email;
        (form.elements.namedItem('phone') as HTMLInputElement).value = formData.phone;
        (form.elements.namedItem('brand') as HTMLInputElement).value = formData.brand;
        (form.elements.namedItem('model') as HTMLInputElement).value = formData.model;
        (form.elements.namedItem('problem') as HTMLInputElement).value = formData.problem;
        (form.elements.namedItem('additionalComments') as HTMLInputElement).value = formData.additionalComments;

        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
          publicKey: PUBLIC_KEY,
        });

        // Reset form and state
        setFormData(formInitialDetails);
        setValidated(false);
        setCurrentStep(1);
        setIsFormAnimating(false);
        form.reset(); // Reset the native form element

        // Show success message and clear it after 3 seconds
        setFormStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: translations.successMessage,
        });

        setTimeout(() => {
          setFormStatus({
            submitting: false,
            submitted: false,
            error: false,
            message: '',
          });
          // Scroll to top after reset
          if (cardRef.current) {
            cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 3000); // Clear success message after 3 seconds
      }
    } catch (error) {
      console.error('FAILED...', error);
      setFormStatus({
        submitting: false,
        submitted: true,
        error: true,
        message: translations.errorMessage,
      });
    }
  };

  const brands = [
    { value: 'Apple', icon: apple },
    { value: 'Samsung', icon: samsung },
    { value: 'Xiaomi', icon: xiaomi },
    { value: 'Oppo', icon: oppo },
    { value: 'Huawei', icon: huawei },
    { value: 'Google Pixel', icon: google },
    { value: 'Realme', icon: '📱' },
    { value: 'Sony', icon: sony },
    { value: 'Motorola', icon: motorola },
    { value: 'Otros', icon: '🔧' },
  ];

  const renderStepContent = () => {
    const contentStyle = {
      opacity: isFormAnimating ? 0 : 1,
      transform: isFormAnimating ? 'translateX(20px)' : 'translateX(0)',
      transition: 'all 0.4s ease-out',
    };

    switch (currentStep) {
      case 1:
        return (
          <div style={contentStyle}>
            <div className="text-center mb-5">
              <div className="step-icon mb-3">
                <i className="bi bi-person-circle display-4 text-warning"></i>
              </div>
              <h3 className="fw-bold mb-2">{translations.personal_info}</h3>
              <p className="text-muted">{translations.weNeedYourData}</p>
            </div>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-5" controlId="formName">
                  <Form.Label className="text-muted mb-2 fw-semibold">
                    <i className="bi bi-person me-2 text-primary"></i>
                    {translations.formName}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="modern-input rounded-4 p-3 border-0 bg-light-custom shadow-sm"
                    placeholder={translations.formName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {translations.formNameRequired}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-5" controlId="formEmail">
                  <Form.Label className="text-muted mb-2 fw-semibold">
                    <i className="bi bi-envelope me-2 text-primary"></i>
                    {translations.formEmail}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="modern-input rounded-4 p-3 border-0 bg-light-custom shadow-sm"
                    placeholder={translations.formEmail}
                  />
                  <Form.Control.Feedback type="invalid">
                    {translations.formEmailInvalid}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-5" controlId="formPhone">
                  <Form.Label className="text-muted mb-2 fw-semibold">
                    <i className="bi bi-telephone me-2 text-primary"></i>
                    {translations.formPhone}
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="\+?\d{7,15}"
                    className="modern-input rounded-4 p-3 border-0 bg-light-custom shadow-sm"
                    placeholder={translations.contactPhone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {translations.formPhoneRequired}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </div>
        );

      case 2:
        return (
          <div style={contentStyle}>
            <div className="text-center mb-5">
              <div className="step-icon mb-3">
                <i className="bi bi-phone display-4 text-warning"></i>
              </div>
              <h3 className="fw-bold mb-2">{translations.device_and_problem}</h3>
              <p className="text-muted">{translations.repair_request_prompt}</p>
            </div>
            <Form.Group className="mb-5" controlId="formBrand">
              <Form.Label className="text-muted mb-3 fw-semibold">
                <i className="bi bi-tag me-2 text-success"></i>
                {translations.select_device_brand}
              </Form.Label>
              <Row className="g-3">
                {brands.map((brand, index) => (
                  <Col xs={6} md={4} lg={3} key={index}>
                    <div
                      className={`brand-card p-3 text-center rounded-4 border cursor-pointer ${formData.brand === brand.value ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, brand: brand.value })}
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: formData.brand === brand.value ? '#e3f2fd' : '#f8f9fa',
                        borderColor: formData.brand === brand.value ? '#007bff' : '#dee2e6',
                      }}
                    >
                      {/*<img src={brand.icon/* alt="" width={50}/><br></br>*/}
                      <small className="fw-semibold">{brand.value}</small>
                    </div>
                  </Col>
                ))}
              </Row>
              {validated && !formData.brand && (
                <div className="invalid-feedback d-block">
                  {translations.formBrand}
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-5" controlId="formModel">
              <Form.Label className="text-muted mb-2 fw-semibold">
                <i className="bi bi-phone-vibrate me-2 text-success"></i>
                {translations.formModel}
              </Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="modern-input rounded-4 p-3 border-0 bg-light-custom shadow-sm"
                placeholder="IPhone 14, Galaxy S23, etc."
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formProblem">
              <Form.Label className="text-muted mb-3 fw-semibold">
                <i className="bi bi-exclamation-circle me-2 text-success"></i>
                {translations.what_is_the_problem}
              </Form.Label>
              <Row className="g-3">
                {translations.repairMyDeviceFormProblems.map((problem, index) => (
                  <Col xs={12} md={6} key={index}>
                    <div
                      className={`problem-card p-3 rounded-4 border cursor-pointer d-flex align-items-center ${formData.problem === problem.title ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, problem: problem.title })}
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: formData.problem === problem.title ? '#fff3cd' : '#f8f9fa',
                        borderColor: formData.problem === problem.title ? '#ffc107' : '#dee2e6',
                      }}
                    >
                      <div>
                        <div className="fw-semibold">{problem.title}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              {validated && !formData.problem && (
                <div className="invalid-feedback d-block">
                  {translations.requiredProblem || 'El problema es requerido.'}
                </div>
              )}
            </Form.Group>
          </div>
        );

      case 3:
        return (
          <div style={contentStyle}>
            <div className="text-center mb-5">
              <div className="step-icon mb-3">
                <i className="bi bi-chat-text display-4 text-warning"></i>
              </div>
              <h3 className="fw-bold mb-2">{translations.additional_details}</h3>
              <p className="text-muted">{translations.extra_info_optional}</p>
            </div>
            <Form.Group className="mb-5" controlId="formAdditionalComments">
              <Form.Label className="text-muted mb-2 fw-semibold">
                <i className="bi bi-chat-square-text me-2 text-info"></i>
                {translations.formAdditionalComments}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                className="modern-input rounded-4 p-3 border-2 bg-light-custom shadow-sm"
                placeholder={translations.describe_additional_details}
              />
              <Form.Text className="text-muted">
                <i className="bi bi-exclamation-circle-fill px-2 text-warning"></i>
                {translations.more_details_help}
              </Form.Text>
            </Form.Group>
            <Card className="summary-card bg-light border-1 rounded-4 p-4">
              <h5 className="fw-bold mb-3">
                <i className="bi bi-clipboard-check me-2 text-success"></i>
                {translations.request_summary}
              </h5>
              <Row>
                <Col md={6}>
                  <p><strong>{translations.formName}:</strong> {formData.name}</p>
                  <p><strong>{translations.formEmail}:</strong> {formData.email}</p>
                  <p><strong>{translations.formPhone}:</strong> {formData.phone}</p>
                </Col>
                <Col md={6}>
                  <p><strong>{translations.brandForm}:</strong> {formData.brand}</p>
                  <p><strong>{translations.model}:</strong> {formData.model || 'No especificado'}</p>
                  <p><strong>{translations.problem}:</strong> {formData.problem}</p>
                </Col>
              </Row>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="budget-calc" className="budget-section py-6">
      <Container>
        <div className="text-center mb-5">
          <Badge bg="bg-gray" className="px-3 py-2 rounded-pill mb-3">
            <i className="bi bi-calculator me-2"></i>
            {translations.freeBudget}
          </Badge>
          <h1 className="display-5 fw-bold mb-3">
            {translations.budgetTitle}
          </h1>
          <p className="fs-5 text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {translations.budgetSubtitle}
          </p>
        </div>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <Card className="modern-card shadow-lg border-0 rounded-4 overflow-hidden" ref={cardRef}>
              <Card.Body className="p-5">
                {formStatus.submitted && (
                  <Alert
                    variant={formStatus.error ? 'danger' : 'success'}
                    className="modern-alert mb-5 rounded-4"
                    style={{ borderLeft: '5px solid #F7E741' }}
                  >
                    <div className="d-flex align-items-center">
                      <i className={`bi ${formStatus.error ? 'bi-exclamation-triangle' : 'bi-check-circle'} fs-4 me-3`}></i>
                      <div>
                        <strong>{formStatus.error ? 'Error' : '¡Éxito!'}</strong>
                        <p className="mb-0 mt-1">{formStatus.message}</p>
                      </div>
                    </div>
                  </Alert>
                )}
                <Form noValidate validated={validated} ref={formRef} onSubmit={handleSubmit}>
                  <input type="hidden" name="name" value={formData.name} />
                  <input type="hidden" name="email" value={formData.email} />
                  <input type="hidden" name="phone" value={formData.phone} />
                  <input type="hidden" name="brand" value={formData.brand} />
                  <input type="hidden" name="model" value={formData.model} />
                  <input type="hidden" name="problem" value={formData.problem} />
                  <input type="hidden" name="additionalComments" value={formData.additionalComments} />
                  {renderStepContent()}
                  <div className="d-flex justify-content-between mt-5">
                    <Button
                      variant="outline-secondary"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="px-4 py-2 rounded-pill"
                    >
                      {translations.prev}
                    </Button>
                    {currentStep < totalSteps ? (
                      <Button
                        onClick={nextStep}
                        disabled={formStatus.submitting}
                        className="btn-modern px-4 py-2 rounded-pill"
                      >
                        {translations.next}
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={formStatus.submitting || !canProceedToNextStep()}
                        className="btn-modern px-5 py-2 rounded-pill request_quote"
                      >
                        {formStatus.submitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            {translations.sending}
                          </>
                        ) : (
                          <>
                            {translations.request_quote}
                          </>
                        )}
                      </Button>
                    )}
                  </div>
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