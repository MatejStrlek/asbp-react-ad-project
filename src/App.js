import React, { useState } from "react";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";
import './App.css';

function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
      const request = {
          ...loginRequest,
          account: accounts[0]
      };

      // Silently acquires an access token which is then attached to a request for Microsoft Graph data
      instance.acquireTokenSilent(request).then((response) => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
      }).catch((e) => {
          instance.acquireTokenPopup(request).then((response) => {
              callMsGraph(response.accessToken).then(response => setGraphData(response));
          });
      });
  }

  return (
      <>
      
          <h3 className="card-title"><center>Welcome, {name}</center></h3>
          <br />
          {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <Button 
              style={{
                fontWeight: 'bold',
                display: 'block',
                margin: 'auto'
              }}
              variant="secondary" onClick={RequestProfileData}><center>Request Profile Information</center></Button>
          }
      </>
  );
};

function App() {
  return (
      <PageLayout>
          <AuthenticatedTemplate>
              <ProfileContent />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
              <p><center><strong>You are not signed in! Please sign in.</strong></center></p>
          </UnauthenticatedTemplate>
      </PageLayout>
  );
}

export default App;