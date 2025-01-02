import React from 'react';
import './App.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from './images/fondo_home_1.png'; // Ajusta el nombre del archivo según tu imagen
import logo from './images/logo.png'; // Asegúrate de añadir tu logo
import carrusel1 from './images/1carrusel.png';
import carrusel2 from './images/2carrusel.png';
import carrusel3 from './images/3carrusel.png';
import carrusel4 from './images/4carrusel.png';
import carrusel5 from './images/5carrusel.png';
import carrusel6 from './images/6carrusel.png';
import carrusel7 from './images/7carrusel.png';
import carrusel8 from './images/8carrusel.png';
import carrusel9 from './images/9carrusel.png';
import carrusel10 from './images/10carrusel.png';

function App() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  };

  return (
    <div className="App">
      {/* Primera sección - Home */}
      <section className="section home-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-header">
              <img src={logo} alt="Ana Navarro Logo" className="logo-header" />
              <h1>Ana Navarro</h1>
              <h2>Especialista en Datos</h2>
            </div>
            
            <div className="hero-specialties">
              <div className="specialty-tag">Innovación</div>
              <div className="specialty-tag">Ingeniería</div>
              <div className="specialty-tag">Análisis</div>
              <div className="specialty-tag">Visualización</div>
            </div>
          </div>

          <div className="carousel-container">
            <Slider {...sliderSettings}>
              <div className="carousel-slide">
                <img src={carrusel1} alt="Slide 1" />
              </div>
              <div className="carousel-slide">
                <img src={carrusel2} alt="Slide 2" />
              </div>
              <div className="carousel-slide">
                <img src={carrusel3} alt="Slide 3" />
              </div>
              <div className="carousel-slide">
                <img src={carrusel4} alt="Slide 4" />
              </div>
              <div className="carousel-slide">
                <img src={carrusel5} alt="Slide 5" />
              </div>
              <div className="carousel-slide">
                <img src={carrusel6} alt="Slide 6" />
              </div>
              <div className="carousel-slide">
                <img src={carrusel7} alt="Slide 7" />
              </div>
              <div className="carousel-slide">
                <img src={carrusel8} alt="Slide 8" />
              </div>
              <div className="carousel-slide">
                <img src={carrusel9} alt="Slide 9" />
              </div>
              <div className="carousel-slide">
                <img src={carrusel10} alt="Slide 10" />
              </div>
            </Slider>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-content">
                <h3>Análisis y Visualización de Datos</h3>
                <p>Especializada en descubrir patrones y crear visualizaciones interactivas que comunican insights de manera efectiva</p>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-content">
                <h3>Ingeniería de Datos</h3>
                <p>Diseño y optimización de infraestructuras para el procesamiento eficiente de datos</p>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-content">
                <h3>Ciencia de Datos</h3>
                <p>Implementación de modelos predictivos y análisis estadístico avanzado</p>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-content">
                <h3>Tecnologías</h3>
                <p>Tableau · Python · SQL · R · Excel · MySQL · Oracle Discoverer · Dbeaver · Redshift · Athena · Postgre · Superset · Visual Studio Code · Jupyter Notebooks · Spider · MySQL Workbench · Google Data Studio · Power BI · Coolab · Airflow · Power Automate · Visual Basic · AWS · Github</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda sección - Educación */}
      <section className="section education-section">
        <div className="content">
          <h2>Formación Académica</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>Ingeniería en Sistemas</h3>
              <h4>con Especialización en Ingeniería de Datos</h4>
              <p className="institution">Universidad Virtual del Estado de Guanajuato</p>
              <span className="status">Titulada</span>
            </div>
            
            <div className="education-card">
              <h3>Licenciatura en Administración de Empresas</h3>
              <h4>con Especialización PYMES</h4>
              <p className="institution">Universidad Abierta y a Distancia de México</p>
              <span className="status">Titulada</span>
            </div>

            <div className="education-card">
              <h3>Técnico en Productividad</h3>
              <p className="institution">Centro de Estudios Científicos y Tecnológicos del Estado de Jalisco</p>
              <span className="status">Titulada</span>
            </div>
          </div>

          <h2>Certificaciones</h2>
          <div className="certifications-grid">
            <div className="cert-card">
              <h3>Diseño UX</h3>
              <p className="institution">Google</p>
              <span className="year">2024</span>
              <span className="status-ongoing">En proceso</span>
            </div>

            <div className="cert-card">
              <h3>Data Analyst</h3>
              <p className="institution">Google</p>
              <span className="year">2023</span>
            </div>

            <div className="cert-card">
              <h3>Fundamentos para la Administración en la Industria 4.0</h3>
              <p className="institution">Microsoft Corp.</p>
              <span className="year">2021</span>
            </div>

            <div className="cert-card">
              <h3>Diplomado en Data Science</h3>
              <p className="institution">Universidad Politécnica de Querétaro</p>
              <span className="year">2021</span>
            </div>

            <div className="cert-card">
              <h3>Desarrollo de Software</h3>
              <p className="institution">Universidad Virtual del Estado de Guanajuato</p>
              <span className="year">2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tercera sección - Proyectos */}
      <section className="section projects-section">
        <div className="content">
          <h2>Proyectos de Visualización</h2>
          <div className="tableau-embed">
            <iframe
              src="TU_URL_DE_TABLEAU_PUBLIC"
              width="100%"
              height="600"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sección final - About */}
      <section className="section about-section">
        <div className="about">
          <h2>Sobre Mí</h2>
          
          <p>Mi objetivo es proporcionar soluciones efectivas a desafíos relacionados con datos, disfrutando cada etapa del proceso. Poseo la habilidad de traducir requisitos comerciales en soluciones prácticas y efectivas.</p>
          
          <p>Me caracterizo por un enfoque colaborativo, pensamiento innovador y eficiencia en la resolución de problemas. Siempre en búsqueda de nuevos enfoques, estoy comprometida a mejorar la lógica empresarial y superar las expectativas.</p>
          
          <p>Con una curiosidad innata por la tecnología, exploro el enorme poder de los datos para descubrir soluciones óptimas. Además, destaco por mis excelentes habilidades de comunicación, lo que me permite conectar y colaborar eficazmente con equipos multidisciplinarios.</p>
          
          <div style={{position: 'relative', width: '100%', height: '0', paddingTop: '100%',
            paddingBottom: '0', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden',
            borderRadius: '8px', willChange: 'transform'}}>
            <iframe 
              loading="lazy" 
              style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0'}}
              src="https://www.canva.com/design/DAGbA6B94Hc/-8A85f6uQxoXPdT0hCT5jw/view?embed" 
              allowFullScreen="allowfullscreen" 
              allow="fullscreen">
            </iframe>
          </div>
          <h3>Skills</h3>
          <ul>
            <li>Data Analysis</li>
            <li>Tableau</li>
            <li>SQL</li>
            <li>Python</li>
            <li>R</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
