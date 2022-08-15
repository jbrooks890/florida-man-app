import { useState } from "react";
import { months } from "../services/utility";

export default function UserForm({ onSubmit }) {
  const _m = [...months.keys()];
  const [selectedMonth, setSelectedMonth] = useState(_m[0]);
  const currYear = new Date().getFullYear();

  console.log(currYear);

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
    <form id="user-form">
      <h3>Florida Man</h3>
      <div className="form-name">
        <label htmlFor="firstName">
          <p>First name</p>
          <input id="firstName" />
        </label>
        <label htmlFor="lastName">
          <p>Last name</p>
          <input id="lastName" />
        </label>
      </div>
      <div id="user-dob">
        <label>
          <p>Birthday</p>
          <div>
            <select onChange={(e) => setSelectedMonth(e.currentTarget.value)}>
              {_m.map((month, i) => (
                <option key={i} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <input type="number" min="1" max={months.get(selectedMonth)} />
            <select name="year" defaultValue={currYear}>
              {popYears()}
            </select>
          </div>
        </label>
      </div>
      <button type="submit">Generate</button>
    </form>
  );
}
