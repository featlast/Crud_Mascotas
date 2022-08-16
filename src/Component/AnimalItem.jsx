import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

export default function AnimalItem({
  _id,
  name,
  age,
  colour,
  handleDelete,
  handleUpdate,
}) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [animal, setAnimal] = React.useState({
    name,
    age,
    colour,
  });

  const handleOnSave = () => {
    handleUpdate(_id, animal.name, animal.age, animal.colour);
    setIsEditing(false);
  }

  return (
    <React.Fragment>
    {isEditing ? (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
          <input className="py-4 px-6" placeholder="name" value={animal.name}  onChange={(event) => {setAnimal({...animal, name:event.currentTarget.value})}}/>
          </th>
          <td className="py-4 px-6">
            <input className="py-4 px-6" placeholder="age" value={animal.age} onChange={(event) => {setAnimal({...animal, age:event.currentTarget.value})}}/>
          </td>
          <td className="py-4 px-6">
            <input className="py-4 px-6" placeholder="specie" value={animal.colour} onChange={(event) => {setAnimal({...animal, colour:event.currentTarget.value})}}/>
          </td>
          <td className="py-4 px-6">
            <button className="py-4 px-6 bg-red-500 font-bold uppercase" onClick={handleOnSave}>save</button>
          </td>
      </tr>
      ) : (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {animal.name}
          </th>
          <td className="py-4 px-6">{animal.age}</td>
          <td className="py-4 px-6">{animal.colour}</td>
          <td className="py-4 px-6 space-x-4">
            {<FontAwesomeIcon icon={faPen} onClick={() => setIsEditing(true)} />}
            {
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(_id)}
              />
            }
            </td>
            </tr>
      )}
      </React.Fragment>
  );
}
