import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add.js'

const App = () => {
  const getClients = () => {
 axios
   .get('http://localhost:8000/api/members')
   .then(
     (response) => setClients(response.data),
     (err) => console.error(err)
   )
   .catch((error) => console.error(error))
}

  let [clients, setClients] = useState([])

  useEffect(() => {
 getClients()
}, [])


  return (
    <>
      <h1>Dessayer Group</h1>
      <Add/>
      <div className="clients">
 {clients.map((member) => {
   return (
     <div className="person" key={member.id}>
       <h4>Name: {member.name}</h4>
       <h5>Age: {member.age}</h5>
       <h6>Email: {member.email}</h6>
     </div>
   )
 })}
</div>
    </>
  )
}

export default App
