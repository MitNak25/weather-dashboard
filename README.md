<!DOCTYPE html>
</head>

<body>
<div class="container">

<h1>🌤️ Weather Dashboard</h1>

<p>
  <span class="badge green">React</span>
  <span class="badge blue">OpenWeatherMap API</span>
  <span class="badge orange">Responsive</span>
</p>

<h2>Descripción</h2>
<p>
  <strong>Weather Dashboard</strong> es una aplicación web que permite consultar el clima actual y el pronóstico de los próximos 5 días para cualquier ciudad del mundo.  
  Utiliza la <a href="https://openweathermap.org/api" target="_blank">API de OpenWeatherMap</a> y está construida con <code>React</code>, <code>Vite</code> y <code>Tailwind CSS</code>.
</p>

<h2>Características principales</h2>
<ul>
  <li>🔎 Búsqueda por nombre de ciudad o coordenadas.</li>
  <li>📅 Pronóstico de 5 días con iconos meteorológicos.</li>
  <li>🗺️ Mapa interactivo que muestra la ubicación buscada.</li>
  <li>⚡ Actualizaciones en tiempo real cada 10 minutos.</li>
  <li>📱 Diseño totalmente responsive (desktop, tablet y móvil).</li>
</ul>

<h2>Captura de pantalla</h2>
<p>
  <img src="https://raw.githubusercontent.com/MitNak25/weather-dashboard/main/assets/screenshot.png" alt="Captura de pantalla del Weather Dashboard">
</p>

<h2>Instalación</h2>
<pre><code># Clona el repositorio
git clone https://github.com/MitNak25/weather-dashboard.git
cd weather-dashboard

# Instala dependencias
npm install   # o yarn

# Configura la clave de API (crea un archivo .env)
echo "VITE_OWM_API_KEY" &gt;&gt; .env

# Inicia la aplicación en modo desarrollo
npm run dev   # o yarn dev
</code></pre>

<h2>Uso</h2>
<p>
  1️⃣ Abre <code>http://localhost:5173</code> en tu navegador.<br>
  2️⃣ Escribe el nombre de una ciudad y presiona <strong>Enter</strong>.<br>
  3️⃣ Explora el clima actual y el pronóstico de los próximos días.<br>
  4️⃣ Opcionalmente, arrastra el marcador del mapa para buscar por coordenadas.
</p>

<h2>Contribuir</h2>
<p>
  Las contribuciones son bienvenidas. Por favor, abre un <a href="https://github.com/MituNakan/weather-dashboard/issues" target="_blank">issue</a> antes de enviar un pull request para discutir cambios importantes.
</p>

<h2>Licencia</h2>
<p>
  Este proyecto está bajo la Licencia MIT. Ver el archivo <a href="https://github.com/MituNakan/weather-dashboard/blob/main/LICENSE" target="_blank">LICENSE</a> para más detalles.
</p>

<hr>
<p style="font-size:0.9rem;color:#777;">
  <em>Generado con ❤️ por <a href="https://github.com/MitNak25" target="_blank">MitNak25</a>.</em>
</p>

</div>
</body>
</html>
