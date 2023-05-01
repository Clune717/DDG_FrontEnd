import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add.js'
import Edit from './components/Edit.js'
import './index.css';

const App = () => {
  let [clients, setClients] = useState([]);

  const handleCreate = (addMember) => {
    axios
      .post("http://localhost:8000/api/members", addMember)
      .then((response) => {
        console.log(response);
        getClients();
      });
  };

  const getClients = () => {
    axios
      .get("http://localhost:8000/api/members")
      .then(
        (response) => setClients(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };

  const handleDelete = (event) => {
    axios
      .delete("http://localhost:8000/api/members/" + event.target.value)
      .then((response) => {
        getClients();
      });
  };

  const handleUpdate = (editMember) => {
    console.log(editMember);
    axios
      .put("http://localhost:8000/api/members/" + editMember.id, editMember)
      .then((response) => {
        getClients();
      });
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className='bg-teal-300'>
      <div className="container mx-auto bg-gray-200 rounded-xl">
        <h1 className="text-3xl text-center font-bold underline border-solid border- 4 border-black">
          Dessayer Group
        </h1>
      </div>
      <br />
      <br />
      <br />
      <Add handleCreate={handleCreate} />
      <div className="md:container md:mx-auto bg-teal-700">
        {clients.map((member) => {
          return (
            <div className="grid grid-flow-col auto-cols-max">
              <div key={member.id}>
                <h4 className="text-red-900">Name: {member.name}</h4>
                <h5>Age: {member.age}</h5>
                <h6>Email: {member.email}</h6>
                <Edit handleUpdate={handleUpdate} person={member} />
                <button
                  class="bg-sky-500 hover:bg-sky-700"
                  onClick={handleDelete}
                  value={member.id}
                >
                  Delete Account
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
