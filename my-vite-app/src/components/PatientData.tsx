// src/components/PatientData.tsx
import * as React from 'react'; 
import { useEffect } from 'react';
import { useState } from 'react';
import FHIR from 'fhirclient';

const PatientData: React.FC = () => {
  const [patient, setPatient] = useState<any>(null);

  useEffect(() => {
    FHIR.oauth2.ready().then(client => {
      client.request('Patient').then(setPatient);
    });
  }, []);

  if (!patient) {
    return <div>Loading patient data...</div>;
  }

  return (
    <div>
      <h1>Patient Data</h1>
      <p>Name: {patient.name[0].text}</p>
      <p>Gender: {patient.gender}</p>
      <p>Birth Date: {patient.birthDate}</p>
    </div>
  );
};

export default PatientData;