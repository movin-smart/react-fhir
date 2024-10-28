export const fhirClientConfig = {
    clientId: '7f70d5fd-b715-4ac6-b1db-1d5cc3182f2e', // Replace with your actual Client ID
    scope: 'patient/Patient.read patient/Observation.read launch online_access openid profile',
    authorizeUri: 'https://code-console.cerner.com/oauth2/authorize',
    tokenUri: 'https://code-console.cerner.com/oauth2/token',
    redirectUri: 'https://movin-smart.github.io/react-fhir/my-vite-app/callback',
  };