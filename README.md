# 🎬 Movie Manager - Aplicación de Películas y Reseñas

Aplicación desarrollada con **React + TypeScript** que permite gestionar películas, marcar favoritas y agregar reseñas.

## 📋 Características Implementadas

### 1. **Tipado Estricto con TypeScript**
- ✅ Interfaz `Movie` con propiedades tipadas
- ✅ Tipo unión discriminada `Review` (positive/negative)
- ✅ Funciones de utilidad: `formatMovie()` y `renderReview()`
- ✅ Sin uso de `any` en todo el código

### 2. **Hooks Personalizados**
- ✅ `useFetchMovies`: Obtiene datos de la API con manejo de estados (loading, error, data)
- ✅ `useReviews`: Gestiona reseñas positivas y negativas

### 3. **Componentes Genéricos y Reutilizables**
- ✅ `GenericList<T>`: Lista genérica con tipos parametrizados
- ✅ `Section`: Componente con children tipados
- ✅ `MovieCard`: Tarjeta de película con props tipadas
- ✅ `AlertBox`: Componente de alertas

### 4. **Gestión de Estado**
- ✅ `useState` para manejo de favoritos y reseñas
- ✅ `useMemo` para cálculo optimizado del promedio de ratings
- ✅ `useEffect` para peticiones HTTP

### 5. **Composición de Componentes**
- ✅ `MovieDashboard`: Componente principal que integra toda la funcionalidad
- ✅ Arquitectura modular y escalable
- ✅ Separación de responsabilidades

### 6. **Manejo de Errores**
- ✅ Try/catch en peticiones asíncronas
- ✅ Estados de carga y error
- ✅ Validaciones de datos

## 🎨 Diseño

- **Tema**: Azul y Negro
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Animaciones**: Transiciones suaves y efectos hover
- **UX**: Interfaz intuitiva y centrada

## 🚀 Tecnologías Utilizadas

- **React 18**
- **TypeScript**
- **Vite** (Build tool)
- **CSS3** (Gradientes, animaciones, flexbox, grid)
- **TVMaze API** (Fuente de datos)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── AlertBox.tsx          # Componente de alertas
│   ├── FavoriteMovies.tsx    # Gestión de favoritos
│   ├── GenericList.tsx       # Lista genérica tipada
│   ├── MovieCard.tsx         # Tarjeta de película
│   ├── MovieDashboard.tsx    # Componente principal
│   ├── MovieList.tsx         # Lista de películas
│   └── Section.tsx           # Sección con children
├── hooks/
│   ├── useFetchMovies.ts     # Hook para fetch de datos
│   └── useReviews.ts         # Hook de gestión de reseñas
├── types/
│   └── index.ts              # Interfaces y tipos
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## 🎯 Funcionalidades

### Gestión de Películas
- Visualización de películas desde la API
- Información detallada: título, géneros, rating
- Selección de películas para favoritos

### Películas Favoritas
- Agregar/eliminar películas favoritas
- Cálculo automático del promedio de ratings
- Visualización con formato personalizado

### Sistema de Reseñas
- Agregar reseñas positivas y negativas
- Visualización diferenciada por tipo
- Validación de entrada

## 🔧 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de producción
npm run preview
```

