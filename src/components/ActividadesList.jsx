function ActividadesList({ actividades, onSelectActividad }) {
  return (
    <div className="actividades-list">
      <h2>Actividades Económicas</h2>
      <div className="actividades-grid">
        {actividades.map(actividad => (
          <div
            key={actividad.rank}
            className="actividad-card"
            onClick={() => onSelectActividad(actividad)}
          >
            <div className="actividad-rank">#{actividad.rank}</div>
            <div className="actividad-content">
              <h3>{actividad.nombre}</h3>
              <div className="actividad-stats">
                {actividad.demanda_2024 && (
                  <div className="stat-item">
                    <span className="stat-label">2024:</span>
                    <span className="stat-value">{actividad.demanda_2024.toLocaleString()}</span>
                  </div>
                )}
                <div className="stat-item">
                  <span className="stat-label">2025:</span>
                  <span className="stat-value">{actividad.demanda_2025.toLocaleString()}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">2026:</span>
                  <span className="stat-value">{actividad.demanda_2026.toLocaleString()}</span>
                </div>
                <div className={`stat-item crecimiento ${actividad.crecimiento_pct >= 0 ? 'positive' : 'negative'}`}>
                  <span className="stat-label">Crecimiento:</span>
                  <span className="stat-value">
                    {actividad.crecimiento_pct >= 0 ? '+' : ''}{actividad.crecimiento_pct.toFixed(1)}%
                  </span>
                </div>
              </div>
              {actividad.impacto_camiones && (
                <div className="impacto-camiones">
                  <strong>Impacto en camiones:</strong> {actividad.impacto_camiones}
                </div>
              )}
              <div className="actividad-export">
                <div className="export-badge internacional">
                  Export Internacional: {actividad.export_internacional_pct}%
                </div>
                <div className="export-badge local">
                  Local/Regional: {actividad.export_local_pct}%
                </div>
              </div>
            </div>
            <div className="actividad-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActividadesList

