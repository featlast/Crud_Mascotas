import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import AnimalItem from "./AnimalItem";

const Crud = () => {

  const url = `https://crudcrud.com/api/${process.env.REACT_APP_KEY}/unicorns/`

  const [data, setData] = useState([]);
  //console.log(data);
  const [animal, setAnimal] = React.useState({
    name: "",
    age: 0,
    colour: "",
  })


  /**Listar Data */
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /**Crear Post */
  const handlePost = () => {
    fetch(url, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify(animal),
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        //console.log(dataResponse)
        setData([...data, dataResponse])
      });
  };

  /**Actualizar */
  const handleUpdate = (id, name, age, colour) => {
    fetch(`${url}${id}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PUT",
      body: JSON.stringify({
        age: age,
        name: name,
        colour: colour,
      }),
    }).then((response) => {
      //console.log(response)
      const newData = data.map(animal => animal._id === id ? {_id: id, name, age, colour} : animal);
      setData(newData);
    }).catch(e => console.log(e))
  };

  /**Function Eliminar Data */
  const handleDelete = (id) => {
    fetch(`${url}${id}`, {
      method: "DELETE",
    }).then((response) => console.log(response));
    const newData = data.filter(animal => animal._id !== id);
      setData(newData);
    alert("deleted success!")
  };




  return (
    <div className=" animate-pulse px-10 py-5 rounded-xl border-double border-4 border-sky-500 text-center ">
      <h1 className="text-white uppercase ">Crud API</h1>
      <Modal
        animal={animal}
        setAnimal={setAnimal}
        handlePost={handlePost}
      />

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Nombre
            </th>
            <th scope="col" className="py-3 px-6">
              Edad (Años)
            </th>
            <th scope="col" className="py-3 px-6">
              Especie
            </th>
            <th scope="col" className="py-3 px-6">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt) => (
            <AnimalItem 
              key={dt._id} 
              {...dt} 
              handleDelete={handleDelete} 
              handleUpdate={handleUpdate} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
