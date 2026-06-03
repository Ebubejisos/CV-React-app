const ExpForm = ({ data, setData }) => {
  const handleSetData = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((exp) =>
        exp.id === data.id ? { ...exp, [field]: value } : exp
      ),
    }));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      experience: prevData.experience.filter((exp) => exp.id !== data.id),
    }));
  };

  return (
    <div>
      <form action="#" className="my-2 px-2 py-3" onSubmit={handleDelete}>
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
            value={data.position}
            onChange={(e) => handleSetData("position", e.target.value)}
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
            value={data.company}
            onChange={(e) => handleSetData("company", e.target.value)}
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
            value={data.city}
            onChange={(e) => handleSetData("city", e.target.value)}
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
            value={data.from}
            onChange={(e) => handleSetData("from", e.target.value)}
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
            value={data.to}
            onChange={(e) => handleSetData("to", e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="block w-2/3 mx-auto text-center  rounded border-2 bg-rose-500 text-white hover:bg-rose-400 sm:w-full transition-colors duration-300"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default ExpForm;
