import { useState } from "react";
import { months } from "../services/utility";

export default function UserForm({ onSubmit }) {
  const _m = [...months.keys()];
  const [selectedMonth, setSelectedMonth] = useState(_m[0]);
  const currYear = new Date().getFullYear();

  //   console.log(currYear);

  const popYears = () => {
    const arr = [];
    for (let i = currYear - 100; i <= currYear; i++) {
      arr.push(
        <option key={i - 100} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  };

  return (
    <form id="user-form" onSubmit={(e) => onSubmit(e)}>
      <h1>Info</h1>
      <div className="form-name">
        <label htmlFor="firstName">
          <p>First</p>
          <input id="firstName" name="firstName" required />
        </label>
        <label htmlFor="lastName">
          <p>Last</p>
          <input id="lastName" name="lastName" required />
        </label>
      </div>
      <div id="user-dob">
        <label>
          <p>Birthday</p>
          <div>
            <select
              id="birthMonth"
              name="birthMonth"
              onChange={(e) => setSelectedMonth(e.currentTarget.value)}
              required
            >
              {_m.map((month, i) => (
                <option key={i} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <input
              id="birthDay"
              name="birthDay"
              type="number"
              min="1"
              max={months.get(selectedMonth)}
              defaultValue="1"
              required
            />
            <select
              id="birthYear"
              name="birthYear"
              defaultValue={currYear - 18}
              required
            >
              {popYears()}
            </select>
          </div>
        </label>
      </div>
      <button type="submit">Generate</button>
    </form>
  );
}
