# Weather Dashboard

Minimal React/Vite weather app using OpenWeatherMap.

## Run locally

```bash
npm install
cp .env.example .env
# Set VITE_WEATHER_API_KEY in .env
npm run dev
```

The browser receives this Vite variable, so the key is public. Use a backend proxy with server-side secrets for production. Build with `npm run build`.
