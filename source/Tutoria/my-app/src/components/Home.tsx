import React from 'react';
import './Home.css';  

const PantallaBienvenida: React.FC = () => {
  return (
    <div className="home-background">
      <div className="home-overlay">
        <h1 className="title">Bienvenidos a TutorGo</h1>

        <div className="row">
          <div className="card">
            <h2 className="card-title">Misión</h2>
            <p className="card-text">
              Nuestra misión es proporcionar una plataforma digital eficiente y accesible que facilite la conexión entre estudiantes y tutores dentro de la Universidad IUSH. Buscamos optimizar la gestión de las tutorías, permitiendo que los estudiantes encuentren fácilmente apoyo académico en áreas clave como cálculo, inglés, lógica de programación y oratoria.
            </p>
          </div>

          <div className="card">
            <h2 className="card-title">Visión</h2>
            <p className="card-text">
              Nuestra visión es convertirnos en la herramienta líder de tutorías académicas en la Universidad IUSH, brindando un entorno estructurado y eficiente que maximice las oportunidades de aprendizaje para todos los estudiantes. Aspiramos a ser un modelo de colaboración y apoyo entre pares, donde cada estudiante, ya sea tutor o aprendiz, tenga acceso a una educación más equitativa y de calidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PantallaBienvenida;
