const unsplash = (id: string, w = 2400) => `https://images.unsplash.com/photo-${id}?w=${w}&q=85&fit=crop&fm=jpg`;

export const images = {
    homeHero: '/projects/project_2/project2_6.webp',
    homeIntroA: '/projects/project_4/project4_3.webp',
    homeIntroB: unsplash('1618219908412-a29a1bb7b86e'),
    manifesto: '/projects/project_4/project4_2.webp',
    servicesResidential: unsplash('1600585154340-be6161a56a0c'),
    servicesOnline: '/projects/project_4/project4_4.webp',
    studioHero: '/projects/project_6/project6_5.webp',
    studioSpace: unsplash('1618219740975-d40978bb7378'),
    processHero: '/projects/project_6/project6_2.webp',
    consultingHero: '/projects/project_4/project4_4.webp',
    contact: unsplash('1600210492486-724fe5c67fb0'),
    elena: unsplash('1544005313-94ddf0286df2', 1400),
    ana: unsplash('1580489944761-15a19d654956', 1400),
};

export const stats = [
    { value: '10+', label: 'Años diseñando hogares' },
    { value: '120+', label: 'Viviendas transformadas' },
    { value: '100%', label: 'Proyectos a medida' },
];

export const services = [
    {
        slug: 'interiorismo-residencial',
        title: 'Interiorismo residencial',
        kicker: 'Presencial · Madrid y alrededores',
        summary:
            'Transformamos tu vivienda de principio a fin: distribución, mobiliario a medida, materiales, iluminación y estilismo final. Nos ocupamos de todo para que tú solo disfrutes.',
        includes: [
            'Reunión inicial y análisis del espacio',
            'Nueva distribución y planos',
            'Mobiliario a medida, cocinas y baños',
            'Materiales, iluminación y textiles',
            'Coordinación de gremios y seguimiento de obra',
        ],
        href: '/servicios#interiorismo-residencial',
        image: images.servicesResidential,
    },
    {
        slug: 'consultoria-online',
        title: 'Consultoría online',
        kicker: 'A distancia · Toda España',
        summary:
            'Orientación profesional estés donde estés. Resolvemos dudas de distribución, color o compras por videollamada y te entregamos una hoja de ruta clara para ejecutar a tu ritmo.',
        includes: [
            'Sesiones por videollamada',
            'Moodboard y paleta de materiales',
            'Listado de compras con enlaces',
            'Proyecto completo a distancia',
        ],
        href: '/consultoria-online',
        image: images.servicesOnline,
    },
];

export const processSteps = [
    {
        num: '01',
        title: 'Primera llamada',
        short: 'Una conversación sin compromiso para entender qué buscas y cómo vives.',
        description:
            'Nos conocemos. Te escuchamos, entendemos tus necesidades y vemos si encajamos. Una charla sin compromiso para empezar a dar forma a tu idea.',
        image: unsplash('1616486029423-aaa4789e8c9a', 1600),
    },
    {
        num: '02',
        title: 'Visita y análisis',
        short: 'Medimos, fotografiamos y estudiamos la luz y las posibilidades del lugar.',
        description:
            'Si avanzamos, visitamos el espacio (o nos reunimos online si es consultoría). Tomamos medidas, hacemos fotos y nos empapamos de la luz y las posibilidades del lugar.',
        image: unsplash('1542889601-399c4f3a8402', 1600),
    },
    {
        num: '03',
        title: 'Propuesta de diseño',
        short: 'Moodboard, planos y materiales, ajustados hasta que la sientas tuya.',
        description:
            'Elaboramos moodboards, planos de distribución y selección de materiales. Te presentamos nuestra visión para tu hogar y la ajustamos hasta que la sientas completamente tuya.',
        image: '/process/process_1.webp',
    },
    {
        num: '04',
        title: 'Ejecución y compras',
        short: 'Coordinamos gremios, presupuesto y pedidos para evitarte preocupaciones.',
        description:
            'Coordinamos a los industriales, hacemos el seguimiento presupuestario y gestionamos los pedidos de mobiliario y decoración para evitarte dolores de cabeza.',
        image: '/process/process_2.webp',
    },
    {
        num: '05',
        title: 'Entrega y estilismo',
        short: 'Todo montado y decorado hasta el último cojín. Tu casa, lista para vivirla.',
        description:
            'El día más emocionante. Dejamos todo montado, limpio y decorado hasta el último cojín. Tu casa, lista para empezar a vivirla.',
        image: unsplash('1600210492486-724fe5c67fb0', 1600),
    },
];

export const testimonials = [
    {
        quote: 'Entendieron perfectamente lo que necesitábamos. Más que decorar nuestra casa, le dieron alma. Cada vez que entramos por la puerta, sentimos paz.',
        name: 'Marta y Javier',
        info: 'Madrid · Interiorismo completo',
    },
    {
        quote: 'La consultoría online fue un antes y un después. Estábamos atascados con el salón y en una sola sesión nos dieron la claridad y la visión que nos faltaba.',
        name: 'Lucía P.',
        info: 'Barcelona · Consultoría online',
    },
    {
        quote: 'Una sensibilidad exquisita para los materiales y la luz. Trabajar con el estudio fue fácil, transparente, y el resultado superó nuestras expectativas.',
        name: 'Familia Gómez',
        info: 'Valencia · Proyecto residencial',
    },
];

export const team = [
    {
        name: 'Elena Vidal',
        role: 'Fundadora y directora de diseño',
        quote: 'Para mí, el lujo verdadero es entrar en casa y sentir que respiras más despacio.',
        image: images.elena,
    },
    {
        name: 'Ana Ruiz',
        role: 'Arquitecta de interiores',
        quote: 'Busco la proporción perfecta entre la luz natural, el vacío y los materiales honestos.',
        image: images.ana,
    },
];

export const values = [
    {
        title: 'Escucha activa',
        text: 'Ningún proyecto empieza sin una conversación sincera. Tu visión es nuestro único punto de partida.',
    },
    {
        title: 'Materiales honestos',
        text: 'Seleccionamos cada elemento por su calidad y su capacidad para envejecer con dignidad y belleza.',
    },
    {
        title: 'Diseño funcional',
        text: 'Un espacio hermoso debe ser, ante todo, vivible. Diseñamos para tu día a día, sin renunciar a la estética.',
    },
    {
        title: 'Proceso transparente',
        text: 'Te acompañamos en cada paso con claridad, cumpliendo plazos y respetando el presupuesto acordado.',
    },
];

export const brands = ['Mutina', 'Flos', 'Kvadrat', 'B&B Italia', 'Santa & Cole', 'Carl Hansen & Søn'];
