import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance } = useMsal();
    
    const handleLogout = (logoutType) => {
        if (logoutType === "redirect") {
           instance.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    }

    return (
        <>
        <style type="text/css">
        {`
    .btn-flat {
      background-color: red;
      color: white;
    }

    .btn-flat:hover {
        background-color: #C70039;
        color: white;
      }

    .btn-xxl {
      padding: 1rem 1rem;
      font-size: 1.2rem;
    }

    .btn-space {
        margin-left: 20px;
    }
    `}
      </style>
      <Button variant="flat" className="ml-auto btn-space" size="xxl" onClick={() => handleLogout("redirect")}><b>Odjava!</b></Button>
        </>
    );
}

