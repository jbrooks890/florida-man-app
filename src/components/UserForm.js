
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
    <form
      id="user-form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <h3>Florida Man</h3>
      <div className="form-name">
        <label htmlFor="first-name">
          <p>First name</p>
          <input id="first-name" name="first-name" />
        </label>
        <label htmlFor="last-name">
          <p>Last name</p>
          <input id="last-name" name="last-name" />
        </label>
      </div>
      <div id="user-dob">
        <label>
          <p>Birthday</p>
          <div>
            <select
              id="birth-month"
              name="birth-month"
              onChange={(e) => setSelectedMonth(e.currentTarget.value)}
            >
              {_m.map((month, i) => (
                <option key={i} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <input
              id="birth-day"
              name="birth-day"
              type="number"
              min="1"
              max={months.get(selectedMonth)}
              defaultValue="1"
            />
            <select
              id="birth-year"
              name="birth-year"
              defaultValue={currYear - 18}
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
