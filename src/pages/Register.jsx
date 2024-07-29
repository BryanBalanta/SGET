import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
    <div className="container-RegisterForm">
      <h2>Registro</h2>
      <form onsubmit={handleSubmit}>
        <label htmlFor="username">Nombre Usuario</label>
        <input
          type="type"
          id="username"
          value={username}          onchange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          id="email"
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className='btn btn-success' type="submit">Registrarse</button>
        <label>¿Ya estas registrado?
          <Link className="RegisterToLoginLink" to="/login">
            Inicia sesion
          </Link>
        </label>
      </form>
    </div>
  )
}

export default RegisterForm