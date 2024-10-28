import { useEffect, useState } from "react";
import { Client } from "fhirclient";

function App() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    Client.oauth2.ready()
      .then(client => client.request("Patient"))
      .then(setPatient)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>FHIR Patient Data</h1>
      {patient ? (
        <div>
          <p>Patient Name: {patient.name[0].text}</p>
          <p>Gender: {patient.gender}</p>
          <p>Birth Date: {patient.birthDate}</p>
        </div>
      ) : (
        <p>Loading patient data...</p>
      )}
    </div>
  );
}

export default App;
