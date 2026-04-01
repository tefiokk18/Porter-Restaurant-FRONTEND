import React from 'react';
import './aboutus.css';

const AboutUs = () => {
    const equipo = [
        {
            nombre: "Pia Stephania Juarez Aban",
            puesto: "Desarrolladora Frontend",
            desc: "Apasionada por el desarrollo web, enfocada en crear interfaces modernas y funcionales con React.",
            img: "./imagenes/FOTO Pia Juarez.jpg"
        },
    ];

    return (
        <div className="aboutus-container">

           
            <section className="aboutus-hero d-flex align-items-center justify-content-center text-white text-center">
                <div className="hero-overlay"></div>
                <div className="position-relative z-3">
                    <h1 className="display-3 fw-bold">Sobre Mí</h1>
                    <p className="lead">Desarrollo web, creatividad y aprendizaje constante</p>
                </div>
            </section>

            <section className="container py-5 my-5 text-center">
                <h2 className="display-5 fw-bold mb-4">Mi Historia</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10 history-text">
                        <p className="fs-5 text-muted">
                            Soy desarrolladora web en formación con interés en el diseño y desarrollo de aplicaciones modernas.
                        </p>
                        <p className="fs-5 text-muted">
                            Me gusta trabajar con tecnologías como React y seguir aprendiendo nuevas herramientas para mejorar mis proyectos.
                        </p>
                        <p className="fs-5 text-muted">
                            Mi objetivo es crecer profesionalmente y crear experiencias digitales útiles y atractivas.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="display-5 fw-bold mb-5">Mis Valores</h2>
                    <div className="row g-4">
                        {[
                            { tit: "Creatividad", ico: "bi-lightbulb", txt: "Busco soluciones originales." },
                            { tit: "Aprendizaje", ico: "bi-book", txt: "Siempre estoy mejorando mis habilidades." },
                            { tit: "Responsabilidad", ico: "bi-check", txt: "Compromiso con cada proyecto." },
                            { tit: "Trabajo en equipo", ico: "bi-people", txt: "Me adapto y colaboro fácilmente." }
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
                <h2 className="display-5 fw-bold mb-5">Sobre Mí</h2>
                <div className="row g-4 justify-content-center">
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
                    <h2 className="display-5 fw-bold mb-4">Mi Objetivo</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <p className="fs-4 fst-italic">
                                "Seguir creciendo como desarrolladora, crear proyectos útiles y mejorar continuamente mis habilidades."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;