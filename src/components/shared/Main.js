import UserForm from "../UserForm";
import { useEffect, useState } from "react";
import FLMan from "../FLMan";
import { names } from "../../services/utility";
import Aztro from "../../services/constants/horoscopes";
import { Routes, Route } from "react-router-dom";
import About from "../About";
import Article from "../Article";

export default function Main() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    dob: {
      month: "",
      day: 1,
      year: 2004,
      full: "",
    },
    set: false,
  });
  const [flMan, setFLMan] = useState({
    fName: "",
    lName: "",
    title: "",
    headline: "",
    age: 0,
  });

  console.log(flMan);

  const editUser = () => setUser((prev) => ({ ...prev, set: false }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, birthMonth, birthDay, birthYear } =
      e.target.elements;
    setUser((prev) => ({
      ...prev,
      fName: firstName.value,
      lName: lastName.value,
      dob: {
        month: birthMonth.value,
        day: parseInt(birthDay.value),
        year: parseInt(birthYear.value),
        full: `${birthMonth.value} ${birthDay.value}, ${birthYear.value}`,
      },
      set: true,
    }));
  };

  const genFLMan = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const [first, last] = [user.fName[0], user.lName[0]]; //initials
    let randFirst = alphabet[Math.floor(Math.random() * alphabet.length)];
    let randLast = alphabet[Math.floor(Math.random() * alphabet.length)];
    let flName;

    switch (user.dob.month) {
      case "January":
        flName = getFLManName(first, first); //John Doe --> J... J...
        break;
      case "February":
        flName = getFLManName(first, last); //John Doe --> J... D...
        break;
      case "March":
        flName = getFLManName(last, last); //John Doe --> D... D...
        break;
      case "April":
        flName = getFLManName(last, first); //John Doe --> D... J...
        break;
      case "May":
        flName = getFLManName(randFirst, randLast); // $... %...
        break;
      case "June":
        flName = getFLManName(randFirst, last); // John Doe --> $... D...
        break;
      case "July":
        flName = getFLManName(first, randLast); // John Doe --> J... %...
        break;
      case "August":
        flName = getFLManName(randFirst, randFirst); // $... $...
        break;
      case "September":
        flName = getFLManName(randLast, randLast); // %... %...
        break;
      case "October":
        flName = getFLManName(randLast, randFirst); // %... $...
        break;
      case "November":
        flName = getFLManName(first, last);
        break;
      case "December":
        flName = getFLManName(last, first);
        break;
    }

    console.log(flName);

    setFLMan((prev) => ({
      ...prev,
      fName: flName[0] ? flName[0] : user.fName,
      lName: flName[1] ? flName[1] : user.lName,
    }));
  };

  const getFLManName = (first, last) => {
    const fNames = names.filter((name) => name[0] === first);
    const lNames = names.filter((name) => name[0] === last);
    const flFirst = fNames[Math.floor(Math.random() * fNames.length)];
    const flLast = fNames[Math.floor(Math.random() * lNames.length)];

    console.log(flFirst, flLast);
    // console.log({ first }, { last });
    return flLast != flFirst || (!flFirst ? !flLast : !flFirst)
      ? [flFirst, flLast]
      : getFLManName(first, last);
  };

  useEffect(() => {
    user.set && genFLMan();
  }, [user]);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            user.set ? (
              <FLMan user={user} char={flMan} editUser={editUser} />
            ) : (
              <UserForm user={user} onSubmit={(e) => handleSubmit(e)} />
            )
          }
        />

        <Route
          path="/article"
          element={<Article month={user.dob.month} day={user.dob.day} />}
        />

        <Route
          path="/article"
          element={<Article month={user.dob.month} day={user.dob.day} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}
