import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Badge } from 'react-bootstrap';
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
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedFields, setCompletedFields] = useState(0);
  const [isFormAnimating, setIsFormAnimating] = useState(false);

  const totalSteps = 3;
  const totalRequiredFields = 5; // name, email, phone, brand, problem

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  // Calculate completion percentage
  useEffect(() => {
    const requiredFields = ['name', 'email', 'phone', 'brand', 'problem'];
    const completed = requiredFields.filter((field) => formData[field as keyof typeof formData].trim() !== '').length;
    setCompletedFields(completed);
  }, [formData]);

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
      setValidated(true); // Trigger validation feedback
      return;
    }
    setIsFormAnimating(true);
    setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      setIsFormAnimating(false);
    }, 300);
  };

  const prevStep = () => {
    setIsFormAnimating(true);
    setTimeout(() => {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
      setIsFormAnimating(false);
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
        form.name.value = formData.name;
        form.email.value = formData.email;
        form.phone.value = formData.phone;
        form.brand.value = formData.brand;
        form.model.value = formData.model;
        form.problem.value = formData.problem;
        form.additionalComments.value = formData.additionalComments;

        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
          publicKey: PUBLIC_KEY,
        });

        setFormStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: translations.successMessage,
        });
        setFormData(formInitialDetails);
        setValidated(false);
        setCurrentStep(1);
        setCompletedFields(0);
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
    { value: 'Apple', icon: '📱' },
    { value: 'Samsung', icon: '📱' },
    { value: 'Xiaomi', icon: '📱' },
    { value: 'Oppo', icon: '📱' },
    { value: 'Huawei', icon: '📱' },
    { value: 'Google Pixel', icon: '📱' },
    { value: 'Realme', icon: '📱' },
    { value: 'Sony', icon: '📱' },
    { value: 'Motorola', icon: '📱' },
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
                    {translations.requiredName || 'El nombre es requerido.'}
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
                    {translations.requiredEmail || 'Por favor, ingrese un email válido.'}
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
                    {translations.requiredPhone || 'Por favor, ingrese un teléfono válido (7-15 dígitos).'}
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
                <i className="bi bi-phone display-4 text-success"></i>
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
                      <div className="fs-4 mb-1">{brand.icon}</div>
                      <small className="fw-semibold">{brand.value}</small>
                    </div>
                  </Col>
                ))}
              </Row>
              {validated && !formData.brand && (
                <div className="invalid-feedback d-block">
                  {translations.requiredBrand || 'La marca es requerida.'}
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
                <i className="bi bi-chat-text display-4 text-info"></i>
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
                className="modern-input rounded-4 p-3 border-0 bg-light-custom shadow-sm"
                placeholder={translations.describe_additional_details}
              />
              <Form.Text className="text-muted">
                {translations.more_details_help}
              </Form.Text>
            </Form.Group>
            <Card className="summary-card bg-light border-0 rounded-4 p-4">
              <h5 className="fw-bold mb-3">
                <i className="bi bi-clipboard-check me-2 text-success"></i>
                {translations.request_summary}
              </h5>
              <Row>
                <Col md={6}>
                  <p><strong>{translations.formName}</strong> {formData.name}</p>
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
            <Card className="modern-card shadow-lg border-0 rounded-4 overflow-hidden">
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
                      <i className="bi bi-arrow-left me-2"></i>
                      {translations.prev}
                    </Button>
                    {currentStep < totalSteps ? (
                      <Button
                        onClick={nextStep}
                        disabled={formStatus.submitting}
                        className="btn-modern px-4 py-2 rounded-pill"
                      >
                        {translations.next}
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={formStatus.submitting || !canProceedToNextStep()}
                        className="btn-modern px-5 py-2 rounded-pill"
                      >
                        {formStatus.submitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            {translations.sending}
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
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