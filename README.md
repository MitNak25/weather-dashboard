# Weather Dashboard

Minimal React/Vite weather app using OpenWeatherMap.

## Run locally

```bash
npm install
cp .env.example .env
# Set VITE_WEATHER_API_KEY in .env
npm run dev
```

The API key is exposed to the browser by design because Vite client variables are public. Use a backend proxy for production keys. Build with `npm run build`.
