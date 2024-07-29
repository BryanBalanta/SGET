import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import Menu from '../assets/components/Menu';
import '../assets/css/EditUserForm.css';
import Swal from 'sweetalert2'

const EditProfile = (user, handleEditSubmit, reset) => {

    const {register, handleSubmit} = useForm();

    useEffect(() => {
      if(user){
        /*reset(user)*/
      }
    }, [user, reset])
    const onSubmit = async (data) =>{
      Swal.fire({
        title: "Confirmar acción",
        text:"¿Estás seguro de que deseas continuar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#188928",
        cancelButtonColor: "#9D3834",
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
        <Menu />
        <div className='editUser-container'>
          <h4 className='title-EditUser'>Editar perfil</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='form-group col'>
                <label htmlFor="Dni">Identificación</label>
                <input type="text" {...register("dni")} id="dni" required />
              </div>
              <br />
              <div className='form-group col'>
                <label htmlFor="name">Nombre</label>
                <input type="text" {...register("name")} id="name" required />
              </div>
            </div>
            
            <br />

            <div className='row'>
              <div className='form-group col'>
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} id="email" required />
              </div>
              <br />
              <div className='form-group1 col'>
                <label htmlFor="occupation">Ocupación</label>
                <input type="text" {...register("occupation")} id="occupation" required />
              </div>
            </div>
            
            <br />

            <div className='row'>
              <div className='form-group col'>
                <label htmlFor="area">Area</label>
                <input type="text" {...register("area")} id="area" required />
              </div>
              <br />
              <div className='fomr-group col'>
                <label htmlFor="location">Ubicación</label>
                <input type="text" {...register("location")} id="location" required />
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
            
            <br />

            <button  type="submit" className='btn btn-success'>Editar</button>
          </form>
        </div>
      </>
    )
  }
  
  export default EditProfile