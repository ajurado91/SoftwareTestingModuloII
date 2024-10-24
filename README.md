# Módulo 2 - Software Testing

## Descripción
Aplicación de login desarrollada con React + TypeScript + Vite, enfocada en accesibilidad web y testing.

## Características
- Formulario de login con validaciones
- Página de inicio simple
- Implementación completa de ARIA
- Diseño responsivo con Tailwind CSS
- Alto contraste para mejor accesibilidad

## Requisitos Previos
- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clonar el repositorio:
   `git clone <url-del-repositorio>`

2. Instalar dependencias:
   `npm install`

## Comandos Disponibles

### Iniciar en modo desarrollo
`npm run dev`

La aplicación estará disponible en: http://localhost:5173

### Construir para producción
`npm run build`

### Previsualizar la versión de producción
`npm run preview`

## Estructura del Proyecto

src/
├── assets/
│ └── UpeaPosgrado.png
├── components/
│ ├── HomePage.tsx
│ └── LoginPage.tsx
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts

## Tecnologías Utilizadas
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (iconos)

## Testing y Accesibilidad
- Implementación de ARIA labels
- Alto contraste para mejor legibilidad
- Validación de formularios
- Mensajes de error accesibles
- Navegación por teclado optimizada