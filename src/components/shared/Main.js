import UserForm from "../UserForm";
import { useState } from "react";
import FLMan from "../FLMan";

export default function Main() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    dob: "",
    zodiac: {},
    set: false,
  });
  const [flMan, setFLMan] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, birthMonth, birthDay, birthYear } =
      e.target.elements;
    setUser((prev) => ({
      ...prev,
      fName: firstName.value,
      lName: lastName.value,
      dob: `${birthMonth.value} ${birthDay.value}, ${birthYear.value}`,
      set: true,
    }));
  };

  return (
    <main>
      {!user.set && <UserForm onSubmit={(e) => handleSubmit(e)} />}
      {user.set && <FLMan />}
    </main>
  );
}
