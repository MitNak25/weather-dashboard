# 🌤️ Weather Dashboard

> A small, responsive React application for checking the current weather in any city using the OpenWeatherMap API.

![JavaScript](https://img.shields.io/badge/JavaScript-ESM-f7df1e?logo=javascript&logoColor=000)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=000)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=fff)
![License](https://img.shields.io/badge/license-see%20LICENSE-blue)

## ✨ Features

- Search weather by city name.
- Display current temperature and weather conditions.
- Metric units and a clean responsive interface.
- Loading and error states for missing keys, unknown cities, and API failures.
- URL encoding for city names and basic validation of API responses.
- Fast local development and production builds with Vite.

## 🧰 Tech stack

- React 18
- Vite 6
- Modern JavaScript modules
- OpenWeatherMap Current Weather API
- Plain CSS

## 🚀 Quick start

### Requirements

- Node.js 20 or newer
- npm
- An OpenWeatherMap API key

### Installation

```bash
git clone https://github.com/MitNak25/weather-dashboard.git
cd weather-dashboard
npm install
cp .env.example .env
```

Edit `.env` and set your key:

```env
VITE_WEATHER_API_KEY=your_openweathermap_key
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## 📦 Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Create the optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally. |

## 🔐 Security note

Vite exposes variables prefixed with `VITE_` to browser code. The weather API key is therefore public in the built application. Restrict the key by domain or usage in OpenWeatherMap, and use a backend proxy with server-side secrets if the application requires stronger protection.

Never commit `.env`; use `.env.example` as the configuration template.

## 🧪 Continuous integration

GitHub Actions runs on pushes and pull requests to `main` and verifies that dependencies install and the application builds successfully. See [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

## 📁 Project layout

```text
.
├── .github/workflows/ci.yml  # Build workflow
├── public/                   # Static assets, when present
├── src/main.jsx              # React entry point and weather search
├── src/style.css             # Application styles
├── .env.example              # Environment variable template
├── index.html                # HTML entry point
├── package.json              # Scripts and dependencies
└── vite.config.js            # Vite configuration
```

## 📄 License

See [LICENSE](LICENSE).
