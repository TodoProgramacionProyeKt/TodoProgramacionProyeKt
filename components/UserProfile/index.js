import "./style.css";
import Avatar from "../Avatar";
import formatEmail from "../../helpers/formatEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EditUserForm from "../EditUserForm";
import { Link } from "react-router-dom";

const UserProfile = ({ id, name, avatar, email }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className="user_profile">
      {!isEditable ? (
        <>
          <Avatar name={name} avatar={avatar} />
          <p className="user_email">Email: {email}</p>
          <p className="user_name">Nombre: {name || formatEmail(email)}</p>
          <FontAwesomeIcon
            icon={faPencilAlt}
            onClick={() => {
              setIsEditable(true);
            }}
          />
          <Link to="/editPassword">Cambiar contraseña</Link>
        </>
      ) : (
        <>
          <EditUserForm
            userId={id}
            userAvatar={avatar}
            oldEmail={email}
            oldName={name}
          />
        </>
      )}
    </div>
  );
};

export default UserProfile;
