import ExpForm from "./ExpForm";
import uniqid from "uniqid";

const Experience = ({ data, setData }) => {
  const addExperience = () => {
    const experienceData = {
      id: uniqid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };
    setData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, experienceData],
    }));
  };

  const handleClick = () => {
    addExperience();
  };

  return (
    <>
      <div className="container text-left bg-slate-100 my-5">
        <h3 className="text-xl font-semibold bg-amber-500 text-stone-100 p-2">
          Experience
        </h3>
      </div>
      {data.map((exp) => (
        <ExpForm key={exp.id} data={exp} setData={setData} />
      ))}
      <div>
        <button
          onClick={handleClick}
          className="block w-2/3 mx-auto text-center  rounded border-2 bg-gray-950 text-white hover:bg-gray-800 sm:w-full"
        >
          Add Experience
        </button>
      </div>
    </>
  );
};

export default Experience;
