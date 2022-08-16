import React from "react";

export default function Modal({ animal, setAnimal, handlePost }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-sky-500 text-white active:bg-sky-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ingresar Datos
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-center text-3xl font-semibold text-slate-600 ">
                    Ingresa Datos De Tu Mascota
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form >
                  <div className="relative p-6 flex-auto">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm  text-gray-900 dark:text-gray-700  font-bold"
                    >
                      Edad Tu Mascota
                    </label>
                    <input
                      name="age"
                      onChange={(event) =>
                        setAnimal({ ...animal, age: event.target.value })
                      }
                      type={"number"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="123"
                      required
                    />
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm  text-gray-900 dark:text-gray-700 font-bold mt-2"
                    >
                      Nombre De Tu Mascota
                    </label>
                    <input
                      name="name"
                      onChange={(event) =>
                        setAnimal({ ...animal, name: event.target.value })
                      }
                      type={"text"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Toby"
                      required
                    />
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm  text-gray-900 dark:text-gray-700 font-bold mt-2"
                    >
                      Especie
                    </label>
                    <input
                      name="colour"
                      onChange={(event) =>
                        setAnimal({ ...animal, colour: event.target.value })
                      }
                      type={"text"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Pitbull"
                      required
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        handlePost();
                        setShowModal(false);
                      }}
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
