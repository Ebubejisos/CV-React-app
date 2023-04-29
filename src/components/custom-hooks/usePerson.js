import { useState } from "react";

const usePerson = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  return {
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
  };
};

export default usePerson;
