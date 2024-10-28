// src/components/Authorize.tsx
import React, { useEffect } from 'react';
import FHIR from 'fhirclient';

const Authorize: React.FC = () => {
  useEffect(() => {
    FHIR.oauth2.authorize({
      client_id: '<your-client-id>',
      scope: 'patient/Patient.read patient/Observation.read launch online_access openid profile',
      redirectUri: 'https://movin-smart.github.io/react-fhir/my-vite-app/callback'
    });
  }, []);

  return <div>Redirecting to FHIR authorization...</div>;
};

export default Authorize;