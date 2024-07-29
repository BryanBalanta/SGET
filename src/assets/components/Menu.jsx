import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { PiExcludeSquareFill } from "react-icons/pi";
import '../css/Menu.css';

const Menu = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink to="/" className="nav-brand">SGET</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link"><BsFillHouseFill /> Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/users" className="nav-link"><FaUsers /> Usuarios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/equipments" className="nav-link"><FaComputer /> Equipos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/maintenance" className="nav-link"><GrHostMaintenance /> Mantenimiento</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/lowEquipments" className="nav-link"><PiExcludeSquareFill /> Equipos de baja</NavLink>
                        </li>          
                    </ul>
                </div>
                <button type="button" className="btn btn-dark">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><BsFillPersonFill />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><NavLink to="/editProfile" className="dropdown-item">Editar perfil</NavLink></li>
                        <li className="dropdown-divider"></li>
                        <li><NavLink to="/login" className="dropdown-item">Cerrar sesion</NavLink></li>
                    </ul>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Menu    