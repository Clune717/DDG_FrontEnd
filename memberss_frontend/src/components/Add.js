import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
  let emptyMember = { name: '', age: '', email:'', }
  const [member, setMember] = useState(emptyMember)
  return (
    <>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />
        <br />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" />
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
