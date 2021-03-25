import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName,profession, handleName, children }) => {
  handleName(fullName);
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "cyan",
        height: "600px",
      }}
    >
      <h1>{fullName}</h1>
      <h4>{profession}</h4>
      {children}
    </div>
  );
};

export default Profile;
Profile.defaultProps = {
  fullName: "inconnu",
  profession: "inconnu",
};
Profile.propTypes = {
  profession: PropTypes.string,
  fullName: PropTypes.string,
};
