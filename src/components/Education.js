import { useState } from "react";
import uniqid from "uniqid";

const Education = ({ data, setData }) => {
  const [uniName, setUniName] = useState("");
  const [city, setCity] = useState("");
  const [deg, setDeg] = useState("");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const reset = () => {
    setUniName("");
    setCity("");
    setDeg("");
    setSubject("");
    setFrom("");
    setTo("");
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (deg === "") {
      return;
    }
    setData([
      ...data,
      {
        university: uniName,
        city: city,
        degree: deg,
        subject: subject,
        from: from,
        to: to,
        id: uniqid(),
      },
    ]);
    reset();
  }

  return (
    <div className="container text-left bg-slate-100 my-5">
      <h3 className="text-xl font-semibold bg-amber-500 text-stone-100 p-2">
        Education
      </h3>
      <form
        action="#"
        className="my-2 px-2 py-3"
        onSubmit={handleSubmit}
        id="form"
      >
        <div className="university">
          <label htmlFor="universityName" className="text-lg">
            University Name:
          </label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="universityName"
            id="universityName"
            value={uniName}
            onChange={(e) => setUniName(e.target.value)}
          />
        </div>
        <div className="city">
          <label htmlFor="city" className="text-lg">
            City:
          </label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="degree">
          <label htmlFor="degreeAchieved" className="text-lg">
            Degree:
          </label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="degreeAchieved"
            id="degreeAchieved"
            value={deg}
            onChange={(e) => setDeg(e.target.value)}
          />
        </div>
        <div className="subject">
          <label htmlFor="subject" className="text-lg">
            Subject:
          </label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="date-from">
          <label htmlFor="dateFrom" className="text-lg">
            From:
          </label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="dateFrom"
            id="dateFrom"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="date-to">
          <label htmlFor="dateTo" className="text-lg">
            To:
          </label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="dateTo"
            id="dateTo"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <button className="bg-green-400 mt-4 px-3 rounded hover:bg-green-300">
          Save
        </button>
      </form>
    </div>
  );
};

export default Education;
