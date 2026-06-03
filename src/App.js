import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import Preview from "./components/Preview";
import { useState } from "react";

import uniqid from "uniqid";

function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      number: "",
      email: "",
      description: "",
      image: null,
    },
    education: [
      {
        id: uniqid(),
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    ],
    experience: [
      {
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
    ],
  });
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className="App">
      <header>
        <h1 className="text-5xl text-center text-stone-300 font-bold ">
          CV CREATOR
        </h1>
      </header>
      <main className="main">
        <div className="mx-auto bg-slate-100 md:max-w-5xl">
          <PersonalInfo data={cvData.personalInfo} setData={setCvData} />
          <Experience data={cvData.experience} setData={setCvData} />
          <Education data={cvData.education} setData={setCvData} />
          {isPreview && <Preview data={cvData} />}
        </div>
        <div className="button px-3 md:max-w-2xl mx-auto -mt-4">
          <button
            className="block w-2/3 mx-auto mt-6 text-center  rounded border-2 bg-teal-600 text-white hover:bg-teal-400 sm:w-full"
            onClick={() => setIsPreview(!isPreview)}
          >
            {isPreview ? "Close Preview" : "View Preview"}
          </button>
        </div>
      </main>
      <footer className="text-center mt-16">
        Copyright &#169; 2023 Gideon
      </footer>
    </div>
  );
}

export default App;
