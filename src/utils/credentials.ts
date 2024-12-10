export const saveCredentials = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error saving credentials:', error);
    return false;
  }
};