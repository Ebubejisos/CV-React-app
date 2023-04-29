const Education = () => {
  return (
    <div className="container text-left bg-slate-100 my-5">
      <h3 className="text-xl font-semibold bg-amber-500 text-stone-100 p-2">
        Education
      </h3>
      <form action="#" className="my-2 px-2 py-3">
        <div className="university">
          <label htmlFor="universityName">University Name:</label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="universityName"
            id="universityName"
          />
        </div>
        <div className="city">
          <label htmlFor="city">City:</label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="city"
            id="city"
          />
        </div>
        <div className="degree">
          <label htmlFor="degreeAchieved">Degree:</label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="degreeAchieved"
            id="degreeAchieved"
          />
        </div>
        <div className="subject">
          <label htmlFor="subject">Subject:</label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="subject"
            id="subject"
          />
        </div>
        <div className="date-from">
          <label htmlFor="dateFrom">From:</label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="dateFrom"
            id="dateFrom"
          />
        </div>
        <div className="date-to">
          <label htmlFor="dateTo">To:</label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="dateTo"
            id="dateTo"
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
