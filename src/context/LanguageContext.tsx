import React, { createContext, useContext, useState, ReactNode } from "react";
import shopImg from "../assets/hero-bg.jpg";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translations: { [key: string]: string };
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("es");

  const translations = {
    es: {
      services: "Servicios",
      buy: "Compramos Dispositivos",
      contact: "Contacto",
      heroTitle: "Reparaciones rápidas de teléfonos en 45 minutos.",
      heroSubtitle:
        "Soluciones eficientes para tu iPhone, Samsung y más. Compra de dispositivos rotos.",
      repairMyDevice: "Repara mi Dispositivo",
      heroSlides: [
        {
          title: "Reparamos teléfonos, tablets y gadgets",
          subtitle: "Soluciones rápidas y eficientes para tus dispositivos.",
        },
        {
          title: "Somos expertos en reparación de móviles",
          subtitle: "Con años de experiencia, garantizamos el mejor servicio.",
        },
        {
          title: "Más de 20.000 reparaciones desde 2015",
          subtitle:
            "La confianza de miles de clientes satisfechos nos respalda.",
        },
      ],
      fastFixHeroTitle: "Lo Arreglamos Casi Tan Rápido Como Lo Rompes.",
      fastFixHeroDescription:
        "Realizamos reparaciones de teléfono rápidas. En la mayoría de los casos, los técnicos podrán reparar tu dispositivo en solo minutos; normalmente, tu teléfono estará listo en 45 minutos o menos.",
      servicesTitle: "Nuestros Servicios",
      servicesList: [
        {
          title: "Pantalla Agrietada",
          description:
            "Nuestros servicios de reemplazo de pantalla agrietada son rápidos y asequibles.",
          icon: "bi-phone",
        },
        {
          title: "Daño por Agua",
          description:
            "Realizaremos un diagnóstico para determinar el alcance del daño.",
          icon: "bi-water",
        },
        {
          title: "Altavoz No Funciona",
          description:
            "Es posible que necesites una reparación o un reemplazo del altavoz.",
          icon: "bi-volume-up",
        },
        {
          title: "Sin Señal",
          description: "Cuando experimentas una señal débil o nula.",
          icon: "bi-wifi-off",
        },
        {
          title: "Botones Rotos",
          description:
            "Si los botones de tu dispositivo no funcionan o están rotos.",
          icon: "bi-power",
        },
        {
          title: "Batería Agotada",
          description: "BRAND?? realiza reemplazos de batería profesionales.",
          icon: "bi-battery-half",
        },
      ],
      formProblem: "Selecciona un problema",
      formBrand: "Selecciona una marca",
      formModel: "Modelo (opcional)",
      formProblemPlaceholder: "Selecciona un problema",
      formAdditionalComments: "Comentarios adicionales",
      formNameRequired: "Por favor, introduce tu nombre.",
      formPhoneRequired: "Por favor, introduce tu número de teléfono.",
      formProblemRequired: "Por favor, selecciona un problema.",
      formEmailInvalid: "Por favor, introduce un correo electrónico válido.",
      formProblems: {
        screen: "Pantalla",
        battery: "Batería",
        front_camera: "Cámara frontal",
        rear_camera: "Cámara trasera",
        chasis: "Chasis/Cristal trasero",
        charging_port: "Puerto de Carga",
        buttons: "Botones Volumen/Encendido",
        water_damage: "Daños por agua",
        not_turning_on: "No enciende",
        microphone: "Micrófono",
        speaker: "Altavoz (problemas de sonido)",
        dont_know: "No lo sé (diagnóstico GRATIS)",
        other: "Otros"
      },
      whyChooseUsTitle: "¿Por qué elegirnos?",
      whyChooseUsList: [
        {
          title: "Reparaciones en el Mismo Día",
          description:
            "Cuando tu teléfono se rompe, no quieres que lo arreglen mañana, lo necesitas hoy.",
          icon: "bi-speedometer2",
        },
        {
          title: "Garantía de Precio Bajo",
          description:
            "Reparar es mejor que reemplazar, y BRAND?? supera a todas las demás empresas de reparación de teléfonos.",
          icon: "bi-tags",
        },
        {
          title: "Garantía Superior",
          description:
            "Más fuerte que cualquier funda, BRAND?? ofrece la garantía más fiable del mercado.",
          icon: "bi-gem",
        },
      ],
      contactTitle: "Contáctanos",
      contactSubtitle:
        "Estamos aquí para ayudarte. Si tienes preguntas, necesitas una cotización o quieres visitarnos, ¡no dudes en contactarnos!",
      contactAddress: `Plaça d'Artós, n7, Sarrià-Sant Gervasi, 08034 Barcelona`,
      contactPhone: "+34 932 059 752",
      contactEmail: "info@gmail.com",
      formName: "Nombre Completo",
      formEmail: "Correo Electrónico",
      formPhone: "Teléfono",
      formMessage: "Tu Mensaje",
      formButton: "Enviar Mensaje",
      footerCopyright: "© 2020 NOMBRE MARCA Todos los derechos reservados.",
      quickLinksTitle: "Enlaces Rápidos",
      repairServicesTitle: "Servicios de Reparación",
      informationTitle: "Información",
      hoursTitle: "Horario",
      mondaySaturdayMorning: "Lunes - Sábado: 10:00 a 14:00",
      mondaySaturdayAfternoon: "Lunes - Sábado: 16:30 a 20:30",
      quickLinks: [
        { text: "Inicio", href: "/" },
        { text: "Nosotros", href: "#about" },
        { text: "Servicios", href: "#servicios" },
        { text: "Contacto", href: "#contacto" },
      ],
      repairServices: [
        { text: "Smartphone", href: "#smartphone" },
        { text: "Laptop", href: "#laptop" },
        { text: "Ordenador", href: "#computer" },
      ],
      information: [
        { text: "Preguntas Frecuentes", href: "/faq" },
        { text: "Política de Privacidad", href: "/privacy" },
        { text: "Términos y Condiciones", href: "/terms" },
      ],
      aboutUsTitle: "Quiénes Somos",
      aboutUsParagraph1:
        "Somos tu equipo de soporte técnico 24/7, listos para configurar y reparar tu móvil, tablet o computadora, y ayudarte a dominarlo. Podemos ayudarte en tiendas seleccionadas y por teléfono.",
      aboutUsParagraph2:
        "En BRAND??, estamos obsesionados con los gadgets y los dispositivos. Somos las personas que hacen cola el día del lanzamiento esperando el último smartphone o consola de videojuegos. Nos encanta todo lo relacionado con la tecnología, pero no confundas nuestra pasión con esnobismo. No nos autodenominamos genios, pero somos expertos en lo que hacemos.",
      customer_support: "Atención al cliente",
      customer_support_description: "¿Tienes alguna pregunta? ¿Necesitas ayuda? Ponte en contacto con nosotros.",
      send_us_a_message: "Envíanos un Mensaje",
      ourValuesTitle: "Nuestros Valores",
      value1Title: "Diagnóstico Preciso",
      value1Text: "Actuamos con honestidad, ofreciendo diagnósticos certeros y presupuestos sin sorpresas.",
      value2Title: "Rapidez y Eficiencia",
      value2Text: "Minimizamos el tiempo de espera para que recuperes tu dispositivo lo antes posible.",
      value3Title: "Calidad en Repuestos",
      value3Text: "Utilizamos solo componentes de la más alta calidad para asegurar reparaciones duraderas.",
      meetTheTeam: "Conoce a Nuestro Equipo",
      teamMemberBio: "John es el técnico principal de BRAND??. Con una pasión por la tecnología y un compromiso con la excelencia, se asegura de que cada reparación se realice con la máxima precisión.",
      aboutUsCTA: "¿Necesitas una reparación rápida y fiable?",
      viewServices: "Ver nuestros servicios",
      faq: {
        title: "Preguntas Frecuentes",
        questions: [
          {
            question: "¿Cuánto tiempo tarda una reparación?",
            answer: "El tiempo de reparación varía según el tipo de daño. La mayoría de las reparaciones comunes (pantallas, baterías) se completan en 1-2 horas. Para diagnósticos más complejos, te informaremos del tiempo estimado."
          },
          {
            question: "¿La reparación tiene garantía?",
            answer: "Sí, todas nuestras reparaciones incluyen una garantía de 3 meses que cubre cualquier defecto relacionado con el trabajo realizado o las piezas reemplazadas."
          },
          {
            question: "¿Necesito una cita para ir a la tienda?",
            answer: "No es necesaria una cita. Puedes venir directamente a nuestra tienda durante el horario de atención para un diagnóstico y reparación sin coste inicial."
          },
          {
            question: "¿Aceptan pagos con tarjeta de crédito?",
            answer: "Sí, aceptamos todos los métodos de pago principales, incluyendo tarjetas de crédito, débito, y pagos móviles."
          }
        ]
      },
      formSending: "Enviando...",
      formSuccess: "¡Mensaje enviado con éxito!",
      formError: "Ocurrió un error. Por favor, inténtalo de nuevo."
    },
    en: {
      services: "Services",
      buy: "We Buy Devices",
      contact: "Contact",
      heroTitle: "Fast Phone Repairs in 45 minutes.",
      heroSubtitle:
        "Efficient solutions for your iPhone, Samsung and more. We buy broken devices.",
      repairMyDevice: "Repair My Device",
      heroSlides: [
        {
          title: "We fix phones, tablets and gadgets",
          subtitle: "Fast and efficient solutions for your devices.",
        },
        {
          title: "We are experts at cell phone repair",
          subtitle: "With years of experience, we guarantee the best service.",
        },
        {
          title: "Over 20,000 cell phones repairs since 2015",
          subtitle:
            "The trust of thousands of satisfied customers backs us up.",
        },
      ],
      fastFixHeroTitle: "We Can Fix It Almost As Fast As You Can Break It.",
      fastFixHeroDescription:
        "We do fast phone repair. In most cases, technicians will be able to repair your device in just minutes, we’ll normally get your phone in and out in 45 minutes or less.",
      servicesTitle: "Our Services",
      servicesList: [
        {
          title: "Cracked Screen",
          description:
            "Cracked screen replacement services are both fast and affordable.",
          icon: "bi-phone",
        },
        {
          title: "Water Damage",
          description:
            "We will perform a diagnostic to determine the extent of the damage.",
          icon: "bi-water",
        },
        {
          title: "Speaker Not Working",
          description: "You may be in need of a speaker repair or replacement.",
          icon: "bi-volume-up",
        },
        {
          title: "No Signal",
          description: "When you are experiencing weak signal or no signal.",
          icon: "bi-wifi-off",
        },
        {
          title: "Broken Buttons",
          description:
            "If buttons on your device are malfunctioning or broken.",
          icon: "bi-power",
        },
        {
          title: "Dead Battery",
          description: "BRAND?? performs professional battery replacements.",
          icon: "bi-battery-half",
        },
      ],
      formProblem: "Select a problem",
      formBrand: "Select a brand",
      formModel: "Model (optional)",
      formProblemPlaceholder: "Select a problem",
      formAdditionalComments: "Additional comments",
      formNameRequired: "Please enter your name.",
      formPhoneRequired: "Please enter your phone number.",
      formProblemRequired: "Please select a problem.",
      formEmailInvalid: "Please enter a valid email address.",
      formProblems: {
        screen: "Screen",
        battery: "Battery",
        front_camera: "Front camera",
        rear_camera: "Rear camera",
        chassis: "Chassis/Rear glass",
        charging_port: "Charging port",
        buttons: "Volume/Power buttons",
        water_damage: "Water damage",
        not_turning_on: "Not turning on",
        microphone: "Microphone",
        speaker: "Speaker (sound issues)",
        dont_know: "I don't know (FREE diagnostic)",
        other: "Other"
      },
      whyChooseUsTitle: "Why Choose Us?",
      whyChooseUsList: [
        {
          title: "Same Day Repairs",
          description:
            "When your phone breaks, you don’t want it fixed tomorrow—you need it fixed today.",
          icon: "bi-speedometer2",
        },
        {
          title: "Low Price Guarantee",
          description:
            "Repairing beats replacing, and BRAND?? beats all other phone repair companies.",
          icon: "bi-tags",
        },
        {
          title: "Superior Warranty",
          description:
            "Stronger than any phone case, BRAND?? offers the most reliable warranty on the market.",
          icon: "bi-gem",
        },
      ],
      contactTitle: "Contact Us",
      contactSubtitle:
        "We are here to help you. If you have questions, need a quote, or want to visit us, feel free to contact us!",
      contactAddress: `Plaça d'Artós, n7, Sarrià-Sant Gervasi, 08034 Barcelona`,
      contactPhone: "+34 932 059 752",
      contactEmail: "info@gmail.com",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone",
      formMessage: "Your Message",
      formButton: "Send Message",
      footerCopyright: "© 2020 BRAND. All rights reserved.",
      quickLinksTitle: "Quick Links",
      repairServicesTitle: "Repair Services",
      informationTitle: "Information",
      hoursTitle: "Hours",
      mondaySaturdayMorning: "Monday - Saturday: 10:00 am to 2:00 pm",
      mondaySaturdayAfternoon: "Monday - Saturday: 4:30 pm to 8:30 pm",
      quickLinks: [
        { text: "Home", href: "/" },
        { text: "About Us", href: "#about" },
        { text: "Services", href: "#servicios" },
        { text: "Contact", href: "#contacto" },
      ],
      repairServices: [
        { text: "Smartphone", href: "#smartphone" },
        { text: "Laptop", href: "#laptop" },
        { text: "Computer", href: "#computer" },
      ],
      information: [
        { text: "FAQs", href: "/faq" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms & Conditions", href: "/terms" },
      ],
      aboutUsTitle: "Who We Are",
      aboutUsParagraph1:
        "We’re your 24/7 tech support team, ready to set up and fix your mobile, tablet or computer, and help you master it. We can help you in selected stores and over the phone.",
      aboutUsParagraph2:
        "At BRAND?? we are obsessed with gadgets and gizmos. We’re the folks standing in line on launch day waiting for the latest smartphone or gaming console.We love all things tech, but don’t confuse our passion for snobbery. We’re not self-described geniuses, but we are experts at what we do.",
      customer_support: "Customer Support",
      customer_support_description: "Have a question? Need some help? Get in touch with us.",
      send_us_a_message: "Send Us a Message",
      ourValuesTitle: "Our Values",
      value1Title: "Accurate Diagnosis",
      value1Text: "We act with honesty, providing accurate diagnoses and no-surprise quotes.",
      value2Title: "Speed and Efficiency",
      value2Text: "We minimize your waiting time so you get your device back as soon as possible.",
      value3Title: "Quality Parts",
      value3Text: "We use only the highest quality components to ensure long-lasting repairs.",
      meetTheTeam: "Meet Our Team",
      teamMemberBio: "John is the head technician at BRAND??. With a passion for technology and a commitment to excellence, he ensures every repair is performed with the utmost precision.",
      aboutUsCTA: "Need a fast and reliable repair?",
      viewServices: "View Our Services",
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "How long does a repair take?",
            answer: "Repair time varies depending on the type of damage. Most common repairs (screens, batteries) are completed in 1-2 hours. For more complex diagnostics, we will inform you of the estimated time."
          },
          {
            question: "Is the repair under warranty?",
            answer: "Yes, all our repairs come with a 3-month warranty that covers any defects related to the work performed or the parts replaced."
          },
          {
            question: "Do I need an appointment to come to the store?",
            answer: "No appointment is necessary. You can come directly to our store during business hours for a diagnosis and repair with no initial fee."
          },
          {
            question: "Do you accept credit card payments?",
            answer: "Yes, we accept all major payment methods, including credit cards, debit cards, and mobile payments."
          }
        ]
      },
      formSending: "Sending...",
      formSuccess: "Message sent successfully!",
      formError: "An error occurred. Please try again."
    },
  };

  const contextValue = {
    language,
    setLanguage,
    translations: translations[language as keyof typeof translations],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage debe ser usado dentro de un LanguageProvider");
  }
  return context;
};
