export interface Project {
    slug: string;
    name: string;
    location: string;
    year: number;
    sqm: number;
    style: string;
    summary: string;
    description: string[];
    materials: { name: string; colorHex: string }[];
    /** First image is the hero. Local paths live in src/assets/images. */
    images: string[];
    featured?: boolean;
}

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=2400&q=85&fit=crop&fm=jpg`;

export const projects: Project[] = [
    {
        slug: 'casa-en-el-pinar',
        name: 'Casa en el Pinar',
        location: 'Pozuelo, Madrid',
        year: 2023,
        sqm: 180,
        style: 'Rústico moderno',
        summary: 'Un refugio familiar donde la luz y el pinar entran hasta el salón.',
        description: [
            'Cuando conocimos a Laura y Carlos, nos hablaron de una casa con unas proporciones preciosas pero que sentían fría, carente de personalidad. Buscaban un refugio en el que la luz y la naturaleza exterior se conectasen con el interior.',
            'Trabajamos en potenciar esa conexión abriendo ventanales y utilizando una paleta de materiales que responde al entorno del pinar: maderas ricas, linos crudos y toques de piedra natural que anclan el espacio a la tierra.',
            'El resultado es un hogar que respira calma, un lugar donde el tiempo parece detenerse y cada detalle está pensado para el confort diario de la familia.',
        ],
        materials: [
            { name: 'Roble natural', colorHex: '#A68A61' },
            { name: 'Lino crudo', colorHex: '#E5DFD4' },
            { name: 'Piedra caliza', colorHex: '#D1C8BA' },
        ],
        images: [
            unsplash('1600210492486-724fe5c67fb0'),
            unsplash('1600210491892-03d54c0aaf87'),
            unsplash('1600585154340-be6161a56a0c'),
            unsplash('1600607687939-ce8a6c25118c'),
            unsplash('1600566753190-17f0baa2a6c3'),
            unsplash('1600573472591-ee6b68d14c68'),
            '/projects/project_1/project1_1.webp',
            unsplash('1600607687644-c7171b42498f'),
        ],
        featured: true,
    },
    {
        slug: 'apartamento-luz-mediterranea',
        name: 'Apartamento Luz Mediterránea',
        location: 'Valencia',
        year: 2022,
        sqm: 110,
        style: 'Mediterráneo',
        summary: 'Cal, cerámica artesanal y brisa: una zona de día abierta al balcón.',
        description: [
            'Este apartamento en Valencia gozaba de un balcón envidiable y muchísima luz, pero la distribución fragmentada impedía disfrutarlo al máximo.',
            'Nuestra intervención se centró en derribar tabiques innecesarios, creando una zona de día abierta y conectada al exterior. Empleamos mortero a la cal, cerámica artesanal y madera lavada para evocar la esencia del Mediterráneo.',
            'Ahora, la brisa y la luz inundan cada rincón, creando un ambiente fresco, sereno y lleno de vitalidad.',
        ],
        materials: [
            { name: 'Mortero pulido', colorHex: '#DCD5C6' },
            { name: 'Cerámica terracota', colorHex: '#B86F52' },
            { name: 'Madera lavada', colorHex: '#CDBCA1' },
        ],
        images: [
            '/projects/project_2/project2_1.webp',
            '/projects/project_2/project2_2.webp',
            unsplash('1593696140826-c58b021acf8b'),
            '/projects/project_2/project2_3.webp',
            '/projects/project_2/project2_4.webp',
            '/projects/project_2/project2_5.webp',
            '/projects/project_2/project2_6.webp',
            unsplash('1595526114035-0d45ed16cfbf'),
        ],
        featured: true,
    },
    {
        slug: 'masia-restaurada',
        name: 'Masía Restaurada',
        location: 'Girona',
        year: 2024,
        sqm: 320,
        style: 'Rústico',
        summary: 'Piedra, vigas y bóveda catalana del siglo XIX para una familia joven.',
        description: [
            'Restaurar esta masía del siglo XIX fue un viaje apasionante. Respetar la historia del lugar y, a la vez, adaptarlo a una familia joven fue nuestro principal objetivo.',
            'Recuperamos la piedra original, las vigas de madera torcida y las bóvedas catalanas. Incorporamos cocinas y baños de líneas puras que contrastan y elevan la arquitectura tradicional.',
            'El resultado es un hogar donde el pasado y el presente conviven en perfecta armonía.',
        ],
        materials: [
            { name: 'Piedra original', colorHex: '#9F9589' },
            { name: 'Madera envejecida', colorHex: '#524335' },
            { name: 'Microcemento crudo', colorHex: '#D3CECB' },
        ],
        images: [
            unsplash('1618219908412-a29a1bb7b86e'),
            unsplash('1618219740975-d40978bb7378'),
            unsplash('1618220048045-10a6dbdf83e0'),
            '/projects/project_3/project3_1.webp',
            unsplash('1616486029423-aaa4789e8c9a'),
            unsplash('1616486338812-3dadae4b4ace'),
            unsplash('1616137466211-f939a420be84'),
            unsplash('1616137422495-1e9e46e2aa77'),
        ],
        featured: true,
    },
    {
        slug: 'piso-en-el-ensanche',
        name: 'Piso en el Ensanche',
        location: 'Barcelona',
        year: 2023,
        sqm: 145,
        style: 'Moderno',
        summary: 'Suelos hidráulicos y molduras originales con carpintería de roble a medida.',
        description: [
            'Tuvimos la suerte de encontrarnos con unos suelos hidráulicos espectaculares y unos techos altísimos con molduras originales. El reto era equilibrar este peso decorativo con un estilo moderno y atemporal.',
            'Diseñamos carpinterías de roble oscuro a medida, usamos el color suave de las paredes para resaltar los elementos históricos y escogimos mobiliario de líneas limpias para no recargar el espacio.',
            'Se ha convertido en un refugio urbano sofisticado y muy acogedor.',
        ],
        materials: [
            { name: 'Roble oscuro', colorHex: '#42332B' },
            { name: 'Mármol blanco', colorHex: '#F0EFEA' },
            { name: 'Pintura arcilla', colorHex: '#E2D5CA' },
        ],
        images: [
            '/projects/project_4/project4_5.webp',
            '/projects/project_4/project4_2.webp',
            unsplash('1582268611958-ebfd161ef9cf'),
            unsplash('1560448204-e02f11c3d0e2'),
            '/projects/project_4/project4_3.webp',
            '/projects/project_4/project4_4.webp',
            '/projects/project_4/project4_1.webp',
            unsplash('1582582494705-f8ce0b0c24f0'),
        ],
        featured: true,
    },
    {
        slug: 'cabana-en-el-bosque',
        name: 'Cabaña en el Bosque',
        location: 'Navarra',
        year: 2021,
        sqm: 85,
        style: 'Nórdico',
        summary: 'Una caja de madera para desconectar de la ciudad y escuchar el bosque.',
        description: [
            'Un pequeño refugio de fin de semana en pleno bosque. El objetivo era crear un interior que abrazara el paisaje exterior, utilizando la madera de pino de manera casi escultórica.',
            'Diseñamos un interior tipo loft para aprovechar al máximo los escasos metros cuadrados, con una chimenea central como eje del espacio y mobiliario integrado.',
            'Una auténtica caja de madera diseñada para desconectar de la ciudad y conectar con la quietud.',
        ],
        materials: [
            { name: 'Pino natural', colorHex: '#D4C3A3' },
            { name: 'Acero ennegrecido', colorHex: '#252627' },
            { name: 'Lana natural', colorHex: '#ECE7DD' },
        ],
        images: [
            unsplash('1510798831971-661eb04b3739'),
            unsplash('1513694203232-719a280e022f'),
            unsplash('1533090161767-e6ffed986c88'),
            unsplash('1493809842364-78817add7ffb'),
            unsplash('1449844908441-8829872d2607'),
            unsplash('1502005229762-cf1b2da7c5d6'),
        ],
    },
    {
        slug: 'atico-con-terraza',
        name: 'Ático con Terraza',
        location: 'Sevilla',
        year: 2024,
        sqm: 90,
        style: 'Mediterráneo',
        summary: 'Interior y terraza de 40 m² fundidos en un solo paisaje de tonos arena.',
        description: [
            'El reto de este ático fue extender visualmente el interior hacia la terraza de 40 m², diluyendo la frontera entre dentro y fuera. Creamos una continuidad en los pavimentos y en la paleta de color.',
            'Optamos por tonos arena, terracotas y un verde oliva empolvado para aportar la frescura necesaria en los veranos sevillanos. Diseñamos también una celosía a medida para proteger del sol.',
            'Ahora es un oasis en las alturas desde donde contemplar los atardeceres de la ciudad.',
        ],
        materials: [
            { name: 'Barro cocido', colorHex: '#9E5B40' },
            { name: 'Verde empolvado', colorHex: '#8C9A86' },
            { name: 'Madera de castaño', colorHex: '#8B6547' },
        ],
        images: [
            unsplash('1628744876497-eb30460be9f6'),
            '/projects/project_6/project6_1.webp',
            '/projects/project_6/project6_2.webp',
            unsplash('1583847268964-b28dc8f51f92'),
            unsplash('1600566753086-00f18fb6b3ea'),
            '/projects/project_6/project6_5.webp',
            '/projects/project_6/project6_3.webp',
            '/projects/project_6/project6_4.webp',
        ],
    },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getAdjacentProject(slug: string) {
    const index = projects.findIndex((p) => p.slug === slug);
    return projects[(index + 1) % projects.length];
}
