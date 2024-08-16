import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import '../css/CreateEdit.css';
createUserServive
import Swal from 'sweetalert2'
import { createUserServive } from '../../controllers/usersControllerrrr';

const CreateUser = ({ doRefresh }) => {

  const { register, handleSubmit, reset } = useForm();
  const buttonClose = useRef()

  const onSubmit = async (data) => {
    
    Swal.fire({
      title: "Confirmar acción",
      text:"¿Estás seguro de que deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#188928",
      cancelButtonColor: "#9D3834",
      confirmButtonText: "Si!"
    }).then(async(result) => {
      if (result.isConfirmed) {

        const response = await createUserServive(data);
        if(response === 201){
          Swal.fire({
            title: "Bien hecho!",
            text: "Usuario creado de manera exitosa!",
            icon: "success"
          });
          reset();
          buttonClose.current.click();
          doRefresh();
        } else{
          Swal.fire({
            title: "Error!",
            text: "Hubo un problema al crear el usuario",
            icon: "error"
          });
        }
      }
    });
  }

    return (
      <>
      <div className="modal fade" id="ModalCreateUser" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Registro de Usuario</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='containerCreateEdit'>
                  
                  <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="Dni">Identificación</label>
                      <input type="text" className='form-control' {...register("dni", {required: true, pattern: /^[0-9]+$/, message: "Solo se permiten números."})} id="dni" />
                    </div>
                      <br />
                    <div className='form-group col'>
                      <label htmlFor="name">Nombre</label>
                      <input type="text" className='form-control' {...register("name", {required: true})} id="name" />
                    </div>
                  </div>
                    
                    <br />
          
                  <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="email">Email</label>
                      <input type="email" className='form-control' {...register("email", {required: true})} id="email" />
                    </div>
                      <br />
                    <div className='form-group1 col'>
                      <label htmlFor="occupation">Ocupación</label>
                      <input type="text" className='form-control' {...register("occupation", {required: true})} id="occupation" />
                    </div>
                  </div>
                    
                    <br />
          
                  <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="area">Area</label>
                      <input type="text" className='form-control' {...register("area", {required: true})} id="area" />
                    </div>
                      <br />
                    <div className='fomr-group col'>
                      <label htmlFor="location">Ubicación</label>
                      <input type="text" className='form-control' {...register("location", {required: true})} id="location" />
                    </div>
                  </div>
                    
                    <br />
                  <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="">Estado
                        <select className="form-select" {...register("state", {required: true})} >
                          <option value="Activo">Activo</option>
                          <option value="Inactivo">Inactivo</option>
                        </select>
                      </label>
                    </div>
                  </div> 
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={buttonClose}>Cerrar</button>
                  <button type="submit" className="btn btn-success">Agregar</button>
                </div>
              </form>
            </div>          
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default CreateUser