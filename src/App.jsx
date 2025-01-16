// import { useState } from 'react'
// import Form from './components/Form'
// import './App.css'
// import List from './components/List'

// function App() {
//   // const [count, setCount] = useState(10) 
//   const [message, setMessage] = useState('');


  //   // Form => App - child to parent *
//   //  App => List - parent to child

// const locations = []; // to add new location

//   const location = {
//     id:1324433,
//     name:"DTR-43",
//     discription:"Some dscrpt",
//     cordinates:[49.838, 24.032],
//     date: "21.01.2023",
//     autor: "Anton",
//     task: "Знайти дерево з позначкою"
//   }

//   return (
//     <>
//       <h1>map-quest-app</h1>
//       <Form   /> 
//       <List  {...location} />
//     </>
//   )
// }

// export default App


// import { useState } from 'react';
// import CreateLocation from './components/Form'; // Путь к компоненту

// function App() {
//   const [locationData, setLocationData] = useState(null);

//   // Коллбек, который обновит состояние в родительском компоненте
//   const handleLocationSubmit = (data) => {
//     setLocationData(data); // Обновляем состояние с данными локации
//   };

//   return (
//     <div>
//       <h1>map-quest-app</h1>
//       <CreateLocation onSubmit={handleLocationSubmit} /> {/* Передаем функцию в дочерний компонент */}
      
//       {locationData && (
//         <div>
//           <h2>Location Data</h2>
//           <pre>{JSON.stringify(locationData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [locationData, setLocationData] = useState([{name:232}, {name:34434}]); // storage locations

  console.log("довжина масиву:", locationData.length)
  
  // Обработчик для данных из формы
  const handleLocationSubmit = (data) => {
    console.log("Received data in App from Form:", data); // object
    setLocationData(data.push);  // to add to massive
    console.log("storage:", locationData  ); // [{name:232}, {name:34434}, newLocation]
  };

  return (
    <div style={{ marginLeft: "500px" }}>
      <h1>map-quest-app</h1>
      <Form onSubmit={handleLocationSubmit} />
     
      {locationData.length > 0 ? (
        <List {...locationData} />
      ) : (
        <p>No location data submitted yet.</p>
      )}
    </div>
  );
}

export default App;

