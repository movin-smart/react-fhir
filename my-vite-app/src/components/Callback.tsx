// src/components/Callback.tsx
import * as React from 'react'; // Correct way to import React
import { useEffect } from 'react';
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