# 🚀 Guía para Publicar en GitHub Pages

## Pasos para Publicar tu Dashboard

### 1. Crear el Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Click en el botón **"+"** (arriba derecha) → **"New repository"**
3. Nombre del repositorio: `bajio-dashboard` (o el nombre que prefieras)
4. Descripción: "Dashboard interactivo de transporte y logística del Bajío"
5. Selecciona **Public** (para GitHub Pages gratuito)
6. **NO** marques "Initialize with README" (ya tenemos archivos)
7. Click en **"Create repository"**

### 2. Subir el Código a GitHub

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Dashboard Bajío completo"

# Cambiar a rama main
git branch -M main

# Conectar con tu repositorio (reemplaza TU_USUARIO y TU_REPOSITORIO)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# Subir el código
git push -u origin main
```

**Nota:** Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub y `TU_REPOSITORIO` con el nombre que le diste al repositorio.

### 3. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración) en el menú superior
3. En el menú lateral izquierdo, busca y click en **Pages**
4. En la sección **Source**:
   - Selecciona **Deploy from a branch**
   - Branch: selecciona **main**
   - Folder: selecciona **/ (root)**
5. Click en **Save**

### 4. Acceder a tu Dashboard

Después de unos minutos, tu dashboard estará disponible en:

```
https://TU_USUARIO.github.io/TU_REPOSITORIO/
```

Por ejemplo, si tu usuario es `juanperez` y el repositorio es `bajio-dashboard`:
```
https://juanperez.github.io/bajio-dashboard/
```

### 5. Actualizar el Dashboard

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Los cambios se reflejarán en GitHub Pages en unos minutos.

## ✅ Verificación

- ✅ El archivo `index.html` está en la raíz del proyecto
- ✅ El archivo `.nojekyll` está creado (necesario para GitHub Pages)
- ✅ Todos los datos están incluidos en el HTML
- ✅ No se requiere Node.js para ver el dashboard en GitHub Pages

## 🆘 Solución de Problemas

### El dashboard no se ve
- Verifica que el archivo se llame `index.html` (no `dashboard.html`)
- Asegúrate de que `.nojekyll` existe en la raíz
- Espera 2-3 minutos después de activar GitHub Pages
- Verifica la URL correcta en Settings → Pages

### Error al hacer push
- Verifica que tienes permisos en el repositorio
- Asegúrate de estar autenticado en GitHub (puede requerir token de acceso)

## 📝 Notas Importantes

- El dashboard funciona completamente sin Node.js en GitHub Pages
- Todos los datos están embebidos en el HTML
- Los gráficos usan Recharts desde CDN
- El dashboard es completamente responsive

