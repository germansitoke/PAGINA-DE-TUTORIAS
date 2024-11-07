import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './Registro.css'; 

const Registro: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica para el registro (esto debe ser reemplazado por tu backend)
    if (password === confirmPassword) {
      // Si las contraseñas coinciden, registrar al usuario
      console.log('Registrando usuario:', email);
      navigate('/login');  // Redirige al usuario a la página de Login después de registrarse
    } else {
      alert('Las contraseñas no coinciden');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Registrarse</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label htmlFor="email" className="label">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="label">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="confirmPassword" className="label">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
