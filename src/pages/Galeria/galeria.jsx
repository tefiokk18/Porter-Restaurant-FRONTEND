import React from 'react';
import './galeria.css';

const Galeria = () => {
    const imagenes = [
        { id: 1, src: '/public/imagenes/comida1.avif', alt: 'Plato Principal' },
        { id: 2, src: '/public/imagenes/comida2.jpg', alt: 'Especialidad' },
        { id: 3, src: '/public/imagenes/comida3.jpg', alt: 'Postre' },
        { id: 4, src: '/public/imagenes/bebida1.jpg', alt: 'Coctelería' },
        { id: 5, src: '/public/imagenes/restaurante1.jpg', alt: 'Nuestro Salón' },
    ];

    return (
        <section className="container py-5">
            <h2 className="text-center mb-5 display-6 fw-bold text-uppercase">Nuestra Propuesta</h2>
            <div className="row g-4">
                {imagenes.map((img) => (
                    <div key={img.id} className="col-12 col-sm-6 col-md-4">
                        <div className="gallery-item shadow-sm">
                            <img src={img.src} alt={img.alt} className="img-fluid rounded" />
                            <div className="gallery-overlay">
                                <span>{img.alt}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Galeria;