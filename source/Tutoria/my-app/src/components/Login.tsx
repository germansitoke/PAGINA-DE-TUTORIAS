import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './Login.css';  

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica de autenticación (esto debe ser reemplazado por tu backend)
    if (email === 'user@example.com' && password === 'password') {
      // Si la autenticación es exitosa, redirigir al usuario
      navigate('/home');  // Usamos navigate en lugar de history.push
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Iniciar Sesión</h2>
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
        <button type="submit" className="button">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
