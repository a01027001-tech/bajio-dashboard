# 🔐 Cómo Autenticarte en GitHub

## Opción 1: Personal Access Token (Recomendado) ⭐

### Paso 1: Crear el Token
1. Ve a: https://github.com/settings/tokens
2. Click en **"Generate new token"** → **"Generate new token (classic)"**
3. **Note**: "Dashboard Bajío"
4. **Expiration**: Elige cuánto tiempo quieres que dure (90 días es bueno)
5. **Select scopes**: Marca **repo** (esto incluye todos los permisos de repositorio)
6. Click en **"Generate token"** (abajo)
7. **⚠️ IMPORTANTE**: Copia el token inmediatamente (solo se muestra una vez)
   - Se verá algo como: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Paso 2: Usar el Token
Cuando ejecutes `git push`, te pedirá:
- **Username**: Tu usuario de GitHub (a01027001-tech)
- **Password**: Pega el TOKEN (NO tu contraseña de GitHub)

### Paso 3: Ejecutar Push
```bash
git push -u origin main
```

---

## Opción 2: GitHub CLI (Más Fácil)

### Instalar GitHub CLI
```bash
brew install gh
```

### Autenticarte
```bash
gh auth login
```

Sigue las instrucciones en pantalla. Te pedirá:
1. GitHub.com
2. HTTPS
3. Autenticar vía web browser (más fácil)
4. Click en el botón que aparece
5. Autorizar en el navegador

### Luego hacer push
```bash
git push -u origin main
```

---

## Opción 3: Configurar Credenciales en Git

Puedes guardar tus credenciales para no tener que ingresarlas cada vez:

```bash
# Configurar tu usuario
git config --global user.name "a01027001-tech"
git config --global user.email "tu-email@ejemplo.com"

# Guardar credenciales (macOS)
git config --global credential.helper osxkeychain
```

Luego cuando hagas push, ingresas el token una vez y se guarda.

---

## 🚀 Comando Rápido

Una vez que tengas el token, simplemente ejecuta:

```bash
git push -u origin main
```

Cuando pida:
- **Username**: `a01027001-tech`
- **Password**: Pega tu token (no tu contraseña)

---

## ❓ ¿Por qué un Token?

GitHub ya no acepta contraseñas normales por seguridad. Los tokens son más seguros y específicos para cada uso.

---

## ✅ Después del Push

Una vez que el push sea exitoso, verás algo como:
```
Enumerating objects: 23, done.
Counting objects: 100% (23/23), done.
...
To https://github.com/a01027001-tech/bajio-dashboard.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

¡Listo! Tu código estará en GitHub.

