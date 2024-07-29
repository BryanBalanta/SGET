import React, { useState, useEffect } from 'react'
import Menu from '../assets/components/Menu'
import TableUsers from '../assets/components/TableUsers'
import CreateUser from '../assets/components/CreateUser'
import EditUser from '../assets/components/EditUser'
import { getUsers, deleteUsersService, updateUserService } from '../controllers/usersController'
import Swal from 'sweetalert2'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Users = () => {  
  const [listUsers, setListUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  //Estados para la paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [ usersPerPage ] = useState(10);

  useEffect(() => {
    getListUsers();
  }, [refresh])

  const getListUsers = async () => {
    const response = await getUsers();
    setListUsers(response);
  }

  const deleteUsers= async (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar este artículo?",
      text: "Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#246321",
      cancelButtonColor: "#9D3834",
      confirmButtonText: "Si, eliminar!"
    }).then(async(result) => {
      if (result.isConfirmed) {

        const response = await deleteUsersService(id);
        if(response === 200){
          Swal.fire({
            title: "Eliminado!",
            text: "Producto eliminado con exito.",
            icon: "success"
          });
          setRefresh(!refresh)
        }
        else{
          Swal.fire({
            title: "Error!",
            text: "Hubo un problema al eliminar",
            icon: "error"
          });
        }
      }
    });
  }
  const handleEditClick = (user) => {
    setSelectedUser(user);
  }

  const handleEditSubmit = async (updatedUser) => {
    const response = await updateUserService(updatedUser);
    return response;
  }

  const doRefresh = () => {
    setRefresh(!refresh);
  }

  //Obtener usuarios actuales para la pagina actual
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = listUsers.slice(indexOfFirst, indexOfLast);

  const headers = ['Identificación','Nombre','Correo','Ocupación','Ubicación','Estado','Acciones']

  // Calcular el número total de páginas
  const totalPages = Math.ceil(listUsers.length / usersPerPage);

  // Crear un array con los números de página
  const goToNextoPage = () =>{
    setCurrentPage((PrevPage) => Math.min(PrevPage + 1, totalPages))
  }

  const goToPreviusPage = () =>{
    setCurrentPage((PrevPage) =>Math.max(PrevPage - 1, 1))
  }
    return (
        <>
          <Menu />
          <CreateUser doRefresh={doRefresh}/>
          <div className='container-xxl pt-3 pb-3 p-5'>
            <div className='d-flex justify-content-end'>

              <div className='d-flex justify-content-start mx-5'>
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={goToPreviusPage}>
                        <AiOutlineArrowLeft />
                      </button>
                    </li>
                    
                    <li className='page-item'>
                      <span className='page-link'>{currentPage} de {totalPages}</span>
                    </li>
                    
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={goToNextoPage}>
                        <AiOutlineArrowRight />
                      </button>
                    </li>
                  </ul>
                </nav> 
              </div>
              <button className='btn btn-success px-4 mb-3' data-bs-toggle="modal" data-bs-target="#ModalCreateUser">
                Agregar Usuario
              </button>
            </div>
            <TableUsers headers={headers} list={currentUsers} handleEditClick={handleEditClick} deleteElement={deleteUsers}/>
            {selectedUser && <EditUser doRefresh={doRefresh} user={selectedUser} handleEditSubmit={handleEditSubmit}/>}
            
          </div>
      </>
    )
}

export default Users