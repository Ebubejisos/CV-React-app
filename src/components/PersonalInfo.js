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
  image,
  setImage,
}) => {
  return (
    <div className="personal-info text-left my-5">
      <h3 className="text-xl font-bold bg-amber-500 text-stone-100 p-2">
        Personal Information
      </h3>
      <form action="#" className="my-2 px-2 py-3" id="p-info">
        <div className="first-name">
          <label className="text-lg" htmlFor="firstName">
            First Name:
          </label>
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
          <label className="text-lg" htmlFor="lastName">
            Last Name:
          </label>
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
          <label className="text-lg" htmlFor="title">
            Title:
          </label>
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
        {/* Image picker input */}
        <div className="cv-photo flex space-x-9 py-4">
          <label
            htmlFor="photo"
            className={
              !image
                ? "bg-zinc-300 block w-full rounded-sm text-center py-1 cursor-pointer hover:bg-sky-500 sm:w-1/3"
                : "bg-green-300 block w-full rounded-sm text-center py-1 cursor-pointer hover:bg-sky-500 sm:w-1/3"
            }
          >
            {!image ? "Choose Profile Photo" : "Change Photo"}
          </label>
          <input
            type="file"
            id="photo"
            className="opacity-0"
            name="photo"
            accept="image/*"
            onChange={(e) => {
              const files = e.target.files;
              for (const file of files) {
                const img = URL.createObjectURL(file);
                setImage(img);
              }
            }}
          />
        </div>
        {!image && (
          <div className="-mt-4 text-red-500 text-sm font-semibold">
            *No image selected
          </div>
        )}
        <div className="address">
          <label htmlFor="address" className="text-lg">
            Address:
          </label>
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
          <label htmlFor="phoneNumber" className="text-lg">
            Phone number:
          </label>
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
          <label htmlFor="email" className="text-lg">
            Email:
          </label>
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
          <label htmlFor="description" className="text-lg">
            Description:
          </label>
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
