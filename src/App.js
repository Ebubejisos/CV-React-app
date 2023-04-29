import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import Preview from "./components/Preview";
import usePerson from "./components/custom-hooks/usePerson";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="text-5xl text-center text-stone-300 font-bold ">
          CV CREATOR
        </h1>
      </header>
      <main className="main">
        <PersonalInfo states={usePerson} />
        <Experience />
        <Education />
        <Preview states={usePerson} />
      </main>
      <footer className="text-center">Copyright &#169; 2023 Gideon</footer>
    </div>
  );
}

export default App;
