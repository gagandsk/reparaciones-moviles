import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
    const { translations } = useLanguage();

    return (
        <Container className="min-vh-100 d-flex align-items-center justify-content-center">
            <Row className="text-center">
                <Col xs={12}>
                    <div className="mb-4">
                        <h1
                            className="display-1 fw-bold"
                            style={{
                                fontSize: "8rem",
                                color: "#F7E741",
                                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                            }}
                        >
                            404
                        </h1>
                    </div>
                    <div className="mb-4">
                        <h2 className="h3 mb-3 text-white">{translations.notFoundTitle}</h2>
                        <p className="lead text-muted mb-4">
                            {translations.notFoundMessage}
                        </p>
                    </div>
                    <div className="mb-5">
                        <i
                            className="bi bi-exclamation-triangle-fill"
                            style={{
                                fontSize: "4rem",
                                color: "#6c757d",
                            }}
                        ></i>
                    </div>
                    <div className="mt-5">
                        <p className="text-muted mb-3">{translations.notFoundHelpText}</p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <Link to="/about" className="text-decoration-none text-warning">
                                {translations.aboutUs}
                            </Link>
                            <span className="text-muted">|</span>
                            <Link
                                to="/business"
                                className="text-decoration-none text-warning"
                            >
                                {translations.contact}
                            </Link>
                            <span className="text-muted">|</span>
                            <Link to="/faq" className="text-decoration-none text-warning">
                                {translations.faqTitle}
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
