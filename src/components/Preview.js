import PropTypes from "prop-types";
import emptyUser from "./empty_avatar.cedf234c.png";

const Preview = ({
  name,
  title,
  image,
  description,
  address,
  number,
  email,
}) => {
  return (
    <main>
      <div className="bg-sky-500 pt-3 text-white pl-2">
        <h1 className="text-4xl font-bold tracking-wider">{name}</h1>
        <p className="text-xl tracking-wide">{title}</p>
      </div>
      {/* Grid container */}
      <div className="sm:grid grid-cols-5 gap-0">
        {/*right grid display*/}
        <div className="col-span-2 bg-gray-200">
          {/* image container */}
          <div className="py-6">
            <img
              className="block mx-auto w-40 h-48"
              src={!image ? emptyUser : image}
              alt="profile"
            />
          </div>
          {/* Personal Details */}
          <section className="block w-60 mx-auto">
            <h2 className="text-xl font-bold border-b border-zinc-400 text-blue-900 tracking-wide">
              Personal Details
            </h2>
            <div className="mt-2">
              <h4 className="text-sm font-bold tracking-wide">Address</h4>
              <p>{address}</p>
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-bold tracking-wide">Phone Number</h4>
              <p>{number}</p>
            </div>
            <div className="mt-2">
              <h4 className="text-sm font-bold tracking-wide">Email</h4>
              <p className="break-all">{email}</p>
            </div>
          </section>
        </div>
        {/*LEFT GRID*/}
        <div className="row-start-1 col-start-1 col-end-4 pl-2 bg-gray-100">
          {/* Description block */}
          <section className="pt-4">
            <h3 className="text-lg font-bold text-blue-900 border-b border-zinc-400 tracking-wider">
              Description
            </h3>
            <p className="">{description}</p>
          </section>
          {/* Experiences block */}
          <section className="pt-4">
            <h3 className="text-lg font-bold text-blue-900 border-b border-zinc-400 tracking-wider">
              Experience
            </h3>
            <ul></ul>
          </section>
          {/* Education block */}
          <section className="pt-4">
            <h3 className="text-lg font-bold text-blue-900 border-b border-zinc-400 tracking-wider">
              Education
            </h3>
            <ul></ul>
          </section>
        </div>
      </div>
    </main>
  );
};

Preview.propTypes = {
  states: PropTypes.func,
};

export default Preview;
