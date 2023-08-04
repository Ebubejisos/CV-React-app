import { useState } from "react";
import uniqid from "uniqid";

const ExpForm = ({ data, setData }) => {
  const [postn, setPostn] = useState("");
  const [comp, setComp] = useState("");
  const [city, setCity] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  // const reset = () => {
  //   setPostn("");
  //   setCity("");
  //   setComp("");
  //   setFrom("");
  //   setTo("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postn === "") {
      return;
    }
    setData([
      ...data,
      {
        position: postn,
        company: comp,
        city: city,
        from: from,
        to: to,
        id: uniqid(),
      },
    ]);
    // reset();
  };

  return (
    <div>
      <form action="#" className="my-2 px-2 py-3" onSubmit={handleSubmit}>
        <div className="position">
          <label htmlFor="position" className="text-lg">
            Position:
          </label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="position"
            id="position"
            value={postn}
            onChange={(e) => setPostn(e.target.value)}
          />
        </div>
        <div className="company">
          <label htmlFor="company" className="text-lg">
            Company:
          </label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="company"
            id="company"
            value={comp}
            onChange={(e) => setComp(e.target.value)}
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

export default ExpForm;
