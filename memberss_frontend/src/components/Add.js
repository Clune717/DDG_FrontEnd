import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
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
    <div className='backdrop-blur-md bg-white/30'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">User Name: </label>
        <input type="text" value={member.name} name="name" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" value={member.age} name="age" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" value={member.email} name="email" onChange={handleChange} />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Add
