import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='container-LoginForm'>
      <h2>Inicio sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre Usuario</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className='btn btn-success' type="submit">Iniciar sesión</button>
        
        <label>¿No estas registrado?
          <Link className="LoginToRegisterLink" to="/register">
            Registrate
          </Link>
        </label>
      </form>
    </div>
  )
}

export default LoginForm;