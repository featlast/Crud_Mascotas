import React,{ useState,useEffect } from 'react'
import Modal from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPen } from '@fortawesome/free-solid-svg-icons'



const Crud = () => {
  const url = `https://crudcrud.com/api/4063c62c9e9a4020bcad898d3642f385/unicorns`
  const [data, setData] = useState([])

  const [edad, setEdad] = useState(Number())
  const [name, setName] = useState('')
  const [especie, setEspecie] = useState('')


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  /**Crear Post */
  const peticionPost = () =>{
    fetch('https://crudcrud.com/api/4063c62c9e9a4020bcad898d3642f385/unicorns', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    age: '3',
    name: 'Pily',
    colour: 'Criollo'
  })
})
.then(response => response.json())
.then(data => console.log(data))
  }

/**Actualizar */
fetch(
  'https://crudcrud.com/api/4063c62c9e9a4020bcad898d3642f385/unicorns', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'PUT',
    body: JSON.stringify({
      age: '31',
      name: 'PruebaActualizar',
      colour: 'Criollo'
    })
  })
  .then(response => console.log(response))

  /**Eliminar */
  fetch(
    'https://crudcrud.com/api/4063c62c9e9a4020bcad898d3642f385/unicorns', {
      method: 'DELETE'
    })
    .then(response => console.log(response))

/**Generar ID Aleatorio */
  const generarId = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString().substring(2)
    return random + fecha

}
  
  return (
<div className='bg-orange-400 text-center relative p-12 flex-auto'>
        <h1 className='text-white uppercase '>Crud API</h1>
  <Modal
  setEdad={setEdad}
  setName={setName}
  setEspecie={setEspecie}
  peticionPost={peticionPost}

  />
 
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            
              <tr >
                <th scope="col" className="py-3 px-6">
                    Nombre
                </th>
                <th scope="col" className="py-3 px-6">
                    Edad
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
        {data.map(dt => (
            <tr key={generarId()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {dt.name}
                </th>
                <td className="py-4 px-6">
                    {dt.age}
                </td>
                <td className="py-4 px-6">
                    {dt.colour}
                </td>
                <td className="py-4 px-6 space-x-4">
                    {<FontAwesomeIcon icon={faTrash} />}
                      { <FontAwesomeIcon icon={faPen}/>}
                </td>
            </tr>
            ))}
        </tbody>
    </table>
      </div>
  )
}

export default Crud
