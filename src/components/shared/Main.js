import UserForm from "../UserForm";
import { useState } from "react";

export default function Main() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    age: 0,
    zodiac: {},
  });
  const [flMan, setFLMan] = useState({
    name: "",
    age: 0,
  });

  return (
    <main>
      <UserForm />
      
    </main>
  );
}
