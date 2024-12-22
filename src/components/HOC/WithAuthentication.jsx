import React from "react";

const isAuthenticated = false;

export default function WithAuthentication(Component) {
    return function AuthenticatedComponent() {
        if (!isAuthenticated) {
            return <div>User is not authenticated</div>;
        }
        return <Component />;
    };
}
