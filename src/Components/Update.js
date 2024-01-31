import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Update = () => {

    const [id , setId] = useState(0);
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const navigate =  useNavigate();

    useEffect(() => {
     setId (localStorage.getItem("id"))
     setName (localStorage.getItem("name"))
    setEmail (localStorage.getItem("email"))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://65af8d122f26c3f2139b1773.mockapi.io/crud-operation/${id}`, {
            name: name,
            email: email,
        }).then(()=>{
            navigate("/read")
        })
    }

  return (
    <>
      <h2>Update</h2>
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
           Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
       
        <button type="submit" className="btn btn-primary"
         onClick={handleUpdate}
         >
         Update
        </button>

    
      </form>
    
    </>
  )
}

export default Update