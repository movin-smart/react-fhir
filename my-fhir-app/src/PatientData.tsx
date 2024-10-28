import React, { useState, useEffect } from 'react';
import FHIR from 'fhirclient';
import { fhirClientConfig } from './fhirClientConfig';

interface Patient {
  name: {
    text: string;
  }[];
  gender: string;
  birthDate?: string;
}

function PatientData() {
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const initializeFHIR = async () => {
      FHIR.oauth2.init(fhirClientConfig);
      try {
        await FHIR.oauth2.ready();
        const client = fhirClient.patient();
        const patientData = await client.read();
        setPatient(patientData);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    initializeFHIR();
  }, []);

  return (
    <div>
      {patient ? (
        <div>
          <h2>Patient Information</h2>
          <p>Name: {patient.name[0].text}</p>
          <p>Gender: {patient.gender}</p>
          {patient.birthDate && <p>Birth Date: {patient.birthDate}</p>}
        </div>
      ) : (
        <p>Loading patient data...</p>
      )}
    </div>
  );
}

export default PatientData;