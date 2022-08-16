export default function UserSnapshot({ fName, lName, dob }) {
  return (
    <div id="user-snapshot">
      <p>{`${fName} ${lName}`}</p>
      <p>{dob}</p>
      <button>Edit</button>
    </div>
  );
}
