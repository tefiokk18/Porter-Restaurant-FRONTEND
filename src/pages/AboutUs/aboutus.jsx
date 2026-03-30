import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
    const equipo = [
        {
            nombre: "Chef Martín Rodríguez",
            puesto: "Chef Ejecutivo",
            desc: "Con más de 15 años de experiencia en gastronomía internacional",
            img: "/imagenes/chef1.avif"
        },
        {
            nombre: "Ana Laura García",
            puesto: "Sommelier",
            desc: "Experta en maridajes y selección de vinos premium",
            img: "/imagenes/chef2.avif"
        },
        {
            nombre: "Carlos Fernández",
            puesto: "Chef Pastelero",
            desc: "Especialista en postres y creaciones dulces innovadoras",
            img: "/imagenes/chef3.avif"
        }
    ];

    return (
        <div className="aboutus-container">

            <section className="aboutus-hero d-flex align-items-center justify-content-center text-white text-center">
                <div className="hero-overlay"></div>
                <div className="position-relative z-3">
                    <h1 className="display-3 fw-bold">Quiénes Somos</h1>
                    <p className="lead">Pasión por la gastronomía, compromiso con la excelencia</p>
                </div>
            </section>

            <section className="container py-5 my-5 text-center">
                <h2 className="display-5 fw-bold mb-4">Nuestra Historia</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10 history-text">
                        <p className="fs-5 text-muted">Porter Restaurant nace en el corazón de Tucumán con una visión clara: crear un espacio donde la excelencia culinaria se encuentre con la calidez de la hospitalidad argentina. Desde nuestros inicios, nos hemos dedicado a ofrecer una experiencia gastronómica que va más allá de la comida.</p>
                        <p className="fs-5 text-muted">Cada plato que servimos cuenta una historia. Trabajamos con productores locales para obtener los mejores ingredientes frescos, apoyando a nuestra comunidad y garantizando la calidad excepcional que nuestros clientes merecen.</p>
                        <p className="fs-5 text-muted">Nuestro equipo de chefs combina técnicas culinarias tradicionales con innovación moderna, creando platillos que despiertan los sentidos y crean recuerdos inolvidables.</p>
                    </div>
                </div>
            </section>


            <section className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="display-5 fw-bold mb-5">Nuestros Valores</h2>
                    <div className="row g-4">
                        {[
                            { tit: "Excelencia Culinaria", ico: "bi-chef-hat", txt: "Cada plato es preparado con la máxima atención al detalle." },
                            { tit: "Pasión", ico: "bi-heart", txt: "Amamos lo que hacemos y se refleja en cada experiencia." },
                            { tit: "Calidad", ico: "bi-award", txt: "Solo trabajamos con productos de primera calidad local." },
                            { tit: "Hospitalidad", ico: "bi-people", txt: "Cada cliente es parte de nuestra familia." }
                        ].map((v, i) => (
                            <div key={i} className="col-md-6 col-lg-3">
                                <div className="value-card shadow-sm p-4 bg-white h-100 rounded-4">
                                    <div className="icon-circle mb-3 mx-auto teal-light-bg">
                                        <i className={`bi ${v.ico} text-teal fs-3`}></i>
                                    </div>
                                    <h4 className="fw-bold h5">{v.tit}</h4>
                                    <p className="text-muted small mb-0">{v.txt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container py-5 my-5 text-center">
                <h2 className="display-5 fw-bold mb-5">Nuestro Equipo</h2>
                <div className="row g-4">
                    {equipo.map((m, i) => (
                        <div key={i} className="col-md-4">
                            <div className="team-img-wrapper mb-3 mx-auto">
                                <img src={m.img} alt={m.nombre} className="rounded-circle shadow-sm" />
                            </div>
                            <h4 className="fw-bold mb-1">{m.nombre}</h4>
                            <p className="text-teal fw-bold small mb-2">{m.puesto}</p>
                            <p className="text-muted small px-3">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="mision-section py-5 text-white text-center">
                <div className="container py-4">
                    <h2 className="display-5 fw-bold mb-4">Nuestra Misión</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <p className="fs-4 fst-italic">
                                "Crear experiencias gastronómicas memorables que celebren la riqueza de los sabores locales,
                                la calidad excepcional y la hospitalidad sincera. En Porter, cada comida es una oportunidad
                                para conectar, disfrutar y crear recuerdos que perduren."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;