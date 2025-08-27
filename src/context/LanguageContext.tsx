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
      brand: "Access Store",
      slogan: "Reparaciones rápidas y fiables para tus dispositivos.",
      services: "Servicios",
      buy: "Compramos Dispositivos",
      contact: "Contacto",
      heroTitle: "Reparamos teléfonos, tablets y gadgets",
      heroSubtitle:
        "¡Nuestro nombre lo dice todo! Lo reparamos y lo hacemos rápido. No importa el tipo de dispositivo, lo arreglaremos a un precio justo",
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
      fastFixHeroTitle: "Reparaciones Confiables, Resultados Garantizados",
      fastFixHeroDescription: "Ofrecemos un servicio de reparación de teléfonos preciso y seguro. Nuestros técnicos especializados trabajan con el máximo cuidado para devolver a tu dispositivo toda su funcionalidad.",
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
          description: "Access Store realiza reemplazos de batería profesionales.",
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
            "Reparar es mejor que reemplazar, y Access Store supera a todas las demás empresas de reparación de teléfonos.",
          icon: "bi-tags",
        },
        {
          title: "Garantía Superior",
          description:
            "Más fuerte que cualquier funda, Access Store ofrece la garantía más fiable del mercado.",
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
      footerCopyright: "Todos los derechos reservados.",
      quickLinksTitle: "Enlaces Rápidos",
      repairServicesTitle: "Servicios de Reparación",
      informationTitle: "Información",
      hoursTitle: "Horario",
      mondaySaturdayMorning: "Lunes - Sábado: 10:00 a 14:00",
      mondaySaturdayAfternoon: "Lunes - Sábado: 16:30 a 20:30",
      quickLinks: [
        { text: "Inicio", href: "/" },
        { text: "Nosotros", href: "/about" },
        { text: "Servicios", href: "#servicios" },
        { text: "Contacto", href: "/business" },
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
      aboutUs: "Sobre nosotros",

      aboutUsParagraph1:
        "Somos tu equipo de soporte técnico 24/7, listos para configurar y reparar tu móvil, tablet o computadora, y ayudarte a dominarlo.",
      aboutUsParagraph2:
        "En Access Store, estamos obsesionados con los gadgets y los dispositivos. Somos las personas que hacen cola el día del lanzamiento esperando el último smartphone o consola de videojuegos. Nos encanta todo lo relacionado con la tecnología, pero no confundas nuestra pasión con esnobismo. No nos autodenominamos genios, pero somos expertos en lo que hacemos.",
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
      teamMemberBio: "John es el técnico principal de Access Store. Con una pasión por la tecnología y un compromiso con la excelencia, se asegura de que cada reparación se realice con la máxima precisión.",
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
      formError: "Ocurrió un error. Por favor, inténtalo de nuevo.",
      years_of_experience: "Años de Experiencia",
      successful_repairs: "Reparaciones Exitosas",
      service_available: "Servicio Disponible",
      warranty: "Garantía",
      whyChooseUsDescription: "Descubre por qué miles de clientes confían en nosotros para sus reparaciones",
      testimonialsTitle: "Testimonios",
      repairDevice: "Repara mi Dispositivo",
      budgetTitle: "Solicita tu Presupuesto de Reparación",
      business: "Reparaciones para empresas",
      businessRepairsText: "Los dispositivos rotos y de bajo rendimiento pueden frenar la productividad de grandes y pequeñas empresas. Acces Store puede hacer que tu negocio vuelva a prosperar",
      businessRepairsTitle: "Nuestras reparaciones son cosa seria",
      budget_calculator: "Calcula presupuesto",
      benefits_title: "Beneficios de trabajar con nosotros",
      benefits_list: [
        {
          title: "Mejores precios garantizados",
          description: "Reparar siempre es mejor que reemplazar. Nuestros precios superan a los de cualquier otra tienda de reparación.",
          icon: "bi-tags"
        },
        {
          title: "Diagnósticos gratis",
          description: "Revisamos tu dispositivo sin coste para identificar el problema de manera precisa.",
          icon: "bi-search"
        },
        {
          title: "Prioridad de trabajo",
          description: "Tus reparaciones reciben prioridad para que tu dispositivo esté listo lo antes posible.",
          icon: "bi-lightning-charge"
        },
        {
          title: "Reparaciones urgentes",
          description: "Servicio exprés para que no te quedes sin tu dispositivo en momentos importantes.",
          icon: "bi-stopwatch"
        },
        {
          title: "Flexibilidad de pago",
          description: "Diferentes opciones de pago adaptadas a tus necesidades.",
          icon: "bi-credit-card"
        },
        {
          title: "Recogida y entrega",
          description: "Nos encargamos de recoger y entregar tu dispositivo sin que tengas que moverte.",
          icon: "bi-truck"
        },
        {
          title: "Máxima calidad de recambios",
          description: "Usamos únicamente repuestos de la más alta calidad para garantizar durabilidad.",
          icon: "bi-award"
        },
        {
          title: "Garantía extendida sin coste",
          description: "Todas nuestras reparaciones cuentan con garantía extra, sin cargos adicionales.",
          icon: "bi-shield-check"
        }
      ]
    },
    en: {
      brand: "Access Store",
      slogan: "Fast and reliable repairs for your devices.",
      services: "Services",
      buy: "We Buy Devices",
      contact: "Contact",
      
      heroTitle: "We Fix Phones, Tablets And Gadgets",
      fastRepair: "We Repair Devices Fast",
      expertSolutions: "Expert Tech Solutions",
      likeNew: "Your Phone Like New",
      secureRepairs: "Fast & Secure Repairs",
      gadgetExperts: "Gadget Repair Experts",
      heroSubtitle:
        "Our name says it all! We fix it and we fix it fast. No matter what type of device it is, we will repair it for a fair price.",
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
      fastFixHeroTitle: "Reliable Repairs, Guaranteed Results",
      fastFixHeroDescription: "We provide precise and secure phone repair services. Our expert technicians work with great care to restore your device to full functionality.",
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
          description: "Access Store performs professional battery replacements.",
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
            "Repairing beats replacing, and Access Store beats all other phone repair companies.",
          icon: "bi-tags",
        },
        {
          title: "Superior Warranty",
          description:
            "Stronger than any phone case, Access Store offers the most reliable warranty on the market.",
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
      footerCopyright: "© 2020 Access Store. All rights reserved.",
      quickLinksTitle: "Quick Links",
      repairServicesTitle: "Repair Services",
      informationTitle: "Information",
      hoursTitle: "Hours",
      mondaySaturdayMorning: "Monday - Saturday: 10:00 am to 2:00 pm",
      mondaySaturdayAfternoon: "Monday - Saturday: 4:30 pm to 8:30 pm",
      quickLinks: [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Services", href: "#servicios" },
        { text: "Contact", href: "/business" },
      ],
      repairServices: [
        { text: "Smartphone", href: "#" },
        { text: "Laptop", href: "#" },
        { text: "Computer", href: "#" },
      ],
      information: [
        { text: "FAQs", href: "/faq" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms & Conditions", href: "/terms" },
      ],
      aboutUsTitle: "Who We Are",
      aboutUs: "About Us",
      aboutUsParagraph1:
        "We’re your 24/7 tech support team, ready to set up and fix your mobile, tablet or computer, and help you master it.",
      aboutUsParagraph2:
        "At Access Store we are obsessed with gadgets and gizmos. We’re the folks standing in line on launch day waiting for the latest smartphone or gaming console.We love all things tech, but don’t confuse our passion for snobbery. We’re not self-described geniuses, but we are experts at what we do.",
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
      teamMemberBio: "John is the head technician at Access Store. With a passion for technology and a commitment to excellence, he ensures every repair is performed with the utmost precision.",
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
      formError: "An error occurred. Please try again.",
      years_of_experience: "Years of Experience",
      successful_repairs: "Successful Repairs",
      service_available: "Service Available",
      warranty: "Warranty",
      whyChooseUsDescription: "Discover why thousands of customers trust us with their repairs",
      testimonialsTitle: "Testimonials",
      repairDevice: "Repair My Device",
      budgetTitle: "Request Your Repair Quote",
      business: "Business repairs",
      businessRepairsText: "Broken and slow-performing devices can grind productivity down to a halt for big and small companies. Acces Store can get business booming again",
      businessRepairsTitle: "Our Repairs Mean Business",
      budget_calculator: "Get a quote",
      benefits_title: "Benefits of working with us",
      benefits_list: [
        {
          title: "Best prices guaranteed",
          description: "Repairing is always better than replacing. Our prices beat any other repair shop.",
          icon: "bi-tags"
        },
        {
          title: "Free diagnostics",
          description: "We check your device at no cost to identify the issue accurately.",
          icon: "bi-search"
        },
        {
          title: "Work priority",
          description: "Your repairs receive priority so your device is ready as soon as possible.",
          icon: "bi-lightning-charge"
        },
        {
          title: "Urgent repairs",
          description: "Express service so you don’t stay without your device when you need it most.",
          icon: "bi-stopwatch"
        },
        {
          title: "Payment flexibility",
          description: "Different payment options tailored to your needs.",
          icon: "bi-credit-card"
        },
        {
          title: "Pickup and delivery",
          description: "We take care of picking up and delivering your device so you don’t have to move.",
          icon: "bi-truck"
        },
        {
          title: "Top quality spare parts",
          description: "We only use the highest quality parts to ensure durability.",
          icon: "bi-award"
        },
        {
          title: "Extended warranty at no cost",
          description: "All our repairs come with extra warranty, with no additional charges.",
          icon: "bi-shield-check"
        }
      ]
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
