import React from "react";
import {
  Users,
  HeartHandshake,
  BrainCircuit,
  Heart,
  Sparkles,
  Building2,
  Flower2,
  Sun,
  Leaf,
} from "lucide-react";

export const contactInfo = {
  email: "seresesencial1@gmail.com",
  phone: "3016958670",
  whatsapp:
    "https://api.whatsapp.com/send?phone=573016958670&text=Hola,%20nos%20gustaría%20solicitar%20una%20propuesta%20institucional...",
};

export const instagramProfileUrl =
  "https://www.instagram.com/seres_esencial?igsh=dHk3dXBnZWc0bXlo";

export const clientsData = [
  {
    name: "British",
    icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 mr-4 text-slate-400" />,
  },
  {
    name: "ESDITEC",
    icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 mr-4 text-slate-400" />,
  },
  {
    name: "Solvo",
    icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 mr-4 text-slate-400" />,
  },
  {
    name: "Montessori",
    icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 mr-4 text-slate-400" />,
  },
  {
    name: "Sunshine",
    icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 mr-4 text-slate-400" />,
  },
];

export const portfolioData = [
  {
    id: "dimension-1",
    displayTitle: "Semillas de Plenitud: Innovación Institucional",
    icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
    description:
      "Programas diseñados para evolucionar el ecosistema de aprendizaje, nutriendo el rol del educador y el potencial estratégico organizacional.",
    services: [
      {
        title: "Liderazgo Inspirador y Transformación Docente",
        type: "Seminario Estratégico",
        sector: "Institucional",
        duration: "A partir de 4 horas",
        idealFor: "Equipos Directivos y Docentes",
        benefit:
          "Despierta un liderazgo que guía desde el ejemplo y la coherencia humana.",
        description:
          "Este programa propone una reingeniería del rol docente en el siglo XXI. No es una charla técnica; es un proceso de renovación donde el líder educativo redescubre su propósito fundamental. Trabajamos la gestión del cambio, la inteligencia emocional y el liderazgo consciente para que el equipo camine en sintonía con las necesidades actuales de los estudiantes. Certificable.",
        audience:
          "Rectores, coordinadores y maestros que desean liderar con el corazón.",
        cost: "$500.000",
        capacityNote:
          "A partir de 30 personas hay un adicional de $2.000 por persona.",
        scenarios:
          "Semanas de desarrollo institucional y jornadas de actualización.",
        b2b: "Al fortalecer la esencia de sus maestros, usted siembra un futuro más consciente y equilibrado.",
      },
      {
        title: "Alianza Familia-Colegio: Forjando Vínculos Vitales",
        type: "Escuela de padres",
        sector: "Institucional",
        duration: "2 horas",
        idealFor: "Padres y Cuidadores",
        benefit:
          "Construye puentes de amor y comunicación efectiva entre el hogar y la escuela.",
        description:
          "Reimaginamos la escuela de padres como un círculo de acogida. Proporcionamos a las familias herramientas prácticas de crianza consciente y pautas de amor, alineándolas con la visión del colegio para reducir la fricción convivencial y mejorar el respaldo al proceso educativo del niño de manera ética.",
        audience:
          "Padres de familia y cuidadores comprometidos con el desarrollo integral.",
        cost: "$500.000",
        capacityNote:
          "Sin límite de asistentes. Cumplimiento normativo con un enfoque humano.",
        scenarios:
          "Entregas de informes, asambleas de padres y compromisos pedagógicos.",
        b2b: "Un hogar en armonía se traduce en un estudiante motivado y una comunidad escolar sólida.",
      },
      {
        title: "Aprender Haciendo: Laboratorio de Vida",
        type: "Taller práctico",
        sector: "Institucional / Empresarial",
        duration: "4 horas",
        idealFor: "Comunidades y Equipos",
        benefit:
          "El aprendizaje que se siente en el cuerpo se queda grabado en el alma.",
        description:
          "Encuentro altamente didáctico y significativo donde la teoría se convierte en piel y experiencia. Utilizamos el juego y el reto grupal como herramientas de aprendizaje. Incluimos todos los materiales para que los participantes vivan dinámicas de Team Building, resolución de problemas y cooperación, asegurando que el conocimiento sea útil para la vida.",
        audience:
          "Estudiantes, colaboradores corporativos y áreas de bienestar.",
        cost: "$650.000",
        capacityNote:
          "A partir de 30 personas hay un adicional de $2.000 por persona. Incluye materiales.",
        scenarios:
          "Jornadas de integración corporativa, ferias institucionales y retiros de equipo.",
        b2b: "Invierta en experiencias donde el conocimiento no se olvida porque se vive intensamente.",
      },
    ],
  },
  {
    id: "dimension-2",
    displayTitle: "Caminos del Espíritu: Senda Interior",
    icon: <HeartHandshake className="w-8 h-8 text-emerald-500" />,
    description:
      "Experiencias de silencio, pausa y conexión profunda para redescubrir la luz interior que habita en cada ser.",
    services: [
      {
        title: "Retiros de Inmersión: Trascendencia del Ser",
        type: "Retiro Espiritual",
        sector: "Desarrollo del Ser",
        duration: "06 horas",
        idealFor: "Grupos en búsqueda de Sentido",
        benefit:
          "Un espacio sagrado para sanar el presente, agradecer y renovar la esperanza.",
        description:
          "Propiciamos senderos hacia el interior en un mundo saturado de ruido. Facilitamos procesos de autoaceptación y sanación espiritual bajo un marco de respeto absoluto. Diseñamos la jornada para que el espíritu regrese renovado a la labor cotidiana con un propósito claro, reconfortado y alineado con los valores institucionales.",
        audience:
          "Estudiantes de grados superiores, personal docente o colaboradores corporativos.",
        cost: "Desde $18.000 p/p",
        options: [
          {
            name: "Opción 1: Solo apoyo profesional",
            price: "$18.000 p/p",
            min: "Mínimo 30 personas",
          },
          {
            name: "Opción 2: Apoyo + Materiales",
            price: "$23.000 p/p",
            min: "Mínimo 30 personas",
          },
          {
            name: "Opción 3: Opción 2 + Refrigerio",
            price: "$30.000 p/p",
            min: "Mínimo 10 personas",
          },
          {
            name: "Opción 4: Opción 3 + Casa y Café",
            price: "$50.000 p/p",
            min: "Mínimo 10 personas",
          },
        ],
        capacityNote:
          "Acompañamiento previo y posterior para diagnosticar necesidades espirituales.",
        scenarios:
          "Retiros de grado, preparación para la vida y jornadas de reflexión docente.",
        b2b: "Nutrir la dimensión espiritual es asegurar una institución basada en la paz y la plenitud.",
      },
      {
        title: "Caminando en la Fe: Vivencia Sacramental",
        type: "Convivencia Catequética",
        sector: "Desarrollo del Ser",
        duration: "04-05 horas",
        idealFor: "Colegios Católicos y Parroquias",
        benefit:
          "Convierte la fe en una experiencia de alegría, comunidad y amor vivo.",
        description:
          "Redefinimos la preparación para los sacramentos en un camino de descubrimiento espiritual. Lejos de la rigidez, buscamos que los jóvenes sientan el abrazo de su comunidad. Involucramos a los padres para que el sacramento sea un hito de unión familiar, utilizando dinámicas lúdicas y reflexivas que tocan el corazón.",
        audience:
          "Niños y jóvenes que se preparan para celebrar su camino de iniciación cristiana.",
        cost: "Desde $17.000 p/p",
        options: [
          {
            name: "Opción 1: Apoyo profesional",
            price: "$17.000 p/p",
            min: "Mínimo 30 personas",
          },
          {
            name: "Opción 2: Apoyo + Materiales",
            price: "$22.000 p/p",
            min: "Mínimo 30 personas",
          },
          {
            name: "Opción 3: Opción 2 + Refrigerio",
            price: "$28.000 p/p",
            min: "Mínimo 10 personas",
          },
          {
            name: "Opción 4: Inmersión Completa",
            price: "$48.000 p/p",
            min: "Mínimo 10 personas",
          },
          {
            name: 'Texto del catequista eucaristía "Para quedarnos con Él"',
            price: "$33.000",
            min: "Por unidad",
          },
          {
            name: "Kit más carpeta de anexos para el niño",
            price: "$35.000",
            min: "Por unidad",
          },
          {
            name: 'Texto del catequista "Renovados en el Espíritu"',
            price: "$30.000",
            min: "Por unidad",
          },
        ],
        capacityNote:
          "Integra la mística con la alegría del encuentro comunitario y pedagógico.",
        scenarios: "Preparación para Primera Comunión y Confirmación.",
        b2b: "Aportamos valor pedagógico y místico a su proceso pastoral, facilitando la conexión familiar.",
      },
    ],
  },
  {
    id: "dimension-3",
    displayTitle: "El Arte de Coexistir: Tejido Humano",
    icon: <Users className="w-8 h-8 text-orange-500" />,
    description:
      "Metodologías para sanar los ambientes de convivencia desde el reconocimiento mutuo y el respeto grupal.",
    services: [
      {
        title: "Integración Total: Convivencia Educativa",
        type: "Convivencia Formativa",
        sector: "Institucional",
        duration: "04-06 horas",
        idealFor: "Comunidad Estudiantil",
        benefit:
          "Sana las relaciones grupales y reduce significativamente el acoso escolar.",
        description:
          "Abordamos las dinámicas invisibles de los grupos desde la ternura y la firmeza. A través de retos grupales, trabajamos la comunicación asertiva, el reconocimiento de la diversidad y el liderazgo positivo para que cada estudiante se sienta seguro y valorado en su entorno de aprendizaje. Es una herramienta preventiva de bullying.",
        audience: "Estudiantes de todos los niveles educativos.",
        cost: "Desde $16.000 p/p",
        options: [
          {
            name: "Opción 1: Apoyo profesional",
            price: "$16.000 p/p",
            min: "Mínimo 30 personas",
          },
          {
            name: "Opción 2: Apoyo + Materiales",
            price: "$22.000 p/p",
            min: "Mínimo 30 personas",
          },
          {
            name: "Opción 3: Opción 2 + Refrigerio",
            price: "$28.000 p/p",
            min: "Mínimo 10 personas",
          },
          {
            name: "Opción 4: Opción 3 + Casa y Café",
            price: "$48.000 p/p",
            min: "Mínimo 10 personas",
          },
        ],
        capacityNote:
          "Cuando el número supera los 60 asistentes se aplica un descuento institucional.",
        scenarios:
          "Intervenciones por bullying y jornadas de inicio de año escolar.",
        b2b: "Garantice un entorno de aprendizaje seguro donde el reconocimiento sea la norma de vida.",
      },
      {
        title: "Sinergia Grupal: El Alma del Equipo",
        type: "Convivencia Espiritual",
        sector: "Empresarial / Personal",
        duration: "06 horas",
        idealFor: "Equipos de Trabajo",
        benefit:
          "Transforma la competencia en cooperación y el estrés en propósito compartido.",
        description:
          "Jornada enfocada en el crecimiento como comunidad. Sanamos ambientes laborales a través de la comunicación asertiva y el reconocimiento del otro como un ser esencial. Es un bálsamo para equipos que buscan alto rendimiento sin perder su calidad humana, fortaleciendo el sentido de pertenencia.",
        audience: "Equipos corporativos, grupos parroquiales y docentes.",
        cost: "Desde $18.000 p/p",
        options: [
          {
            name: "Opción 1: Apoyo profesional",
            price: "$18.000 p/p",
            min: "Mínimo 30 personas",
          },
          {
            name: "Opción 2: Apoyo + Materiales",
            price: "$24.000 p/p",
            min: "Mínimo 30 personas",
          },
          {
            name: "Opción 3: Opción 2 + Refrigerio",
            price: "$30.000 p/p",
            min: "Mínimo 10 personas",
          },
        ],
        capacityNote:
          "Adaptabilidad total a su infraestructura o casas de convivencia aliadas.",
        scenarios:
          "Jornadas de bienestar corporativo y reflexión de equipos directivos.",
        b2b: "Un equipo humano sano es el motor más potente para la productividad institucional.",
      },
      {
        title: "Lazos de Comunidad: Encuentro Familiar",
        type: "Convivencia Familiar",
        sector: "Institucional",
        duration: "04-06 horas",
        idealFor: "Familias e Instituciones",
        benefit:
          "Fortalece el tejido social desde el núcleo fundamental: la familia.",
        description:
          "Espacio genuino donde los padres e hijos interactúan de forma creativa, fortaleciendo el sentido de pertenencia hacia la institución que les acoge. Esta jornada busca humanizar la relación entre el colegio y el hogar, sanando fracturas del tejido social mediante la gratitud y la alegría.",
        audience: "Grupos familiares completos de la comunidad educativa.",
        cost: "Se cotiza según el caso",
        capacityNote:
          "Se diseña a la medida del presupuesto y los requerimientos institucionales.",
        scenarios:
          "Día de la familia, clausuras institucionales y cierres de ciclo pedagógico.",
        b2b: "Sanar los vínculos familiares garantiza estudiantes más equilibrados y felices.",
      },
    ],
  },
  {
    id: "dimension-4",
    displayTitle: "Refugio del Alma: Salud y Cuidado",
    icon: <Sparkles className="w-8 h-8 text-purple-500" />,
    description:
      "Estrategias especializadas para el cuidado emocional profundo y la formación técnica en bienestar integral.",
    services: [
      {
        title: "Bienestar Institucional In Situ",
        type: "Día de atención psicológica",
        sector: "Empresarial / Institucional",
        duration: "8 horas",
        idealFor: "Organizaciones Conscientes",
        benefit:
          "Ofrece un refugio profesional de escucha activa dentro de su propia sede.",
        description:
          "Brindamos una jornada completa de orientación psicosocial dentro de sus instalaciones. No es atención clínica, sino un espacio de cuidado donde identificamos necesidades y remitimos éticamente a rutas externas. Ideal para departamentos de orientación o apoyo a áreas de bienestar corporativo.",
        audience:
          "Colaboradores o estudiantes que requieren apoyo emocional seguro.",
        cost: "$660.000",
        capacityNote:
          "Atención personalizada. Disponibilidad total del profesional durante la jornada.",
        scenarios:
          "Mes de la salud mental y apoyo temporal a orientación escolar.",
        b2b: "Demuestre un compromiso real con la salud mental de quienes forman su organización.",
      },
      {
        title: "Espacios de Sensibilización Consciente",
        type: "Charla Magistral",
        sector: "Empresarial / Institucional",
        duration: "2 horas",
        idealFor: "Grandes Grupos",
        benefit:
          "Moviliza la conciencia colectiva sobre temas críticos de impacto humano.",
        description:
          "Encuentros poderosos diseñados para sensibilizar sobre temáticas específicas como inclusión, ética y prevención de riesgos. Es una aproximación directa y concisa que busca generar empatía y alineación con los valores corporativos en grupos masivos en poco tiempo.",
        audience: "Estudiantes, padres de familia o personal administrativo.",
        cost: "$370.000",
        capacityNote:
          "Sin límite de personas. Excelente relación impacto-inversión para auditorios.",
        scenarios:
          "Asambleas generales, lanzamientos de campañas y conmemoraciones.",
        b2b: "La forma más efectiva de alinear conceptualmente a su comunidad educativa.",
      },
      {
        title: "Salud Mental y Gestión Emocional",
        type: "Taller Certificable",
        sector: "Desarrollo del Ser",
        duration: "2 a 3 horas",
        idealFor: "Líderes y Educadores",
        benefit:
          "Capacita a su equipo para ser un faro de calma ante situaciones de crisis.",
        description:
          "Entrenamiento técnico y humano en Primeros Auxilios Psicológicos (PAP), resolución de conflictos y Comunicación No Violenta. Formamos personas capaces de sostener a otros con sabiduría y serenidad. Es un taller intensivo que otorga herramientas vitales de protección emocional. Certificable.",
        audience:
          "Máximo 30 personas por grupo para garantizar profundidad técnica.",
        cost: "$300.000",
        capacityNote:
          "Costo por taller por grupo. Incluye certificado de capacitación.",
        scenarios: "Seguridad y salud en el trabajo con un enfoque humano.",
        b2b: "Construya una cultura de cuidado inquebrantable que genere seguridad y lealtad.",
      },
      {
        title: "Innovación Educativa en Salud Mental",
        type: "Seminario Especializado",
        sector: "Institucional",
        duration: "3 horas",
        idealFor: "Directivos y Psicólogos",
        benefit:
          "Posiciona a su institución en la vanguardia del pensamiento crítico y el bienestar.",
        description:
          "Seminarios de alto nivel enfocados en metodologías como Filosofía para Niños o Innovación Pedagógica. Proporcionamos estrategias para integrar el bienestar emocional en el currículo académico, formando mentes brillantes que sepan pensar de manera autónoma y ética.",
        audience:
          "Docentes y directivos interesados en la excelencia psicológica.",
        cost: "Desde $500.000",
        capacityNote:
          "El valor se ajusta según el seminario específico seleccionado.",
        scenarios:
          "Capacitación especializada para equipos de gestión académica.",
        b2b: "Diferencie su oferta educativa con metodologías que preparan para el mundo real.",
      },
      {
        title: "Reflexología Holística: El Cuerpo como Espejo",
        type: "Formación en Bienestar",
        sector: "Desarrollo del Ser",
        duration: "40 horas",
        idealFor: "Comunidad en General",
        benefit:
          "Certificación internacional en una técnica que restaura la armonía desde la raíz física.",
        description:
          "Programa profundo avalado internacionalmente que enseña la estimulación de puntos reflejos para activar la sanación natural y reducir el estrés crónico. Ideal para programas de extensión académica o bienestar laboral. Una técnica segura, efectiva y con reconocimiento global (Aval UNESCO).",
        audience: "Personas interesadas en salud natural y bienestar integral.",
        cost: "Se cotiza según sea el caso",
        capacityNote:
          "Certificación de prestigio global. Sujeto a número de participantes.",
        scenarios: "Cursos de extensión y programas de autocuidado personal.",
        b2b: "Ofrezca a su comunidad un valor diferencial que honra la salud desde la esencia.",
      },
    ],
  },
];

export const teamData = [
  {
    name: "César Hincapie",
    role: "Administrador",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
  },
  {
    name: "Marlon M. García",
    role: "Director",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    name: "Valeria Bustamante",
    role: "Administrativa",
    bg: "bg-pink-50",
    text: "text-pink-600",
  },
  {
    name: "Diana Restrepo",
    role: "Psicóloga",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    name: "Mónica Quiceno",
    role: "Asesora Jurídica y Guía Yoga",
    bg: "bg-teal-50",
    text: "text-teal-600",
  },
];

export const whyUsSocialData = [
  {
    id: "01",
    icon: <Heart className="w-10 h-10 text-white" strokeWidth={1.5} />,
    title: "Cuidado de su Propósito",
    description:
      "Nuestra naturaleza como ESAL garantiza que nuestro único objetivo es el desarrollo humano. Nos aliamos con su institución bajo estrictos principios de honestidad y vocación de servicio.",
    highlight: "Sinergia Ética",
  },
  {
    id: "02",
    icon: <Flower2 className="w-10 h-10 text-white" strokeWidth={1.5} />,
    title: "Inversión con Sentido",
    description:
      "Toda inversión retorna a la sociedad. Como Entidad Sin Ánimo de Lucro, reinvertimos los recursos para sostener obras de impacto real, optimizando su presupuesto educativo.",
    highlight: "Sostenibilidad",
  },
  {
    id: "03",
    icon: <Sun className="w-10 h-10 text-white" strokeWidth={1.5} />,
    title: "Legado Educativo",
    description:
      "Al elegirnos, su institución protege directamente a nuestra fundación Pequeños de San José, apoyando la educación y nutrición de la primera infancia vulnerable.",
    highlight: "Impacto Social",
  },
  {
    id: "04",
    icon: <Leaf className="w-10 h-10 text-white" strokeWidth={1.5} />,
    title: "Acompañar desde el Ser",
    description:
      "Nuestra metodología respeta su ecosistema escolar. Acompañamos a directivos, docentes y familias desde un enfoque profundamente humano y pedagógico.",
    highlight: "Esencia",
  },
];
