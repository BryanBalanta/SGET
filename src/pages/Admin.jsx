import React, { useState } from 'react'
import Menu from '../assets/components/Menu'
import CreateAdmin from '../assets/components/CreateAdmin'

const Admin = () => {
  const [listAdmin, setListAdmin] = useState([]);

  const headers = ['Identificación','Nombre','Correo','Ocupacion','Ubicación','Fecha de Entrada','Estado','Acciones']
  return (
    <>
        <Menu/>
        <CreateAdmin/>
        <div className='container pt-3'>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-success px-4 mb-3' data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Admin</button>
          </div>
          <Table headers={headers} list={listAdmin}/>
        </div>
    </>
  )
}

export default Admin