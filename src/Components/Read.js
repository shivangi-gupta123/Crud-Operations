import React, { useState , useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get("https://65af8d122f26c3f2139b1773.mockapi.io/crud-operation")
         .then((res)=> {
            console.log(res.data);
            setData(res.data)
         })
    }

    const handleDelete = (id) => {
        axios.delete(`https://65af8d122f26c3f2139b1773.mockapi.io/crud-operation/${id}`)
        .then(()=>{
            getData();
        })
    }

    const setDataToLocalStorage = (id , name , email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }
    useEffect(() => {
        getData();
    }, [])
 
  return (
    <>
    <h1>Read</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachData)=> {
        return(
            <>
  <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td> <Link to="/update"><button type="button" class="btn btn-success" onClick={()=> setDataToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button></Link></td>
      <td> <button type="button" class="btn btn-dark" onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
      
    </tr>
   
  </tbody>
            </>
        )
    })

  }
</table>
</>
  )
}

export default Read