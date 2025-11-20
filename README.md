# Dashboard Bajío - Transporte y Logística

Dashboard interactivo para visualizar y analizar la demanda de transporte en la región del Bajío (Aguascalientes y Guanajuato) por actividad económica.

## 🚀 Características

- **Visualización de datos por estado**: Aguascalientes y Guanajuato
- **Análisis de actividades económicas**: Top 5 actividades por estado
- **Detalles de exportación**: Desglose de exportaciones internacionales vs locales/regionales
- **Gráficos interactivos**: Visualizaciones con Recharts
- **Diseño responsive**: Optimizado para desktop, tablet y móvil
- **Interfaz moderna**: UI con gradientes y efectos visuales

## 📊 Datos Incluidos

- **5 Estados del Bajío**: Aguascalientes, Guanajuato, Zacatecas, San Luis Potosí, Querétaro
- **Datos en toneladas**: 2024, 2025 y proyección 2026
- Variación porcentual por estado
- Desglose por actividad económica (Top 5 por estado)
- Distribución exportación internacional vs local/regional
- Destinos detallados de exportación
- Empresas principales por actividad
- **Impacto en demanda de camiones** por actividad económica

## 🛠️ Tecnologías

- **React 18**: Framework frontend
- **Vite**: Build tool y dev server
- **Recharts**: Librería de visualización de datos
- **CSS3**: Estilos modernos con gradientes y animaciones

## 📦 Instalación

### Requisitos Previos
- **Node.js** versión 18 o superior ([Descargar](https://nodejs.org/))
- **npm** (incluido con Node.js)

### Pasos de Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd Dashboard
```

2. Verifica tu configuración (opcional):
```bash
./check-setup.sh
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

> 💡 **Nota**: Si Node.js no está instalado, consulta `INSTALL.md` para instrucciones detalladas.

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📁 Estructura del Proyecto

```
Dashboard/
├── src/
│   ├── components/
│   │   ├── DashboardHeader.jsx
│   │   ├── EstadoOverview.jsx
│   │   ├── ActividadesList.jsx
│   │   └── ActividadDetail.jsx
│   ├── data/
│   │   └── bajioData.json
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Uso

1. **Seleccionar Estado**: Usa el panel lateral para cambiar entre los 5 estados del Bajío
2. **Ver Overview**: Observa las estadísticas generales y gráficos de evolución (2024-2026)
3. **Explorar Actividades**: Haz clic en cualquier actividad para ver detalles completos
4. **Analizar Exportaciones**: Revisa el desglose de destinos internacionales y locales
5. **Impacto en Camiones**: Consulta el impacto específico de cada actividad en la demanda de transporte

## 📈 Visualizaciones

- Gráficos de barras para evolución temporal
- Gráficos de barras horizontales para comparación de actividades
- Gráficos de pie para distribución export/local
- Tablas detalladas de destinos

## 🌐 Deployment en GitHub Pages

### Opción 1: Deployment Automático (Recomendado)

El dashboard está listo para GitHub Pages. Solo necesitas:

1. **Inicializar Git y subir a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: Dashboard Bajío"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

2. **Activar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Click en **Settings** → **Pages**
   - En **Source**, selecciona **Deploy from a branch**
   - Selecciona **main** branch y carpeta **/ (root)**
   - Click **Save**

3. **Tu dashboard estará disponible en:**
   `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

### Opción 2: Usando gh-pages (Alternativa)

Si prefieres usar el workflow automático:

1. Instala `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Agrega al `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Despliega:
```bash
npm run deploy
```

### Vercel / Netlify

Simplemente conecta tu repositorio de GitHub y elige el directorio raíz como carpeta de build.

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

Creado para análisis de transporte y logística en la región del Bajío.

---

**Nota**: Los datos mostrados son para fines de análisis y visualización.

