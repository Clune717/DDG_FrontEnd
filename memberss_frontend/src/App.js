import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add.js'
import Edit from './components/Edit.js'

const App = () => {
  let [clients, setClients] = useState([])
  
  const handleCreate = (addMember) => {
    axios
      .post('http://localhost:8000/api/members', addMember)
      .then((response) => {
        console.log(response)
        getClients()
      })
  }
  

  const getClients = () => {
 axios
   .get('http://localhost:8000/api/members')
   .then(
     (response) => setClients(response.data),
     (err) => console.error(err)
   )
   .catch((error) => console.error(error))
}

const handleDelete = (event) => {
  axios
    .delete('http://localhost:8000/api/members/' + event.target.value)
    .then((response) => {
      getClients()
    })
}

const handleUpdate = (editMember) => {
  console.log(editMember)
  axios
    .put('http://localhost:8000/api/members/' + editMember.id, editMember)
    .then((response) => {
      getClients()
    })
}

  

  useEffect(() => {
 getClients()
}, [])


  return (
    <>
      <h1>Dessayer Group</h1>
      <Add handleCreate={handleCreate}/>
      <div className="clients">
 {clients.map((member) => {
   return (
     <div className="members" key={member.id}>
       <h4>Name: {member.name}</h4>
       <h5>Age: {member.age}</h5>
       <h6>Email: {member.email}</h6>
       <Edit handleUpdate={handleUpdate} person={member} />
       <button onClick={handleDelete} value={member.id}>
  X
</button>
     </div>
   )
 })}
</div>
    </>
  )
}

export default App
