import React from 'react';
import { useForm } from "react-hook-form";
import '../css/CreateEdit.css';

const CreateAdmin = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const response = await createAdminService(data);
    if(response === 201){

    }
  }
  
  return (
        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Registro de Admin</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div class="modal-body">

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='containerCreateEdit'>

                  <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="Dni">Identificación</label>
                      <input type="text" {...register("dni")} id="dni" required/>
                    </div>
                    <br />
                    <div className='form-group col'>
                      <label htmlFor="name">Nombre</label>
                      <input type="text" {...register("name")} id="name" required/>
                    </div>
                    </div>
                    
                    <br />
          
                    <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="email">Email</label>
                      <input type="email" {...register("email")} id="email" required/>
                    </div>
                    <br />
                    <div className='form-group1 col'>
                      <label htmlFor="occupation">Ocupación</label>
                      <input type="text" {...register("occupation")} id="occupation" required/>
                    </div>
                    </div>
                    
                    <br />
          
                    <div className='row'>
                    <div className='form-group col'>
                      <label htmlFor="area">Area</label>
                      <input type="text" {...register("area")} id="area" required/>
                    </div>
                    <br />
                    <div className='fomr-group col'>
                      <label htmlFor="location">Ubicación</label>
                      <input type="text" {...register("location")} id="location" required/>
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
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-success" >Agregar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CreateAdmin