#!/bin/bash

echo "🔍 Verificando configuración del proyecto..."
echo ""

# Verificar Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✅ Node.js instalado: $NODE_VERSION"
else
    echo "❌ Node.js NO está instalado"
    echo "   Por favor instala Node.js desde https://nodejs.org/"
    exit 1
fi

# Verificar npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "✅ npm instalado: $NPM_VERSION"
else
    echo "❌ npm NO está instalado"
    exit 1
fi

# Verificar versión de Node.js (mínimo 18)
NODE_MAJOR=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_MAJOR" -ge 18 ]; then
    echo "✅ Versión de Node.js compatible (>= 18)"
else
    echo "⚠️  Advertencia: Se recomienda Node.js versión 18 o superior"
fi

echo ""
echo "📦 Verificando dependencias..."

if [ -d "node_modules" ]; then
    echo "✅ Dependencias instaladas"
else
    echo "⚠️  Dependencias no instaladas"
    echo "   Ejecuta: npm install"
fi

echo ""
echo "✨ Verificación completada!"

