import React from 'react'
import { Link } from 'react-router-dom'
import '../css/BlocksHome.css'


const BlocksHome = () => {
  const blocksPages = [
    {path: '/admin', title: 'Admin'},
    {path: '/users', title: 'Usuarios'},
    {path: '/equipments', title: 'Equipos'},
    {path: '/maintenance', title: 'Mantenimiento'},
    {path: '/lowEquipments', title: 'Equipos de Baja'},
  ];

  return (
    <>
    <div className='home-container'>
      {blocksPages.map((blockPage, index) => (
        <div key={index} className='card'>
          <h3>{blockPage.title}</h3>
          <Link to={blockPage.path} className='nav-link-blocksPages'>Ir a {blockPage.title}</Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default BlocksHome