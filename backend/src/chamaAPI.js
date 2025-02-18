// pages/api/spotify-token.js

export default async function handler(req, res) {
    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
    const client_secret = process.env.NEXT_PUBLIC_CLIENTE_SECRET;
  
    // Cria as credenciais em base64
    const credentials = `${client_id}:${client_secret}`;
    const base64Credentials = Buffer.from(credentials).toString('base64');
  
    const url = 'https://accounts.spotify.com/api/token';
    const headers = {
      "Authorization": `Basic ${base64Credentials}`,
      "Content-Type": "application/x-www-form-urlencoded"
    };
  
    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });
  
      if (response.ok) {
        const data = await response.json();
        res.status(200).json({ access_token: data.access_token });
      } else {
        const errorData = await response.json();
        res.status(response.status).json({ error: errorData });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  