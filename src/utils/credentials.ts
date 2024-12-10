export const saveCredentials = async (email: string, password: string) => {
  try {
    // For local development
    if (window.location.hostname === 'localhost') {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      return (await response.json()).success;
    } 
    
    // For production/hosted environment
    // Store in localStorage as fallback when server is not available
    const timestamp = new Date().toISOString();
    const credentials = {
      timestamp,
      email,
      password
    };
    
    const existingData = localStorage.getItem('credentials') || '[]';
    const credentialsList = JSON.parse(existingData);
    credentialsList.push(credentials);
    localStorage.setItem('credentials', JSON.stringify(credentialsList));
    
    return true;
  } catch (error) {
    console.error('Error saving credentials:', error);
    return false;
  }
};
