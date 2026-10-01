export const site = {
    name: 'Raíz Estudio',
    url: 'https://raizestudiodesign.es',
    description:
        'Raíz Estudio — interiorismo residencial y consultoría de diseño online en España. Hogares atemporales con materiales honestos, luz natural y calidez orgánica.',
    email: 'hola@raizestudio.es',
    phone: '+34 600 000 000',
    phoneHref: 'tel:+34600000000',
    hours: 'Lunes a viernes, 9:00 – 18:00 h',
    address: {
        street: 'Calle de la Madera, 15',
        postalCode: '28004',
        city: 'Madrid',
        country: 'España',
    },
    coords: [40.42245, -3.70409] as [number, number],
    social: [
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Pinterest', href: 'https://pinterest.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
    ],
};

export interface NavLink {
    label: string;
    href: string;
}

export const nav: NavLink[] = [
    { label: 'Estudio', href: '/estudio' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Consultoría online', href: '/consultoria-online' },
    { label: 'Proceso', href: '/proceso' },
    { label: 'Contacto', href: '/contacto' },
];
