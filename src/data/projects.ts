export interface Project {
    slug: string;
    name: string;
    location: string;
    year: number;
    sqm: number;
    style: string;
    description: string[];
    materials: { name: string; colorHex: string }[];
    images: string[];
    videoSnippet: string;
}

export const projects: Project[] = [
    {
        slug: 'casa-en-el-pinar',
        name: 'Casa en el Pinar',
        location: 'Pozuelo, Madrid',
        year: 2023,
        sqm: 180,
        style: 'Rústico moderno',
        description: [
            "Cuando conocimos a Laura y Carlos, nos hablaron de una casa que tenía unas proporciones preciosas pero que sentían fría, carente de personalidad. Buscaban un refugio en el que la luz y la naturaleza exterior se conectasen con el interior.",
            "Trabajamos en potenciar esa conexión abriendo ventanales y utilizando una paleta de materiales que responde al entorno del pinar: maderas ricas, linos crudos y toques de piedra natural que anclan el espacio a la tierra.",
            "El resultado es un hogar que respira calma, un lugar donde el tiempo parece detenerse y cada detalle está pensado para el confort diario de la familia."
        ],
        materials: [
            { name: 'Roble Natural', colorHex: '#A68A61' },
            { name: 'Lino Crudo', colorHex: '#E5DFD4' },
            { name: 'Piedra Caliza', colorHex: '#D1C8BA' }
        ],
        images: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=90&fit=crop', // Hero
            'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1800&q=90&fit=crop',
            '/images_projects/project_1/project1_1.webp',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1800&q=90&fit=crop'
        ],
        videoSnippet: 'https://vimeo.com/284160472'
    },
    {
        slug: 'apartamento-luz-mediterranea',
        name: 'Apartamento Luz Mediterránea',
        location: 'Valencia',
        year: 2022,
        sqm: 110,
        style: 'Mediterráneo',
        description: [
            "Este apartamento en Valencia gozaba de un balcón envidiable y muchísima luz, pero la distribución fragmentada impedía disfrutarlo al máximo.",
            "Nuestra intervención se centró en derribar tabiques innecesarios, creando una zona de día abierta y conectada al exterior. Empleamos mortero a la cal, cerámica artesanal y madera lavada para evocar la esencia del Mediterráneo.",
            "Ahora, la brisa y la luz inundan cada rincón, creando un ambiente fresco, sereno y lleno de vitalidad."
        ],
        materials: [
            { name: 'Mortero Pulido', colorHex: '#DCD5C6' },
            { name: 'Cerámica Terracota', colorHex: '#B86F52' },
            { name: 'Madera Lavada', colorHex: '#CDBCA1' }
        ],
        images: [
            '/images_projects/project_2/project2_1.webp', // Hero
            '/images_projects/project_2/project2_2.webp',
            'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=1800&q=90&fit=crop',
            '/images_projects/project_2/project2_3.webp',
            '/images_projects/project_2/project2_4.webp',
            '/images_projects/project_2/project2_5.webp',
            '/images_projects/project_2/project2_6.webp',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1800&q=90&fit=crop'
        ],
        videoSnippet: 'https://vimeo.com/284160472'
    },
    {
        slug: 'masia-restaurada',
        name: 'Masía Restaurada',
        location: 'Girona',
        year: 2024,
        sqm: 320,
        style: 'Rústico',
        description: [
            "Restaurar esta masía del siglo XIX fue un viaje apasionante. Respetar la historia del lugar y, a la vez, adaptarlo a una familia joven fue nuestro principal objetivo.",
            "Recuperamos la piedra original, las vigas de madera torcida y las bóvedas catalanas. Incorporamos cocinas y baños de líneas puras que contrastan y elevan la arquitectura tradicional.",
            "El resultado es un hogar donde el pasado y el presente conviven en perfecta armonía."
        ],
        materials: [
            { name: 'Piedra Original', colorHex: '#9F9589' },
            { name: 'Madera Envejecida', colorHex: '#524335' },
            { name: 'Microcemento Crudo', colorHex: '#D3CECB' }
        ],
        images: [
            'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1800&q=90&fit=crop', // Hero
            'https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=1800&q=90&fit=crop',
            '/images_projects/project_3/project3_1.webp',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=1800&q=90&fit=crop'
        ],
        videoSnippet: 'https://vimeo.com/284160472'
    },
    {
        slug: 'piso-en-el-ensanche',
        name: 'Piso en el Ensanche',
        location: 'Barcelona',
        year: 2023,
        sqm: 145,
        style: 'Moderno',
        description: [
            "Tuvimos la suerte de encontrarnos con unos suelos hidráulicos espectaculares y unos techos altísimos con molduras originales. El reto era equilibrar este peso decorativo con un estilo moderno y atemporal.",
            "Diseñamos carpinterías de roble oscuro a medida, usamos el color suave de las paredes para resaltar los elementos históricos y escogimos mobiliario de líneas limpias para no recargar el espacio.",
            "Se ha convertido en un refugio urbano sofisticado y muy acogedor."
        ],
        materials: [
            { name: 'Roble Oscuro', colorHex: '#42332B' },
            { name: 'Mármol Blanco', colorHex: '#F0EFEA' },
            { name: 'Pintura Arcilla', colorHex: '#E2D5CA' }
        ],
        images: [
            '/images_projects/project_4/project4_5.webp', // Hero
            '/images_projects/project_4/project4_2.webp',
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1800&q=90&fit=crop',
            '/images_projects/project_4/project4_3.webp',
            '/images_projects/project_4/project4_4.webp',
            '/images_projects/project_4/project4_1.webp',
            'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?w=1800&q=90&fit=crop'
        ],
        videoSnippet: 'https://vimeo.com/284160472'
    },
    {
        slug: 'cabana-en-el-bosque',
        name: 'Cabaña en el Bosque',
        location: 'Navarra',
        year: 2021,
        sqm: 85,
        style: 'Nórdico',
        description: [
            "Un pequeño refugio de fin de semana en pleno bosque. El objetivo era crear un interior que abrazara el paisaje exterior, utilizando la madera de pino de manera casi escultórica.",
            "Diseñamos un interior tipo loft para aprovechar al máximo los escasos metros cuadrados. Una chimenea central como eje del espacio y mobiliario integrado.",
            "Una auténtica caja de madera diseñada para desconectar de la ciudad y conectar con la quietud."
        ],
        materials: [
            { name: 'Pino Natural', colorHex: '#D4C3A3' },
            { name: 'Acero Ennegrecido', colorHex: '#252627' },
            { name: 'Lana Natural', colorHex: '#ECE7DD' }
        ],
        images: [
            'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1800&q=90&fit=crop', // Hero
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=90&fit=crop'
        ],
        videoSnippet: 'https://vimeo.com/284160472'
    },
    {
        slug: 'atico-con-terraza',
        name: 'Ático con Terraza',
        location: 'Sevilla',
        year: 2024,
        sqm: 90,
        style: 'Mediterráneo',
        description: [
            "El reto de este ático fue extender visualmente e interior haciola terraza de 40m2, diluyendo la frontera in&out. Creamos una continuidad en los pavimentos y en la paleta de color.",
            "Optamos por tonos arena, terracotas y un verde olivo empolvado para aportar la frescura necesaria en los veranos sevillanos. Se diseñó también una celosía a medida para proteger del sol.",
            "Ahora es un oasis en las alturas desde donde contemplar los atardeceres de la ciudad."
        ],
        materials: [
            { name: 'Barro Cocido', colorHex: '#9E5B40' },
            { name: 'Verde Empolvado', colorHex: '#8C9A86' },
            { name: 'Madera de Castaño', colorHex: '#8B6547' }
        ],
        images: [
            'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1800&q=90&fit=crop', // Hero
            '/images_projects/project_6/project6_1.webp',
            '/images_projects/project_6/project6_2.webp',
            'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1800&q=90&fit=crop',
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1800&q=90&fit=crop',
            '/images_projects/project_6/project6_3.webp',
            '/images_projects/project_6/project6_4.webp'
        ],
        videoSnippet: 'https://vimeo.com/284160472'
    }
];
