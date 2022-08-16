export default function UserSnapshot({ user, edit }) {
  const { fName, lName, dob } = user;
  const { month, day, year, full: fullBday } = dob;

  return (
    <fieldset id="user-snapshot">
      <legend>User</legend>
      <p>{`${fName} ${lName}`}</p>
      <p>{fullBday}</p>
      <button onClick={edit}>Edit</button>
    </fieldset>
  );
}
