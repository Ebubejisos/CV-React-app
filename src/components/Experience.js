const Experience = () => {
  return (
    <div className="container text-left bg-slate-100 my-5">
      <h3 className="text-xl font-semibold bg-amber-500 text-stone-100 p-2">
        Experience
      </h3>
      <form action="#" className="my-2 px-2 py-3">
        <div className="position">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="position"
            id="position"
          />
        </div>
        <div className="company">
          <label htmlFor="company">Company:</label>
          <br />
          <input
            type="text"
            className="w-full rounded-sm"
            name="company"
            id="company"
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

export default Experience;
