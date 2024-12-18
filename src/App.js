import React from 'react';
import './App.css';
import backgroundImage from './images/fondo_home_1.png'; // Ajusta el nombre del archivo según tu imagen
import logo from './images/logo.png'; // Asegúrate de añadir tu logo

function App() {
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
                <h3>Herramientas</h3>
                <p>Tableau · Python · SQL · R · Excel</p>
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
          <p>I am a data analyst passionate about transforming data into meaningful insights.</p>
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
