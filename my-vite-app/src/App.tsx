import { useEffect, useState } from "react";
import fhirclient from "fhirclient";

// Define the type for FHIR Patient resource (a simplified version)
interface Patient {
  name?: { text: string }[];
  gender?: string;
  birthDate?: string;
}

function App() {
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    fhirclient.oauth2
      .ready()
      .then((client) =>
        client
          .request<Patient>("Patient")
          .then((patientData) => setPatient(patientData))
          .catch(console.error)
      )
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>FHIR Patient Data</h1>
      {patient ? (
        <div>
          <p>Patient Name: {patient.name?.[0]?.text || "N/A"}</p>
          <p>Gender: {patient.gender || "N/A"}</p>
          <p>Birth Date: {patient.birthDate || "N/A"}</p>
        </div>
      ) : (
        <p>Loading patient data...</p>
      )}
    </div>
  );
}

export default App;
