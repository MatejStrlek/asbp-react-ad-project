import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";


/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch(e => {
        console.log(e);
      });
    }
  }
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #00cc00;
      color: white;
    }

    .btn-flat:hover,
    .btn-flat:focus {
        background-color: green;
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
      <Button variant="flat" size="xxl" className="ml-auto btn-space" onClick={() => handleLogin("redirect")}><b>Sign in!</b></Button>
    </>
  );
}