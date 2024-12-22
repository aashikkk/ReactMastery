import React from "react";
import WithAuthentication from "./WithAuthentication";

const Profile = () => {
    return <div>Profile</div>;
};

const AuthenticatedProfile = WithAuthentication(Profile);
export default AuthenticatedProfile;
