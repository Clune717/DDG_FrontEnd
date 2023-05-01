import React, { useState } from 'react'

const Edit = (props) => {
  let emptyMember = { name: '', age: '', email:'', }
  const [member, setMember] = useState(emptyMember)

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(member)
  }
  

  return (
    <body className='bg-blue-300'>
      <details>
        <summary>Edit Member</summary>
    
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">User Name: </label>
        <input type="text" value={member.name} name="name" onChange={handleChange} />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" value={member.age} name="age" onChange={handleChange} />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" value={member.email} name="email" onChange={handleChange} />
        <input type="submit"/>
      </form>
    
      </details>
    </body>
  )
}

export default Edit