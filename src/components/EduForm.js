const EduForm = ({ data, setData }) => {
  const handleSetData = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu) =>
        edu.id === data.id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  function handleDelete(e) {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((edu) => edu.id !== data.id),
    }));
  }

  return (
    <form
      action="#"
      className="my-2 px-2 py-3"
      onSubmit={handleDelete}
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
          value={data.university}
          onChange={(e) => handleSetData("university", e.target.value)}
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
          value={data.degree}
          onChange={(e) => handleSetData("degree", e.target.value)}
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
          value={data.subject}
          onChange={(e) => handleSetData("subject", e.target.value)}
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
      </button>{" "}
    </form>
  );
};

export default EduForm;
