import { names, animals } from "../services/utility";
import UserSnapshot from "./UserSnapshot";

export default function FLMan({ user, char, editUser }) {
  const { fName, lName } = char;
  return (
    <div>
      <UserSnapshot user={user} edit={editUser} />
      <h1>{`${fName} ${lName}`}</h1>
    </div>
  );
}
