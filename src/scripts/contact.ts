import { onPage } from './lifecycle';

onPage((signal) => {
    const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
    if (!form) return;

    const success = document.querySelector<HTMLElement>('[data-form-success]');
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
    const fields = [...form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[required]')];

    // Preselect the service from ?servicio=…
    const param = new URLSearchParams(location.search).get('servicio');
    const select = form.querySelector<HTMLSelectElement>('#service');
    if (param && select?.querySelector(`option[value="${CSS.escape(param)}"]`)) select.value = param;

    const validate = (field: (typeof fields)[number]) => {
        const valid = field.checkValidity();
        field.setAttribute('aria-invalid', String(!valid));
        const error = document.getElementById(`${field.id}-error`);
        if (error) error.hidden = valid;
        return valid;
    };

    fields.forEach((field) => {
        field.addEventListener('blur', () => field.value && validate(field), { signal });
        field.addEventListener(
            'input',
            () => field.getAttribute('aria-invalid') === 'true' && validate(field),
            { signal },
        );
    });

    form.addEventListener(
        'submit',
        async (event) => {
            event.preventDefault();
            const invalid = fields.filter((field) => !validate(field));
            if (invalid.length) {
                invalid[0].focus();
                if (status) status.textContent = `Revisa ${invalid.length === 1 ? 'el campo marcado' : `los ${invalid.length} campos marcados`}.`;
                return;
            }

            const data = new FormData(form);
            if (data.get('company')) return; // honeypot

            submit?.setAttribute('aria-disabled', 'true');
            if (submit) submit.disabled = true;
            if (status) status.textContent = 'Enviando…';

            try {
                const endpoint = form.dataset.endpoint;
                if (endpoint) {
                    const response = await fetch(endpoint, {
                        method: 'POST',
                        body: data,
                        headers: { Accept: 'application/json' },
                    });
                    if (!response.ok) throw new Error(String(response.status));
                } else {
                    await new Promise((resolve) => setTimeout(resolve, 900));
                }
                form.hidden = true;
                if (success) {
                    success.hidden = false;
                    success.focus();
                }
            } catch {
                if (status) {
                    status.textContent = 'No hemos podido enviar el mensaje. Inténtalo de nuevo o escríbenos a hola@raizestudio.es.';
                }
                if (submit) submit.disabled = false;
                submit?.removeAttribute('aria-disabled');
            }
        },
        { signal },
    );
});

// Leaflet is only downloaded when the map scrolls into view
onPage(() => {
    const container = document.querySelector<HTMLElement>('[data-map]');
    if (!container) return;
    let map: { remove: () => void } | undefined;

    const observer = new IntersectionObserver(
        async ([entry]) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            const { default: L } = await import('leaflet');
            if (!container.isConnected) return;
            const position: [number, number] = [Number(container.dataset.lat), Number(container.dataset.lng)];
            const leaflet = L.map(container, { scrollWheelZoom: false, attributionControl: true }).setView(position, 15);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                maxZoom: 19,
            }).addTo(leaflet);
            L.marker(position, {
                icon: L.divIcon({ className: 'map__marker', iconSize: [18, 18], iconAnchor: [9, 9] }),
                title: 'Raíz Estudio',
                alt: 'Raíz Estudio',
            }).addTo(leaflet);
            container.classList.add('is-ready');
            map = leaflet;
        },
        { rootMargin: '200px' },
    );
    observer.observe(container);

    return () => {
        observer.disconnect();
        map?.remove();
    };
});
