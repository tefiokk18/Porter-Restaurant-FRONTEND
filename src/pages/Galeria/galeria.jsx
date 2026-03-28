import React, { useState } from 'react';
import './Galeria.css';

const Galeria = () => {
    const [filtro, setFiltro] = useState('Todas');

    const datosGaleria = {
        'Chefs': [
            { id: 1, src: '/imagenes/chef1.avif', alt: 'Chef Martín Rodríguez' },
            { id: 2, src: '/imagenes/chef2.avif', alt: 'Sommelier Ana Laura García' },
            { id: 3, src: '/imagenes/chef3.avif', alt: 'Chef Pastelero Carlos Fernández' },
        ],
        'Comida': [
            { id: 4, src: '/imagenes/comida8.jpg', alt: 'Plato Principal' },
            { id: 5, src: '/imagenes/comida5.jpg', alt: 'Entrada Especial' },
            { id: 6, src: '/imagenes/comida6.jpg', alt: 'Postre de la Casa' },
        ],
        'Lugar': [
            { id: 7, src: '/imagenes/home.png', alt: 'Nuestro Salón Principal' },
            { id: 8, src: '/imagenes/lugar.jpg', alt: 'La Barra' },
            { id: 9, src: '/imagenes/terraza.jpg', alt: 'Terraza' }, 
        ],
        'Bebidas': [
            { id: 10, src: '/imagenes/tragos.jpg', alt: 'Cóctel de Autor' },
            { id: 11, src: '/imagenes/cerveza.jpg', alt: 'Selección de Vinos' }, 
            { id: 12, src: '/imagenes/tragos2.jpg', alt: 'Cerveza Tirada' }, 
        ],
    };

    const categorias = filtro === 'Todas' ? Object.keys(datosGaleria) : [filtro];

    return (
        <div className="galeria-page-container bg-light">
            <section className="galeria-hero d-flex align-items-center justify-content-center text-white text-center">
                <div className="hero-overlay"></div>
                <div className="position-relative z-3">
                    <h1 className="display-3 fw-bold">Galería</h1>
                    <p className="lead">Descubre nuestro espacio y creaciones</p>
                </div>
            </section>

            <div className="container py-5 text-center">
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    {['Todas', 'Chefs', 'Comida', 'Lugar', 'Bebidas'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFiltro(cat)}
                            className={`btn btn-filter ${filtro === cat ? 'active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                {categorias.map((categoria) => (
                    <div key={categoria} className="mb-5 row-tematica">
                        {filtro === 'Todas' && (
                            <h3 className="text-start fw-bold mb-4 text-dark h4 border-start border-4 border-teal ps-3">
                                {categoria}
                            </h3>
                        )}
                        <div className="row g-4 justify-content-center">
                            {datosGaleria[categoria].map((img) => (
                                <div key={img.id} className="col-12 col-md-6 col-lg-4">
                                    <div className="galeria-card bg-white p-2 shadow-sm rounded-4 overflow-hidden border-0">
                                        <div className="img-wrapper rounded-3 overflow-hidden">
                                            <img src={img.src} alt={img.alt} className="img-fluid galeria-img" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galeria;