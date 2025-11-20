import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']

function ActividadDetail({ actividad, estado, onBack }) {
  const exportData = [
    { name: 'Export Internacional', value: actividad.export_internacional_pct },
    { name: 'Local/Regional', value: actividad.export_local_pct }
  ]

  const internacionalDestinos = actividad.detalle_export.internacional.destinos.map(d => ({
    name: d.destino,
    value: d.pct
  }))

  const localDestinos = actividad.detalle_export.local_regional.destinos.map(d => ({
    name: d.destino,
    value: d.pct
  }))

  const demandaData = [
    ...(actividad.demanda_2024 ? [{ año: '2024', demanda: actividad.demanda_2024 }] : []),
    { año: '2025', demanda: actividad.demanda_2025 },
    { año: '2026', demanda: actividad.demanda_2026 }
  ]

  return (
    <div className="actividad-detail">
      <button className="back-button" onClick={onBack}>
        ← Volver a {estado}
      </button>

      <div className="detail-header">
        <h2>{actividad.nombre}</h2>
        <div className="detail-stats">
          {actividad.demanda_2024 && (
            <div className="detail-stat">
              <span className="label">Demanda 2024:</span>
              <span className="value">{actividad.demanda_2024.toLocaleString()}</span>
            </div>
          )}
          <div className="detail-stat">
            <span className="label">Demanda 2025:</span>
            <span className="value">{actividad.demanda_2025.toLocaleString()}</span>
          </div>
          <div className="detail-stat">
            <span className="label">Demanda 2026:</span>
            <span className="value">{actividad.demanda_2026.toLocaleString()}</span>
          </div>
          <div className={`detail-stat ${actividad.crecimiento_pct >= 0 ? 'positive' : 'negative'}`}>
            <span className="label">Crecimiento:</span>
            <span className="value">
              {actividad.crecimiento_pct >= 0 ? '+' : ''}{actividad.crecimiento_pct.toFixed(1)}%
            </span>
          </div>
        </div>
        {actividad.impacto_camiones && (
          <div className="impacto-camiones-box">
            <h4>🚛 Impacto en Demanda de Camiones</h4>
            <p>{actividad.impacto_camiones}</p>
          </div>
        )}
      </div>

      <div className="detail-charts">
        <div className="chart-section">
          <h3>Evolución de Demanda</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={demandaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="año" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="demanda" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-section">
          <h3>Distribución Export vs Local</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={exportData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {exportData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="detail-sections">
        <div className="detail-section">
          <h3>Export Internacional ({actividad.export_internacional_pct}%)</h3>
          <div className="destinos-list">
            {actividad.detalle_export.internacional.destinos.map((destino, idx) => (
              <div key={idx} className="destino-item">
                <div className="destino-header">
                  <span className="destino-name">{destino.destino}</span>
                  <span className="destino-pct">{destino.pct}%</span>
                </div>
                <p className="destino-detalle">{destino.detalle}</p>
              </div>
            ))}
          </div>
          <div className="chart-mini">
            <h4>Distribución por Destino</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={internacionalDestinos} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="detail-section">
          <h3>Local/Regional ({actividad.export_local_pct}%)</h3>
          <div className="destinos-list">
            {actividad.detalle_export.local_regional.destinos.map((destino, idx) => (
              <div key={idx} className="destino-item">
                <div className="destino-header">
                  <span className="destino-name">{destino.destino}</span>
                  <span className="destino-pct">{destino.pct}%</span>
                </div>
                <p className="destino-detalle">{destino.detalle}</p>
              </div>
            ))}
          </div>
          <div className="chart-mini">
            <h4>Distribución por Destino</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={localDestinos} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip />
                <Bar dataKey="value" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="empresas-section">
        <h3>Empresas Principales</h3>
        <div className="empresas-list">
          {actividad.empresas.map((empresa, idx) => (
            <span key={idx} className="empresa-badge">{empresa}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActividadDetail

