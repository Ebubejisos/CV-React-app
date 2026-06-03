import EduForm from "./EduForm";
import uniqid from "uniqid";

const Education = ({ data, setData }) => {
  function addEducation() {
    const educationData = {
      id: uniqid(),
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    };
    setData((prevData) => ({
      ...prevData,
      education: [...prevData.education, educationData],
    }));
  }
  return (
    <>
      <div className="container text-left bg-slate-100 my-5">
        <h3 className="text-xl font-semibold bg-amber-500 text-stone-100 p-2">
          Education
        </h3>
      </div>
      {data.map((edu) => (
        <EduForm key={edu.id} data={edu} setData={setData} />
      ))}
      <div className="pb-3">
        <button
          onClick={addEducation}
          className="block w-2/3 mx-auto text-center  rounded border-2 bg-gray-950 text-white hover:bg-gray-800 sm:w-full"
        >
          Add Education
        </button>
      </div>
    </>
  );
};

export default Education;
