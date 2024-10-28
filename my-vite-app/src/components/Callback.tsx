// src/components/Callback.tsx
import React, { useEffect } from 'react';
import FHIR from 'fhirclient';

const Callback: React.FC = () => {
  useEffect(() => {
    FHIR.oauth2.ready()
      .then(client => {
        // You can now use the client to access FHIR resources
        console.log('FHIR client ready', client);
      })
      .catch(error => {
        console.error('Error during FHIR client setup', error);
      });
  }, []);

  return <div>Processing authorization...</div>;
};

export default Callback;