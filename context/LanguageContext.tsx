"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, section?: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "es" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const translations: Record<string, any> = {
    es: {
      navbar: {
        inicio: "Inicio",
        servicios: "Servicios",
        sobreMi: "Dani Suachá",
        testimonios: "Testimonios",
        faq: "FAQ",
        cta: "Agendar Sesión"
      },
      hero: {
        badge: "Sanación Emocional Profunda",
        heading: "Biodesprogramación",
        description: "Tu historia no determina tu destino. A veces el síntoma no es el problema, es el mensaje. Cuando haces consciente lo inconsciente, tu vida comienza a transformarse.",
        emphasis: "Reprograma tu vida conscientemente.",
        cta1: "Agendar y confirmar sesión",
        cta2: "Solicitar más información",
        overlay: "Comprender es liberar"
      },
      about: {
        title: "Hola, soy Dani Suachá",
        subtitle: "Terapeuta en Biodesprogramación",
        p1: "Biodesprogramadora bilingüe certificada por el Instituto de Biodesprogramación Fernando Sánchez y certificación en Habilidades Socioemocionales, avalada por la SEP, la Red CONOCER y validez internacional.",
        p2: "He ayudado a muchas personas a identificar y entender su situación y/o padecimientos, y a su vez a reprogramar su vida conscientemente.",
        p3: "Creo firmemente que la enfermedad y los conflictos no son errores, sino soluciones biológicas de supervivencia que, una vez comprendidas, dejan de ser necesarias.",
        certifications: [
          "Instituto de Biodesprogramación Fernando Sánchez G-26",
          "Certificación EC1158 'Implementación de Habilidades Socioemocionales y Metodolologías para Desarrollarlas'"
        ],
        alt: "Daniela - Terapeuta Profesional"
      },
      painPoints: {
        title: "¿Qué se puede trabajar con la biodesprogramación?",
        subtitle: "A veces el cuerpo y la mente nos envían señales claras de que algo necesita ser atendido.",
        ctaTitle: "¿Te identificas?",
        ctaDesc: "No tienes que vivir con esto para siempre.",
        ctaLink: "Hablemos ahora",
        cards: [
          {
            title: "Salud física",
            desc: "Síntomas que regresan una y otra vez, dolores persistentes, problemas digestivos, respiratorios u hormonales, o un cansancio constante…pueden ser señales de que tu cuerpo está intentando decirte algo. Cuando comprendes el origen emocional de lo que estás viviendo, también puede empezar a mejorar cómo te sientes físicamente."
          },
          {
            title: "Relaciones",
            desc: "Conflictos de pareja, relaciones repetitivas o conflictivas, dificultad para establecer límites, dependencia emocional."
          },
          {
            title: "Emociones y bienestar",
            desc: "Ansiedad o estrés, tristeza profunda, miedos o inseguridades, culpa o sensación de no merecimiento, dificultad para tomar decisiones."
          },
          {
            title: "Abundancia y desarrollo personal",
            desc: "Bloqueos económicos, creencias limitantes sobre el dinero, falta de confianza personal, dificultad para avanzar en proyectos o metas."
          },
          {
            title: "Patrones repetitivos",
            desc: "Situaciones económicas, laborales o personales que se repiten una y otra vez en tu historia."
          }
        ]
      },
      methodology: {
        badge: "Metodología",
        title: "¿Qué es la Biodesprogramación?",
        p1: "La biodesprogramación es un proceso de acompañamiento terapéutico que permite identificar y liberar los programas emocionales inconscientes que pueden influir en nuestra salud, nuestras relaciones y nuestras experiencias de vida. Libera tu mente, sana tu historia, transforma tu vida.",
        cta: "Ver disponibilidad",
        steps: [
          { title: "1. El Origen", desc: "Identificamos el evento o emoción atrapada que detonó el síntoma o patrón actual." },
          { title: "2. Liberación", desc: "Mediante técnicas específicas, liberamos la carga emocional asociada a ese recuerdo." },
          { title: "3. Equilibrio", desc: "Integramos nuevos recursos para que tu cuerpo y mente recuperen su estado natural de salud." }
        ],
        infoTitle: "Un proceso de consciencia y transformación",
        infoP1: "La biodesprogramación no sustituye tratamientos médicos ni psicológicos. Es un acompañamiento complementario que busca ampliar la consciencia sobre los conflictos emocionales que pueden estar influyendo en la vida de una persona.",
        quote: "\"Al comprender la raíz de estos programas, muchas personas experimentan mayor claridad, alivio emocional y cambios profundos en su manera de vivir.\""
      },
      process: {
        title: "Tu camino hacia el bienestar",
        subtitle: "Cuatro pasos sencillos para comenzar tu transformación",
        steps: [
          { title: "Elige tu horario", desc: "Selecciona el día y hora que mejor te convenga en el calendario." },
          { title: "Pago seguro", desc: "Confirma tu sesión y realiza el pago." },
          { title: "Confirmación", desc: "Recibirás un email automático con el enlace de Zoom." },
          { title: "Sesión 1 a 1", desc: "Nos conectamos para trabajar en tu motivo de consulta." }
        ]
      },
      pricing: {
        badge: "RECOMENDADO",
        title1: "Quiero agendar mi sesión ahora",
        desc1: "Si estás listo/a para iniciar tu proceso de sanación, asegura tu espacio en mi agenda ahora mismo.",
        duration: "Duración: 60 minutos",
        format: "Formato: Online (Zoom)",
        cta1: "Reservar Sesión",
        title2: "Tengo dudas o preguntas",
        desc2: "¿No estás seguro si esto es para ti? Escríbeme y evaluemos juntos si la Biodesprogramación puede ayudarte.",
        cta2: "Contactar por WhatsApp",
        ctaEmail: "Enviar un correo electrónico"
      },
      testimonials: {
        title: "Historias de transformación",
        viewBtn: "Ver testimonio",
        alt: "Paciente",
        data: [
          { author: "Olga Celaya", location: "Paciente", text: "La sesión con Dani me ayudó a identificar y liberar una culpa profunda que venía de creencias arraigadas desde mi historia personal y familiar. Me dio una claridad que nunca había tenido." },
          { author: "Ruth Torres", location: "Paciente", text: "Estuve tomando sesiones de bio desprogramación con Daniela, lo cual me ayudó mucho a sacar de raíz eventos traumáticos también a entender qué mensaje me daban mis síntomas..." },
          { author: "Annel Ramos", location: "Paciente", text: "Mi experiencia con la biodesprogramación ha sido profundamente reveladora. Llegué buscando acompañar un tema de salud relacionado con tiroides de Hashimoto..." },
          { author: "Jenny Lango", location: "Paciente", text: "¿Cómo ha sido tu experiencia con la biodesprogramacion? Es una forma que no podría explicar con exactitud..." },
          { author: "Pancho Alvarado", location: "Paciente", text: "Estuve viviendo situaciones con mi familia de origen que ya no podía cambiar aún después de haberlo intentado..." },
          { author: "Ely Ortiz", location: "Paciente", text: "La Biodesprogramación me ha ayudado a transformarme a nivel emocional y personal, así como encontrar el origen de algunas situaciones..." },
          { author: "Oscar López", location: "Paciente", text: "Mi nombre es Oscar López y quiero dar mi testimonio sobre mis terapias de Biodesprogramación que he tomado con Dani Suacha..." },
          { author: "Ana Paulina Manrique", location: "Paciente", text: "He tomado terapia de biodescodificación biológica aproximadamente 2 años, gracias a ella he logrado superar ansiedad y miedos..." }
        ]
      },
      faq: {
        title: "Preguntas Frecuentes",
        q1: "¿qué es la biodesprogramación?",
        a1: {
          title: "Comprender el origen para transformar tu vida",
          p1: "La biodesprogramación es un enfoque terapéutico que busca identificar el origen emocional de los conflictos que experimentamos en nuestra vida.",
          p2: "Muchos síntomas físicos, emociones intensas o patrones repetitivos pueden estar relacionados con programas inconscientes...",
          p3: "El inconsciente registra cada experiencia emocional significativa...",
          p4: "La biodesprogramación permite traer esa información a la consciencia...",
          p5: "No se trata únicamente de sanar un síntoma, sino de comprender el mensaje..."
        },
        q2: "¿qué puedes trabajar?",
        a2: {
          title: "Aspectos de tu vida que puedes transformar",
          items: [
            { t: "Salud y síntomas físicos", d: "El cuerpo puede expresar conflictos emocionales no resueltos a través de síntomas." },
            { t: "Emociones intensas", d: "Ansiedad, miedo, tristeza, enojo o culpa pueden tener raíces emocionales." },
            { t: "Relaciones", d: "Patrones repetitivos en pareja, conflictos familiares o dificultad para establecer vínculos." },
            { t: "Prosperidad y dinero", d: "Creencias inconscientes relacionadas con la escasez, el éxito o el merecimiento." },
            { t: "Autoestima", d: "Programas relacionados con el valor personal, la confianza y la seguridad interior." },
            { t: "Historia familiar", d: "Programas heredados del sistema familiar que pueden influir en decisiones." }
          ]
        },
        q3: "¿cómo funciona una sesión?",
        a3: {
          title: "Un proceso de exploración profunda y consciente",
          p: "Cada sesión de biodesprogramación es un espacio seguro de acompañamiento...",
          steps: [
            { t: "1. Motivo de consulta", d: "Se define claramente el síntoma o emoción." },
            { t: "2. Exploración emocional", d: "Se investigan eventos significativos." },
            { t: "3. Identificación del programa", d: "Se detectan patrones emocionales." },
            { t: "4. Toma de consciencia", d: "Comprender el origen permite reorganizar la información." },
            { t: "5. Integración", d: "Se generan nuevas percepciones." }
          ]
        },
        q4: "¿cómo funciona una sesión de seguimiento?",
        a4: {
          title: "Proceso de una sesión de seguimiento",
          steps: [
            { t: "1. Retomar Motivo de consulta", d: "Se redefine claramente el síntoma." },
            { t: "2. Exploración emocional", d: "Se investigan movimientos internos posteriores." },
            { t: "3. Identificación del programa", d: "Seguimiento a lo trabajado anteriormente." }
          ]
        },
        q5: "¿tengo que dejar mi tratamiento médico?",
        a5: "Absolutamente NO. La Biodesprogramación es complementaria a la medicina. Nunca debes suspender medicación."
      },
      footer: {
        title: "Comienza tu viaje de sanación hoy",
        links: {
          home: "Inicio",
          services: "Servicios",
          testimonials: "Testimonios",
          about: "Dani Suachá",
          faq: "Preguntas"
        },
        rights: "© 2026 Biodesprogramación Terapéutica. Todos los derechos reservados.",
        privacyBtn: "Política de Privacidad",
        developedBy: "desarrollado por",
        privacyModal: {
          title: "Política de Privacidad",
          intro: "Daniela Suacha, con domicilio en León, Guanajuato, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.",
          sec1: { t: "1. Recopilación de Información", d: "Recopilamos información personal que usted nos proporciona voluntariamente al agendar una sesión, incluyendo su nombre, correo electrónico y número de teléfono." },
          sec2: { t: "2. Uso de los Datos", d: "Sus datos se utilizan exclusivamente para gestionar sus citas, enviarle confirmaciones y recordatorios, y proporcionar el servicio terapéutico solicitado." },
          sec3: { t: "3. Confidencialidad", d: "Toda la información compartida durante las sesiones de Biodesprogramación es estrictamente confidencial, siguiendo los más altos estándares éticos de la práctica terapéutica." },
          sec4: { t: "4. Seguridad", d: "Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado o la pérdida." },
          sec5: { t: "5. Sus Derechos", d: "Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento contactándonos a través de " },
          close: "Entendido"
        }
      },
      calendly: {
        badge: "Reserva",
        title: "Agenda tu espacio de transformación",
        p1: "Selecciona el horario que mejor te funcione. Recibirás un correo de confirmación con los detalles del acceso a Zoom.",
        sessionTitle: "Sesión de Biodesprogramación",
        subtitle: "Un espacio seguro y profesional donde podrás:",
        item1: "Comprender el origen emocional de lo que estás viviendo",
        item2: "Liberar programas inconscientes limitantes",
        item3: "Reconectar con tu bienestar y tu potencial",
        modalidad: { t: "Modalidad", d: "Individual (Online o Presencial)" },
        duracion: { t: "Duración", d: "45 - 60 minutos" },
        quote1: "\"Cada proceso es único.\"",
        quote2: "\"Cada historia merece ser comprendida.\"",
        loading: "Cargando calendario...",
        sidebarDesc: "Las sesiones son un espacio de acompañamiento personalizado donde exploramos el origen emocional de los conflictos que deseas comprender o transformar."
      },
      common: {
        floating: {
          scrollTop: "Volver arriba",
          whatsapp: "Contactar por WhatsApp"
        }
      }
    },
    en: {
      navbar: {
        inicio: "Home",
        servicios: "Services",
        sobreMi: "Dani Suachá",
        testimonios: "Testimonials",
        faq: "FAQ",
        cta: "Book Session"
      },
      hero: {
        badge: "Deep Emotional Healing",
        heading: "Bio-deprogramming",
        description: "Your story doesn't determine your destiny. Sometimes the symptom isn't the problem, it's the message. When you make the unconscious conscious, your life begins to transform.",
        emphasis: "Reprogram your life consciously.",
        cta1: "Book and confirm session",
        cta2: "Request more info",
        overlay: "To understand is to release"
      },
      about: {
        title: "Hi, I'm Dani Suachá",
        subtitle: "Bio-deprogramming Therapist",
        p1: "Bilingual Bio-deprogrammer certified by the Fernando Sánchez Bio-deprogramming Institute and certified in Socio-emotional Skills, endorsed by SEP, Red CONOCER, and with international validity.",
        p2: "I have helped many people identify and understand their situation and/or ailments, and in turn reprogram their life consciously.",
        p3: "I firmly believe that disease and conflict are not errors, but biological survival solutions that, once understood, are no longer necessary.",
        certifications: [
          "Fernando Sánchez Bio-deprogramming Institute G-26",
          "EC1158 Certification 'Implementation of Socio-emotional Skills and Methodologies to Develop Them'"
        ],
        alt: "Daniela - Professional Therapist"
      },
      painPoints: {
        title: "What can be worked on with Bio-deprogramming?",
        subtitle: "Sometimes the body and mind send clear signals that something needs attention.",
        ctaTitle: "Do you identify?",
        ctaDesc: "You don't have to live with this forever.",
        ctaLink: "Let's talk now",
        cards: [
          {
            title: "Physical Health",
            desc: "Symptoms that return again and again, persistent pain, digestive, respiratory, or hormonal problems, or constant fatigue... they could be signals that your body is trying to tell you something. When you understand the emotional origin of what you're living, how you feel physically can also start to improve."
          },
          {
            title: "Relationships",
            desc: "Partnership conflicts, repetitive or conflictual relationships, difficulty setting boundaries, emotional dependency."
          },
          {
            title: "Emotions and Wellbeing",
            desc: "Anxiety or stress, deep sadness, fears or insecurities, guilt or feeling of unworthiness, difficulty making decisions."
          },
          {
            title: "Abundance and Development",
            desc: "Financial blocks, limiting beliefs about money, lack of personal confidence, difficulty moving forward with projects or goals."
          },
          {
            title: "Repetitive Patterns",
            desc: "Economic, work, or personal situations that repeat over and over in your history."
          }
        ]
      },
      methodology: {
        badge: "Methodology",
        title: "What is Bio-deprogramming?",
        p1: "Bio-deprogramming is a therapeutic accompaniment process that allows identifying and releasing unconscious emotional programs that can influence our health, relationships, and life experiences. Free your mind, heal your story, transform your life.",
        cta: "See availability",
        steps: [
          { title: "1. The Origin", desc: "We identify the event or trapped emotion that triggered the current symptom or pattern." },
          { title: "2. Release", desc: "Through specific techniques, we release the emotional weight associated with that memory." },
          { title: "3. Balance", desc: "We integrate new resources so your body and mind recover their natural state of health." }
        ],
        infoTitle: "A process of awareness and transformation",
        infoP1: "Bio-deprogramming does not replace medical or psychological treatments. It is a complementary accompaniment that seeks to expand awareness of the emotional conflicts that may be influencing person's life.",
        quote: "\"By understanding the root of these programs, many people experience greater clarity, emotional relief, and profound changes in their way of living.\""
      },
      process: {
        title: "Your path to wellbeing",
        subtitle: "Four simple steps to start your transformation",
        steps: [
          { title: "Choose your schedule", desc: "Select the day and time that best suits you in the calendar." },
          { title: "Secure payment", desc: "Confirm your session and make the payment." },
          { title: "Confirmation", desc: "You'll receive an automatic email with the Zoom link." },
          { title: "1-on-1 Session", desc: "We connect to work on your reason for consultation." }
        ]
      },
      pricing: {
        badge: "RECOMMENDED",
        title1: "I want to book my session now",
        desc1: "If you're ready to start your healing process, secure your spot in my agenda right now.",
        duration: "Duration: 60 minutes",
        format: "Format: Online (Zoom)",
        cta1: "Book Session",
        title2: "I have doubts or questions",
        desc2: "Not sure if this is for you? Write to me and let's evaluate together if Bio-deprogramming can help you.",
        cta2: "Contact via WhatsApp",
        ctaEmail: "Send an email"
      },
      testimonials: {
        title: "Transformation Stories",
        viewBtn: "View testimonial",
        alt: "Patient",
        data: [
          { author: "Olga Celaya", location: "Patient", text: "The session with Dani helped me identify and release deep guilt that came from beliefs rooted in my personal and family history. It gave me a clarity I never had." },
          { author: "Ruth Torres", location: "Patient", text: "I was taking bio-deprogramming sessions with Daniela, which helped me a lot to root out traumatic events and also understand what message my symptoms was giving me..." },
          { author: "Annel Ramos", location: "Patient", text: "My experience with bio-deprogramming has been profoundly revealing. I came looking to accompany a health issue related to Hashimoto's thyroiditis..." },
          { author: "Jenny Lango", location: "Patient", text: "How has your experience with bio-deprogramming been? It's a way I couldn't explain exactly..." },
          { author: "Pancho Alvarado", location: "Patient", text: "I was living situations with my family of origin that I could no longer change even after trying purposefully..." },
          { author: "Ely Ortiz", location: "Patient", text: "Bio-deprogramming has helped me transform at an emotional and personal level, as well as finding the origin of some situations..." },
          { author: "Oscar López", location: "Patient", text: "My name is Oscar López and I want to give my testimony about my Bio-deprogramming therapies with Dani Suacha..." },
          { author: "Ana Paulina Manrique", location: "Patient", text: "I have taken biological bio-decoding therapy for about 2 years, thanks to it I have managed to overcome anxiety and fears..." }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "What is Bio-deprogramming?",
        a1: {
          title: "Understand the origin to transform your life",
          p1: "Bio-deprogramming is a therapeutic approach that seeks to identify the emotional origin of the conflicts we experience in our life.",
          p2: "Many physical symptoms, intense emotions, or repetitive patterns may be related to unconscious programs formed from lived or inherited experiences within the family system.",
          p3: "The unconscious records every significant emotional experience...",
          p4: "Bio-deprogramming allows bringing that information to consciousness to understand its meaning...",
          p5: "It's not just about healing a symptom, but about understanding the message..."
        },
        q2: "What can you work on?",
        a2: {
          title: "Aspects of your life you can transform",
          items: [
            { t: "Physical health and symptoms", d: "The body can express unresolved emotional conflicts through symptoms." },
            { t: "Intense emotions", d: "Anxiety, fear, sadness, anger, or guilt can have deep emotional roots." },
            { t: "Relationships", d: "Repetitive partner patterns, family conflicts, or difficulty establishing healthy bonds." },
            { t: "Prosperity and money", d: "Unconscious beliefs related to scarcity, success, or worthiness." },
            { t: "Self-esteem", d: "Programs related to personal value, confidence, and inner security." },
            { t: "Family history", d: "Inherited programs from the family system that can influence current decisions." }
          ]
        },
        q3: "How does a session work?",
        a3: {
          title: "A process of deep and conscious exploration",
          p: "Each bio-deprogramming session is a safe accompaniment space where the person can explore the deep origin...",
          steps: [
            { t: "1. Reason for consultation", d: "The symptom or emotion is clearly defined." },
            { t: "2. Emotional exploration", d: "Significant events and emotions are investigated." },
            { t: "3. Unconscious program identification", d: "Emotional patterns or beliefs are detected." },
            { t: "4. Awareness making", d: "Understanding the origin allows the unconscious to reorganize info." },
            { t: "5. Integration", d: "New perceptions and internal resources are generated." }
          ]
        },
        q4: "How does a follow-up session work?",
        a4: {
          title: "Follow-up session process",
          steps: [
            { t: "1. Resume Reason for consultation", d: "The symptom or situation is clearly redefined." },
            { t: "2. Emotional exploration", d: "Internal movements regarding previous work are investigated." },
            { t: "3. Unconscious program identification", d: "Follow-up on previously worked patterns." }
          ]
        },
        q5: "Do I have to stop my medical treatment?",
        a5: "Absolutely NOT. Bio-deprogramming is complementary to medicine. You should never stop medication."
      },
      footer: {
        title: "Start your healing journey today",
        links: {
          home: "Home",
          services: "Services",
          testimonials: "Testimonials",
          about: "About Dani",
          faq: "FAQ"
        },
        rights: "© 2026 Therapeutic Bio-deprogramming. All rights reserved.",
        privacyBtn: "Privacy Policy",
        developedBy: "developed by",
        privacyModal: {
          title: "Privacy Policy",
          intro: "Daniela Suacha, located in Leon, Guanajuato, is responsible for collecting your personal data, the use given to it, and its protection.",
          sec1: { t: "1. Information Collection", d: "We collect personal information you voluntarily provide when booking a session, including your name, email, and phone number." },
          sec2: { t: "2. Use of Data", d: "Your data is used exclusively to manage your appointments, send confirmations and reminders, and provide the requested therapeutic service." },
          sec3: { t: "3. Confidentiality", d: "All information shared during Bio-deprogramming sessions is strictly confidential, following the highest ethical standards of therapeutic practice." },
          sec4: { t: "4. Security", d: "We implement technical and organizational security measures to protect your personal data against unauthorized access or loss." },
          sec5: { t: "5. Your Rights", d: "You have the right to access, rectify, or delete your personal data at any time by contacting us via " },
          close: "Got it"
        }
      },
      calendly: {
        badge: "Booking",
        title: "Schedule your transformation space",
        p1: "Select the time that works best for you. You will receive an automatic confirmation email with Zoom access details.",
        sessionTitle: "Bio-deprogramming Session",
        subtitle: "A safe and professional space where you can:",
        item1: "Understand the emotional origin of what you are living",
        item2: "Release limiting unconscious programs",
        item3: "Reconnect with your wellbeing and potential",
        modalidad: { t: "Format", d: "Individual (Online or In-person)" },
        duracion: { t: "Duration", d: "45 - 60 minutes" },
        quote1: "\"Every process is unique.\"",
        quote2: "\"Every story deserves to be understood.\"",
        loading: "Loading calendar...",
        sidebarDesc: "Sessions are a personalized accompaniment space where we explore the emotional origin of the conflicts you wish to understand or transform."
      },
      common: {
        floating: {
          scrollTop: "Scroll to top",
          whatsapp: "Contact on WhatsApp"
        }
      }
    }
  };

  const t = (key: string, section: string = "common"): any => {
    const keys = key.split(".");
    let result = translations[language];
    
    if (section && result[section]) {
      result = result[section];
    } else if (section !== "common") {
      return key;
    }

    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key;
      }
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
