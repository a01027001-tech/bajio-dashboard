# Guía de Instalación

## Requisitos Previos

Este proyecto requiere **Node.js** (versión 18 o superior) y **npm**.

### Instalar Node.js

#### macOS (usando Homebrew)
```bash
brew install node
```

#### macOS (descarga directa)
1. Visita [nodejs.org](https://nodejs.org/)
2. Descarga la versión LTS
3. Ejecuta el instalador

#### Verificar instalación
```bash
node --version
npm --version
```

## Instalación del Proyecto

Una vez que tengas Node.js instalado:

```bash
# 1. Navega al directorio del proyecto
cd Dashboard

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

El dashboard estará disponible en `http://localhost:5173`

## Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción
- `npm run preview` - Previsualiza la versión de producción

## Solución de Problemas

### Error: "npm: command not found"
- Asegúrate de que Node.js esté instalado correctamente
- Reinicia tu terminal después de instalar Node.js
- Verifica que Node.js esté en tu PATH

### Error al instalar dependencias
- Asegúrate de tener conexión a internet
- Intenta eliminar `node_modules` y `package-lock.json` y vuelve a ejecutar `npm install`
- Verifica que estés usando Node.js versión 18 o superior

