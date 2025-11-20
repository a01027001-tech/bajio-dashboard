import { useState } from 'react'
import bajioData from './data/bajioData.json'
import DashboardHeader from './components/DashboardHeader'
import EstadoOverview from './components/EstadoOverview'
import ActividadesList from './components/ActividadesList'
import ActividadDetail from './components/ActividadDetail'
import './App.css'

function App() {
  const [selectedEstado, setSelectedEstado] = useState('Aguascalientes')
  const [selectedActividad, setSelectedActividad] = useState(null)

  const estados = Object.keys(bajioData)
  const estadoData = bajioData[selectedEstado]

  return (
    <div className="app">
      <DashboardHeader />
      <div className="dashboard-container">
        <div className="sidebar">
          <h2>Estados</h2>
          <div className="estado-selector">
            {estados.map(estado => (
              <button
                key={estado}
                className={`estado-btn ${selectedEstado === estado ? 'active' : ''}`}
                onClick={() => {
                  setSelectedEstado(estado)
                  setSelectedActividad(null)
                }}
              >
                {estado}
              </button>
            ))}
          </div>
        </div>

        <div className="main-content">
          {!selectedActividad ? (
            <>
              <EstadoOverview estado={selectedEstado} data={estadoData} />
              <ActividadesList
                actividades={estadoData.actividades}
                onSelectActividad={setSelectedActividad}
              />
            </>
          ) : (
            <ActividadDetail
              actividad={selectedActividad}
              estado={selectedEstado}
              onBack={() => setSelectedActividad(null)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App

