#!/bin/bash

# Script para subir el dashboard a GitHub
# Uso: ./subir-github.sh TU_USUARIO TU_REPOSITORIO

echo "🚀 Dashboard Bajío - Subir a GitHub"
echo "===================================="
echo ""

# Verificar que se proporcionaron los argumentos
if [ -z "$1" ] || [ -z "$2" ]; then
    echo "❌ Error: Necesitas proporcionar tu usuario y nombre del repositorio"
    echo ""
    echo "Uso: ./subir-github.sh TU_USUARIO NOMBRE_REPOSITORIO"
    echo ""
    echo "Ejemplo:"
    echo "  ./subir-github.sh juanperez bajio-dashboard"
    echo ""
    exit 1
fi

USUARIO=$1
REPOSITORIO=$2
URL="https://github.com/${USUARIO}/${REPOSITORIO}.git"

echo "📋 Configuración:"
echo "   Usuario: $USUARIO"
echo "   Repositorio: $REPOSITORIO"
echo "   URL: $URL"
echo ""
echo "⚠️  IMPORTANTE: Primero debes crear el repositorio en GitHub.com"
echo "   1. Ve a https://github.com/new"
echo "   2. Nombre: $REPOSITORIO"
echo "   3. Selecciona 'Public'"
echo "   4. NO marques 'Initialize with README'"
echo "   5. Click 'Create repository'"
echo ""
read -p "¿Ya creaste el repositorio en GitHub? (s/n): " respuesta

if [ "$respuesta" != "s" ] && [ "$respuesta" != "S" ]; then
    echo ""
    echo "❌ Por favor crea el repositorio primero y luego ejecuta este script de nuevo"
    exit 1
fi

echo ""
echo "🔄 Configurando Git..."
echo ""

# Verificar si ya existe el remote
if git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Ya existe un remote 'origin'. ¿Quieres reemplazarlo? (s/n)"
    read -p "   Respuesta: " reemplazar
    if [ "$reemplazar" = "s" ] || [ "$reemplazar" = "S" ]; then
        git remote remove origin
        echo "   ✅ Remote anterior eliminado"
    else
        echo "   ❌ Operación cancelada"
        exit 1
    fi
fi

# Configurar rama main
echo "📝 Configurando rama main..."
git branch -M main 2>/dev/null || echo "   (rama main ya configurada)"

# Agregar remote
echo "🔗 Conectando con GitHub..."
git remote add origin "$URL" 2>/dev/null || git remote set-url origin "$URL"
echo "   ✅ Remote configurado: $URL"

# Verificar que hay cambios para commitear
if [ -z "$(git status --porcelain)" ]; then
    echo ""
    echo "✅ Todos los archivos ya están commiteados"
else
    echo ""
    echo "📦 Agregando archivos..."
    git add .
    echo "   ✅ Archivos agregados"
    
    echo ""
    echo "💾 Creando commit..."
    git commit -m "Initial commit: Dashboard Bajío completo con 5 estados y datos 2024-2026"
    echo "   ✅ Commit creado"
fi

echo ""
echo "🚀 Subiendo a GitHub..."
echo "   (Puede pedirte tu usuario y contraseña/token de GitHub)"
echo ""

if git push -u origin main; then
    echo ""
    echo "✅ ¡ÉXITO! Tu código está en GitHub"
    echo ""
    echo "📋 Próximos pasos:"
    echo "   1. Ve a: https://github.com/$USUARIO/$REPOSITORIO"
    echo "   2. Settings → Pages"
    echo "   3. Source: 'Deploy from a branch'"
    echo "   4. Branch: 'main', Folder: '/ (root)'"
    echo "   5. Save"
    echo ""
    echo "🌐 Tu dashboard estará en:"
    echo "   https://$USUARIO.github.io/$REPOSITORIO/"
    echo ""
else
    echo ""
    echo "❌ Error al subir. Posibles causas:"
    echo "   - El repositorio no existe en GitHub"
    echo "   - Problemas de autenticación"
    echo "   - Verifica que creaste el repo en GitHub primero"
    echo ""
    echo "💡 Si necesitas autenticarte, GitHub ahora requiere un Personal Access Token"
    echo "   Crea uno en: https://github.com/settings/tokens"
    echo ""
fi

