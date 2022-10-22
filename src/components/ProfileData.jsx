import React from "react";

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {
    return (
        <div id="profile-div">
            <p><center><strong>First Name: </strong> {props.graphData.givenName}</center></p>
            <p><center><strong>Last Name: </strong> {props.graphData.surname}</center></p>
            <p><center><strong>Email: </strong> {props.graphData.userPrincipalName}</center></p>
            <p><center><strong>ID: </strong> {props.graphData.id}</center></p>
        </div>
    );
};