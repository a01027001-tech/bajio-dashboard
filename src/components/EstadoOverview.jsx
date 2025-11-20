import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function EstadoOverview({ estado, data }) {
  const chartData = [
    {
      año: '2024',
      demanda: data.total_2024 || 0
    },
    {
      año: '2025',
      demanda: data.total_2025
    },
    {
      año: '2026',
      demanda: data.total_2026
    }
  ]

  const actividadesChartData = data.actividades
    .sort((a, b) => b.demanda_2026 - a.demanda_2026)
    .map(act => ({
      nombre: act.nombre.length > 30 ? act.nombre.substring(0, 30) + '...' : act.nombre,
      demanda_2024: act.demanda_2024 || 0,
      demanda_2025: act.demanda_2025,
      demanda_2026: act.demanda_2026
    }))

  return (
    <div className="estado-overview">
      <div className="overview-header">
        <h2>{estado}</h2>
        <div className="stats-grid">
          {data.total_2024 && (
            <div className="stat-card">
              <div className="stat-label">Total 2024</div>
              <div className="stat-value">{data.total_2024.toLocaleString()}</div>
              <div className="stat-unit">{data.unidad === 'miles_toneladas' ? 'miles ton' : ''}</div>
            </div>
          )}
          <div className="stat-card">
            <div className="stat-label">Total 2025</div>
            <div className="stat-value">{data.total_2025.toLocaleString()}</div>
            <div className="stat-unit">{data.unidad === 'miles_toneladas' ? 'miles ton' : ''}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total 2026</div>
            <div className="stat-value">{data.total_2026.toLocaleString()}</div>
            <div className="stat-unit">{data.unidad === 'miles_toneladas' ? 'miles ton' : ''}</div>
          </div>
          <div className={`stat-card ${data.variacion_pct >= 0 ? 'positive' : 'negative'}`}>
            <div className="stat-label">Variación 2025-2026</div>
            <div className="stat-value">
              {data.variacion_pct >= 0 ? '+' : ''}{data.variacion_pct.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h3>Evolución Total</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="año" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="demanda" fill="#3b82f6" name="Demanda" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Top 5 Actividades 2026</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={actividadesChartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="nombre" type="category" width={200} />
              <Tooltip />
              <Legend />
              <Bar dataKey="demanda_2024" fill="#cbd5e1" name="2024" />
              <Bar dataKey="demanda_2025" fill="#94a3b8" name="2025" />
              <Bar dataKey="demanda_2026" fill="#3b82f6" name="2026" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default EstadoOverview

