import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="secondary" variant="dark">
                {isAuthenticated ? <SignOutButton /> : <SignInButton />}
            </Navbar>
            <h2><center>ASBP Project - Active Directory Authentication in React.js</center></h2>
            <br />
            <br />
            <br />
            <br />
            {props.children}
        </>
    );
};