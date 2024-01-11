import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const Crud = () => {

    const datas = useSelector((state) => state.users)

    const dispatch = useDispatch()
    const [input, setInput] = useState({ name: "", email: "" })
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState()


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput({ name: "", email: "" })

        if (edit == true) {
            setEdit(false)
            return dispatch({
                type: "UPDATE_USER",
                payload: { ...input, id: editId }
            })
        } else {
            return dispatch({
                type: "ADD_DATA",
                payload: input
            })
        }
    }
    // console.log(datas);
    const handleEdit = (id) => {
        setInput(datas[id])
        setEdit(true)
        setEditId(id)
    }

    const handleDelete = (id) => {
        return dispatch({
            type: "DELETE_DATA",
            id: id
        })
    }

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <form action="" className='text-center border p-4 col-4' onSubmit={handleSubmit}>
                    <h3 className='text-center text-secondary'>Crud-Redux</h3>
                    <input type="text" className='form-control col-12' placeholder='Name' name='name' value={input.name} onChange={handleChange} />
                    <input type="email" className='form-control col-12 mt-3' placeholder='E-mail' name='email' value={input.email} onChange={handleChange} />
                    <button className='btn btn-success mt-3'>{edit ? "Update" : "Add"}</button>
                </form>

            </div>
            <div className="col-6 text-center m-auto mt-5">
                <table className='table border'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map((data, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button className='btn btn-warning' onClick={() => handleEdit(id)}>Edit</button>
                                            <button className='btn btn-danger ms-2' onClick={() => handleDelete(id)}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Crud