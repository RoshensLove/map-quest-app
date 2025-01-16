// import React, {useState} from 'react'

// function Form() {

//     const defaultLocationValue = {
//         id: "",
//         name: "", 
//         discription: "", 
//         cordinates: "", 
//         date: "", 
//         autor: "", 
//         task: ""
//     }

//     const[location, setLocation]= useState(defaultLocationValue);
//     const[name, setName]= useState(defaultLocationValue);


   

//     const handleSubmit = (event) =>{
//         event.preventDefault();
//          console.log("Submit form");
//     }

    
//   return (
//     <>
//     <h1>Create Location</h1>
//     <form onSubmit={handleSubmit} >
//       <label htmlFor="id">ID:</label>
//       <input
//         type="text"
//         id="id"
//         value={location.id}
//         readOnly
//         style={{ marginLeft: "10px"}}
//       />

//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="id"
//         value={name.id}
//         readOnly
//         style={{ marginLeft: "10px" }}
//       />
//       <button type="submit" >Submit</button>

//   </form>
//   </>

  
   
//   );
// };


import React, { useState } from "react";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    discription: "",
    cordinates: "",
    date: "",
    autor: "",
    task: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data from Form:", formData);
    onSubmit(formData); // Передаем данные в родительский компонент
    setFormData({
      id: "",
      name: "",
      discription: "",
      cordinates: "",
      date: "",
      autor: "",
      task: "",
    }); // Очищаем форму после отправки
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label>ID:</label>
      <input type="number" id="id" value={formData.id} onChange={handleChange} />
      <label>Name:</label>
      <input type="text" id="name" value={formData.name} onChange={handleChange} />
      <label>Description:</label>
      <input type="text" id="discription" value={formData.discription} onChange={handleChange} />
      <label>Coordinates:</label>
      <input type="text" id="cordinates" value={formData.cordinates} onChange={handleChange} />
      <label>Date:</label>
      <input type="date" id="date" value={formData.date} onChange={handleChange} />
      <label>Author:</label>
      <input type="text" id="autor" value={formData.autor} onChange={handleChange} />
      <label>Task:</label>
      <input type="text" id="task" value={formData.task} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
