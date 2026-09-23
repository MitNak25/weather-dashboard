import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const key = import.meta.env.VITE_WEATHER_API_KEY

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function search(event) {
    event.preventDefault()
    const query = city.trim()
    if (!query) return
    if (!key) { setError('Set VITE_WEATHER_API_KEY in .env before searching.'); return }
    setLoading(true); setError('')
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&units=metric&appid=${encodeURIComponent(key)}`)
      if (!response.ok) throw new Error(response.status === 404 ? 'City not found.' : 'Weather service unavailable.')
      const data = await response.json()
      if (!data?.main || !data?.weather?.[0]) throw new Error('Unexpected weather response.')
      setWeather(data)
    } catch (err) { setWeather(null); setError(err instanceof Error ? err.message : 'Unexpected error.') }
    finally { setLoading(false) }
  }

  return <main className="app"><h1>🌤️ Weather Dashboard</h1><form onSubmit={search}><input value={city} onChange={e => setCity(e.target.value)} placeholder="Enter a city" aria-label="City" /><button disabled={loading}>{loading ? 'Loading…' : 'Search'}</button></form>{error && <p className="error" role="alert">{error}</p>}{weather && <section className="card" aria-live="polite"><h2>{weather.name}, {weather.sys?.country}</h2><p className="temp">{Math.round(weather.main.temp)}°C</p><p>{weather.weather[0].description}</p><p>Feels like {Math.round(weather.main.feels_like)}°C · Humidity {weather.main.humidity}%</p></section>}</main>
}

createRoot(document.getElementById('root')).render(<App />)
