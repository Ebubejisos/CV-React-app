import { useState } from "react";
import EduForm from "./EduForm";

const Education = ({ data, setData }) => {
  const [eduForm, setEduForm] = useState(false);
  const [id, setId] = useState(null);
  function handleClick() {
    setEduForm(true);
  }
  function handleDelete() {
    setEduForm(false);
    // setData([data.filter((el) => el.id != id)]);
  }
  return (
    <>
      <div className="container text-left bg-slate-100 my-5">
        <h3 className="text-xl font-semibold bg-amber-500 text-stone-100 p-2">
          Education
        </h3>
      </div>
      <EduForm data={data} setData={setData} id={id} setId={setId} />
      {eduForm && (
        <EduForm data={data} setData={setData} id={id} setId={setId} />
      )}
      {eduForm && (
        <button
          onClick={handleDelete}
          className="block w-2/3 mx-auto text-center  rounded border-2 bg-rose-500 text-white hover:bg-rose-400 sm:w-full"
        >
          Delete
        </button>
      )}
      <div className="pb-3">
        <button
          onClick={handleClick}
          className="block w-2/3 mx-auto text-center  rounded border-2 bg-gray-950 text-white hover:bg-gray-800 sm:w-full"
        >
          Add Education
        </button>
      </div>
    </>
  );
};

export default Education;
