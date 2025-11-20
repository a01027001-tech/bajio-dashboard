# 🚀 Instrucciones Súper Simples

## Opción 1: Usar el Script Automático (Más Fácil) ⭐

### Paso 1: Crear el Repositorio en GitHub
1. Ve a: https://github.com/new
2. **Repository name**: `bajio-dashboard` (o el nombre que quieras)
3. **Description**: "Dashboard interactivo de transporte y logística del Bajío"
4. Selecciona **Public** ✅
5. **NO** marques "Add a README file" ❌
6. Click en **"Create repository"** (botón verde)

### Paso 2: Ejecutar el Script
Abre tu terminal y ejecuta:

```bash
cd /Users/fernandomurrieta/Desktop/Dashboard
./subir-github.sh TU_USUARIO bajio-dashboard
```

**Ejemplo** (si tu usuario es `juanperez`):
```bash
./subir-github.sh juanperez bajio-dashboard
```

El script te guiará paso a paso.

### Paso 3: Activar GitHub Pages
1. Ve a tu repositorio: `https://github.com/TU_USUARIO/bajio-dashboard`
2. Click en **Settings** (arriba)
3. Click en **Pages** (menú lateral izquierdo)
4. En **Source**:
   - Selecciona **"Deploy from a branch"**
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### Paso 4: ¡Listo! 🎉
Tu dashboard estará en:
```
https://TU_USUARIO.github.io/bajio-dashboard/
```

---

## Opción 2: Comandos Manuales

Si prefieres hacerlo manualmente:

### 1. Crear Repositorio en GitHub
- Ve a https://github.com/new
- Crea el repositorio (igual que en Opción 1)

### 2. Ejecutar estos comandos:

```bash
cd /Users/fernandomurrieta/Desktop/Dashboard

# Conectar con GitHub (reemplaza TU_USUARIO y bajio-dashboard)
git branch -M main
git remote add origin https://github.com/TU_USUARIO/bajio-dashboard.git
git push -u origin main
```

### 3. Activar GitHub Pages
- Settings → Pages → Deploy from branch → main → Save

---

## 🔐 Autenticación en GitHub

Si GitHub te pide autenticación:

### Opción A: Personal Access Token (Recomendado)
1. Ve a: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Nombre: "Dashboard Bajío"
4. Selecciona: **repo** (todos los permisos de repo)
5. Click **"Generate token"**
6. **Copia el token** (solo se muestra una vez)
7. Cuando Git pida contraseña, usa el token en lugar de tu contraseña

### Opción B: GitHub CLI
```bash
# Instalar GitHub CLI (si no lo tienes)
brew install gh

# Autenticarte
gh auth login
```

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo hacer el repositorio privado?**
R: Sí, pero GitHub Pages en repos privados requiere GitHub Pro (pago). Para privado, mejor usa Netlify o Vercel.

**P: ¿Cuánto tiempo tarda en aparecer?**
R: 1-2 minutos después de activar Pages.

**P: ¿Puedo cambiar el nombre después?**
R: Sí, pero tendrás que actualizar la URL.

**P: ¿Es gratis?**
R: Sí, completamente gratis para repos públicos.

---

## 🆘 Problemas Comunes

**Error: "repository not found"**
- Verifica que creaste el repositorio en GitHub primero
- Verifica que el nombre del repositorio es correcto

**Error: "authentication failed"**
- Usa un Personal Access Token en lugar de contraseña
- Ver instrucciones de autenticación arriba

**El dashboard no se ve**
- Espera 2-3 minutos después de activar Pages
- Verifica que el archivo se llama `index.html` (no `dashboard.html`)
- Verifica que `.nojekyll` existe en la raíz

---

## ✅ Checklist

Antes de empezar, verifica:
- [ ] Tienes cuenta en GitHub
- [ ] El archivo `index.html` existe
- [ ] El archivo `.nojekyll` existe
- [ ] Git está inicializado (ya está hecho ✅)

