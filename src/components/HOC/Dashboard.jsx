import React from "react";
import WithAuthentication from "./WithAuthentication";

function Dashboard() {
    return <div>Dashboard</div>;
}

const AuthenticatedDashboard = WithAuthentication(Dashboard);
export default AuthenticatedDashboard;
