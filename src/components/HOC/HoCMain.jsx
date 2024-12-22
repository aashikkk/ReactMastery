import React from "react";
import AuthenticatedProfile from "./Profile";
import AuthenticatedDashboard from "./Dashboard";

const HoCMain = () => {
    return (
        <div>
            Higher Order Component
            <AuthenticatedProfile />
            <AuthenticatedDashboard />
        </div>
    );
};

export default HoCMain;
