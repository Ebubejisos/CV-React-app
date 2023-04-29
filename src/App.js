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

  return (
    <div className="App">
      <header>
        <h1 className="text-5xl text-center text-stone-300 font-bold ">
          CV CREATOR
        </h1>
      </header>
      <main className="main">
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
        />
        <Experience />
        <Education />
        <Preview name={firstName} title={title} />
      </main>
      <footer className="text-center">Copyright &#169; 2023 Gideon</footer>
    </div>
  );
}

export default App;
