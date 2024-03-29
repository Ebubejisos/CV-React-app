import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [eduData, setEduData] = useState([]);
  const [expData, setExpData] = useState([]);
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className="App">
      <header>
        <h1 className="text-5xl text-center text-stone-300 font-bold ">
          CV CREATOR
        </h1>
      </header>
      <main className="main">
        <div className="mx-auto bg-slate-100 md:max-w-2xl">
          <PersonalInfo
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            title={title}
            setTitle={setTitle}
            address={address}
            setAddress={setAddress}
            number={number}
            email={email}
            description={description}
            setEmail={setEmail}
            setNumber={setNumber}
            setDescription={setDescription}
            setImage={setImage}
            image={image}
          />
          <Experience data={expData} setData={setExpData} />
          <Education data={eduData} setData={setEduData} />
          {isPreview && (
            <Preview
              name={firstName}
              title={title}
              image={image}
              description={description}
              address={address}
              number={number}
              email={email}
              eduData={eduData}
              expData={expData}
            />
          )}
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
