/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const PersonalInfo = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  title,
  setTitle,
  address,
  setAddress,
  number,
  setNumber,
  email,
  setEmail,
  description,
  setDescription,
}) => {
  return (
    <div className="personal-info text-left bg-slate-100 my-5">
      <h3 className="text-xl font-bold bg-amber-500 text-stone-100 p-2">
        Personal Information
      </h3>
      <form action="#" className="my-2 px-2 py-3" id="p-info">
        <div className="first-name">
          <label htmlFor="firstName">First Name:</label>
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full rounded-sm"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="last-name">
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full rounded-sm"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="title">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            className="w-full rounded-sm"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="cv-photo flex space-x-9 py-4">
          <label
            htmlFor="photo"
            className="block w-1/3 rounded-sm bg-zinc-300 text-center py-1 cursor-pointer hover:bg-sky-500"
          >
            Choose Profile Photo
          </label>
          <input
            type="file"
            id="photo"
            className="opacity-0"
            name="photo"
            accept="image/*"
          />
        </div>
        <div className="address">
          <label htmlFor="address">Address:</label>
          <br />
          <input
            type="text"
            id="address"
            name="address"
            className="w-full rounded-sm"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        {/* Phone number input  */}
        <div className="phone-number">
          <label htmlFor="phoneNumber">Phone number:</label>
          <br />
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="w-full rounded-sm"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-sm n-outline"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="description">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            name="description"
            id="description"
            rows="2"
            className="w-full n-outline"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

// injected a prop type for our custom hook
PersonalInfo.propTypes = {
  states: PropTypes.func,
};

export default PersonalInfo;
