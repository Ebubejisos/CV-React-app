import PropTypes from "prop-types";

const Preview = ({ name, title }) => {
  return (
    <section>
      <div className="heading bg-sky-500 pt-3 text-white">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p>{title}</p>
      </div>
      <div className="grid grid-cols-6 gap-0">
        {/*left grid display*/}
        <div className="col-span-4 bg-gray-100">left grid</div>

        {/*right grid display*/}
        <div className="col-span-2 bg-gray-200">right grid</div>
      </div>
    </section>
  );
};

Preview.propTypes = {
  states: PropTypes.func,
};

export default Preview;
