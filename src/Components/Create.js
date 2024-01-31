import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate();

    const header = {"Access-Control-Allow-Origin": "*"}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        axios.post("https://65af8d122f26c3f2139b1773.mockapi.io/crud-operation", {
            name: name,
            email: email,
            header,
        })

        .then(()=> {
            history("/read");
         });
       
    }
  return (
    <>
      <h2>Create</h2>
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
           Name
          </label>
          <input
            type="text"
            className="form-control"
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
            onChange={(e)=> setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
       
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    
    </>
  );
};

export default Create;
