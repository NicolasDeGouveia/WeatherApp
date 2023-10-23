import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const city = req.query.city;
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    try {
       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
}







