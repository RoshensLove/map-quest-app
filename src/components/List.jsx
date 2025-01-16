// import React from 'react'


// function List({ name, discription, cordinates, date, autor, task }) {

//   console.log(name, discription, cordinates, date, autor,   );
  
//   return (
//     <div>
//       <h1>List locations</h1>
//         <ul>
//             <li>name:{name}, discription={discription}, cordinates={cordinates},  date={date}, autor={autor}, task={task} </li>
//             <li>location 2</li>
//             <li>location 3</li>
//             <li>location 4</li>
//         </ul>
//     </div>
//   )
// }
// // {name: "DTR-43", discription, location, date, autor }
// export default List


import React from "react";

function List({ id, name, discription, cordinates, date, autor, task }) {
  console.log("Received props in List:", { id, name, discription, cordinates, date, autor, task });

  // Проверяем наличие всех пропсов
  if (!id && !name && !discription && !cordinates && !date && !autor && !task) {
    return <p>No data to display.</p>;
  }

  return (
    <div>
      <h1>List of Locations</h1>
      <ul>
        <li><strong>ID:</strong> {id}</li>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Description:</strong> {discription}</li>
        <li><strong>Coordinates:</strong> {cordinates}</li>
        <li><strong>Date:</strong> {date}</li>
        <li><strong>Author:</strong> {autor}</li>
        <li><strong>Task:</strong> {task}</li>
      </ul>
    </div>
  );
}

export default List;
