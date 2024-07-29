import React, { useRef, useEffect } from 'react'
import { useForm } from "react-hook-form"
import '../css/CreateEdit.css';
import Swal from 'sweetalert2'

const EditUser = ({ user, handleEditSubmit, doRefresh }) => {

  const { register, handleSubmit, reset } = useForm();
  const buttonClose = useRef()

  useEffect(() => {
    if(user){
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = async (data) => {

    Swal.fire({
      title: "Confirmar acción",
      text:"¿Estás seguro de que deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#188928",
      cancelButtonColor: "#d10902",
      confirmButtonText: "Si!"
    }).then(async(result) => {
      if(result.isConfirmed){

        const response = await handleEditSubmit ({...user, ...data});
        if(response === 200){
          Swal.fire({
            title: "Bien hecho!",
            text: "Usuario actualizado de manera exitosa!",
            icon: "success"
          });
          buttonClose.current.click();
          doRefresh();
        } else{
          Swal.fire({
            title: "Error!",
            text: "Hubo un problema al actualizar el usuario",
            icon: "error"
          });
        }
      }
    })
  }
  
  return (
    <>
      <div className="modal fade" id="ModalEditUser" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Registro</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='containerCreateEdit'>
                
                  <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="Dni">Identificación</label>
                      <input type="text" className='form-control' {...register("dni")} id="dni" required/>
                    </div>
                    <br />
                    <div className='form-group col'>
                      <label htmlFor="name">Nombre</label>
                      <input type="text" className='form-control' {...register("name")} id="name" required/>
                    </div>
                  </div>
                  
                  <br />

                  <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="email">Email</label>
                      <input type="email" className='form-control' {...register("email")} id="email" required/>
                    </div>
                    <br />
                    <div className='form-group1 col'>
                      <label htmlFor="occupation">Ocupación</label>
                      <input type="text" className='form-control' {...register("occupation")} id="occupation" required/>
                    </div>
                  </div>
                  
                  <br />

                  <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="area">Area</label>
                      <input type="text" className='form-control' {...register("area")} id="area" required/>
                    </div>
                    <br />
                    <div className='fomr-group col'>
                      <label htmlFor="location">Ubicación</label>
                      <input type="text" className='form-control' {...register("location")} id="location" required/>
                    </div>
                  </div>
                  
                  <br />
                  <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="">Estado
                        <select className="form-select" {...register("state")} required>
                          <option value="Activo">Activo</option>
                          <option value="Inactivo">Inactivo</option>
                        </select>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={buttonClose}>Cerrar</button>
                  <button type="submit" className="btn btn-success">Editar</button>
                </div>
              </form>              
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}

export default EditUser