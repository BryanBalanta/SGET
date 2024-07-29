import React from 'react'
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

const TableUsers = ({ headers, list, handleEditClick, deleteElement }) => {

  return (
    <>  
    <div className='table-responsive' >
        <table className='table table-responsive table-hover'>
            <thead className='thead-primary'>
                <tr>
                    {
                    headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                list.map((element, index) => (
                    <tr key={index}>
                        <td>{element.dni}</td>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.occupation}</td>
                        <td>{element.location}</td>
                        <td>{element.state}</td>
                        <td>
                            <button className='btn btn-secondary' style={{backgroundColor: "#3C5B6F"}} 
                            onClick={() => { handleEditClick(element) }} data-bs-toggle="modal" data-bs-target="#ModalEditUser"><RiEditLine /></button>
                            <button className='btn btn-secondary' style={{backgroundColor: "#153448"}} 
                            onClick={() => { deleteElement(element.id) }}><RiDeleteBin6Line /></button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default TableUsers