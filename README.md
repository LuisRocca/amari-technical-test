# 👤 Amari Technical Test - Users Management Application

Una aplicación web moderna construida con Angular 21 que gestiona un listado de usuarios con funcionalidades avanzadas de filtrado, búsqueda y visualización de detalles.

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Guía de Uso](#-guía-de-uso)
- [Scripts Disponibles](#-scripts-disponibles)
- [Arquitectura y Patrones](#-arquitectura-y-patrones)
- [Componentes Principales](#-componentes-principales)
- [Testing](#-testing)
- [Contribución](#-contribución)

---

## 📖 Descripción del Proyecto

**Amari Technical Test** es una aplicación de demostración técnica que implementa un sistema completo de gestión de usuarios. La aplicación permite visualizar un listado de usuarios con capacidades de filtrado, búsqueda avanzada y acceso a información detallada de cada usuario. Fue desarrollada como prueba técnica para demostrar habilidades en arquitectura Angular y best practices de desarrollo web.

### Objetivo

Proporcionar una interfaz intuitiva y responsiva para gestionar y explorar datos de usuarios, implementando patrones de desarrollo recomendados, manejo de errores robusto y una experiencia de usuario optimizada.

---

## ✨ Características Principales

- ✅ **Listado de Usuarios**: Visualización completa de todos los usuarios disponibles
- 🔍 **Búsqueda Avanzada**: Búsqueda en tiempo real con soporte para múltiples criterios
- 🔽 **Filtros Dinámicos**: Filtrado por diferentes campos y criterios personalizados
- 📄 **Detalles de Usuario**: Vista detallada con información completa de cada usuario
- 🎨 **Interfaz Responsiva**: Diseño adaptable que funciona en dispositivos móviles, tablets y desktop
- ⚡ **Carga Optimizada**: Skeletal loaders y loading states para mejorar la UX
- ❌ **Manejo de Errores**: Sistema robusto de manejo y visualización de errores
- 📱 **Navbar Adaptable**: Menú navegable con soporte para dispositivos móviles
- 🏠 **Página de Inicio**: Landing page con información introductoria
- ℹ️ **Página About**: Información sobre el proyecto y tecnologías utilizadas

---

## 🛠 Tecnologías Utilizadas

### Frontend Framework

- **Angular 21.0.0** - Framework principal
- **RxJS 7.8.0** - Manejo de operaciones asincrónicas y streams
- **TypeScript 5.9.2** - Lenguaje de programación tipado

### Herramientas de Desarrollo

- **Angular CLI 21.0.5** - Herramienta de línea de comandos
- **Vitest 4.0.8** - Framework de testing unitario
- **Prettier 2.x** - Formateador de código
- **SCSS** - Preprocesador CSS para estilos avanzados

### Dependencias Principales

- `@angular/common` - Servicios y directivas comunes
- `@angular/forms` - Manejo de formularios
- `@angular/platform-browser` - Plataforma web
- `@angular/router` - Sistema de enrutamiento

---

## 📁 Estructura del Proyecto

```
amari-technical-test/
├── src/
│   ├── app/
│   │   ├── core/                    # Módulo principal (servicios, guardias, interceptores)
│   │   │   ├── constants/           # Constantes de la aplicación
│   │   │   ├── guards/              # Guardias de rutas (auth-guard)
│   │   │   ├── interceptors/        # Interceptores HTTP
│   │   │   │   ├── http-error-interceptor.ts
│   │   │   │   └── loading-interceptor.ts
│   │   │   ├── models/              # Interfaces y modelos TypeScript
│   │   │   │   ├── api-response.model.ts
│   │   │   │   └── user.model.ts
│   │   │   └── services/            # Servicios centralizados
│   │   │       ├── user.ts          # Servicio de usuarios
│   │   │       └── error-handler.ts # Manejador de errores
│   │   │
│   │   ├── features/                # Módulos funcionales específicos
│   │   │   └── users/               # Funcionalidades de usuarios
│   │   │       └── components/
│   │   │           ├── user-search/      # Componente de búsqueda
│   │   │           ├── users-filters/    # Componente de filtros
│   │   │           └── users-list/       # Componente de listado
│   │   │
│   │   ├── layout/                  # Componentes de diseño
│   │   │   ├── components/
│   │   │   │   └── navbar/          # Barra de navegación
│   │   │   └── main-layout/         # Layout principal
│   │   │
│   │   ├── pages/                   # Componentes de páginas
│   │   │   ├── home/                # Página de inicio
│   │   │   ├── users/               # Página de listado de usuarios
│   │   │   ├── user-detail/         # Página de detalles del usuario
│   │   │   └── about/               # Página sobre el proyecto
│   │   │
│   │   ├── shared/                  # Componentes y utilidades compartidas
│   │   │   ├── components/
│   │   │   │   ├── error-message/   # Componente de mensajes de error
│   │   │   │   ├── loading/         # Componente de carga
│   │   │   │   ├── skeleton-loader/ # Componente de esqueleto de carga
│   │   │   │   └── user-card/       # Componente de tarjeta de usuario
│   │   │   ├── directives/          # Directivas reutilizables
│   │   │   ├── pipes/               # Pipes personalizados
│   │   │   │   └── full-name-pipe.ts # Pipe para nombres completos
│   │   │   └── utils/               # Funciones utilitarias
│   │   │
│   │   ├── app.routes.ts            # Definición de rutas principales
│   │   ├── app.config.ts            # Configuración de la aplicación
│   │   ├── app.component.ts         # Componente raíz
│   │   └── app.spec.ts              # Tests del componente raíz
│   │
│   ├── main.ts                      # Punto de entrada de la aplicación
│   ├── index.html                   # Archivo HTML principal
│   ├── styles.scss                  # Estilos globales
│   └── styles.css                   # Estilos globales (CSS)
│
├── public/                          # Archivos estáticos públicos
├── angular.json                     # Configuración de Angular CLI
├── tsconfig.json                    # Configuración de TypeScript
├── tsconfig.app.json                # Configuración de TypeScript para aplicación
├── tsconfig.spec.json               # Configuración de TypeScript para tests
├── package.json                     # Dependencias y scripts del proyecto
└── README.md                        # Este archivo
```

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.x o superior) - [Descargar](https://nodejs.org/)
- **npm** (versión 10.9.4 o superior) - Se instala con Node.js
- **Git** - [Descargar](https://git-scm.com/)
- Un editor de código como **Visual Studio Code** - [Descargar](https://code.visualstudio.com/)

### Verificar Instalación

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version
```

---

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/amari-technical-test.git
cd amari-technical-test
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias especificadas en `package.json`.

### 3. Verificar la Instalación

```bash
npm start
```

La aplicación debería estar disponible en `http://localhost:4200/`

---

## 📖 Guía de Uso

### Flujo Principal de la Aplicación

1. **Página de Inicio (`/home`)**: Bienvenida a la aplicación
2. **Listado de Usuarios (`/users`)**: Visualiza todos los usuarios disponibles
3. **Filtrar Usuarios**: Usa los filtros disponibles para refinar la búsqueda
4. **Buscar Usuarios**: Utiliza la barra de búsqueda para encontrar usuarios específicos
5. **Ver Detalles (`/user/:id`)**: Haz clic en un usuario para ver sus detalles completos
6. **Página About (`/about`)**: Información sobre el proyecto

### Componentes Principales de Usuario

- **User Card**: Tarjeta individual que muestra información resumida del usuario
- **User Search**: Barra de búsqueda para filtrar usuarios en tiempo real
- **Users Filters**: Panel de filtros avanzados
- **Users List**: Contenedor principal del listado

---

## ⚙️ Scripts Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start
# o
npm run ng serve
```

Abre [http://localhost:4200/](http://localhost:4200/) para ver la aplicación en el navegador. Los cambios se actualizan automáticamente.

### Build

```bash
# Compilar para producción
npm run build
```

Genera los archivos compilados optimizados en la carpeta `dist/`. Incluye:

- Minificación de código
- Optimización de assets
- Hashing de archivos para caché

### Watch

```bash
# Compilación en modo watch (desarrollo)
npm run watch
```

Compila automáticamente los cambios sin iniciar el servidor.

### Testing

```bash
# Ejecutar tests unitarios
npm test
```

Ejecuta el suite de tests con **Vitest**. Se ejecutan automáticamente cuando hay cambios en los archivos.

---

## 🏗 Arquitectura y Patrones

### Patrones Implementados

#### 1. **Arquitectura Modular**

- Separación clara entre módulos (core, features, shared, pages)
- Cada módulo tiene responsabilidades específicas y bien definidas

#### 2. **Componentes Standalone**

- Componentes independientes sin necesidad de NgModules
- Mejor tree-shaking y reducción del bundle size

#### 3. **Reactive Programming**

- Uso extensivo de RxJS para manejo de streams de datos
- Operadores para transformación y combinación de observables

#### 4. **Inyección de Dependencias**

- Servicios inyectables para lógica centralizada
- ProvidedIn: 'root' para servicios singleton

#### 5. **Guards y Interceptores**

- **Auth Guard**: Protección de rutas basada en autenticación
- **HTTP Error Interceptor**: Manejo centralizado de errores HTTP
- **Loading Interceptor**: Control de estados de carga

#### 6. **Pipes Personalizados**

- **FullNamePipe**: Formatea nombres completos de usuarios

#### 7. **Error Handling**

- Servicio centralizado `ErrorHandlerService`
- Componente compartido `ErrorMessage` para visualización

---

## 🧩 Componentes Principales

### Core Module

#### UserService (`core/services/user.ts`)

Servicio principal para gestionar operaciones relacionadas con usuarios.

```typescript
@Injectable({ providedIn: 'root' })
export class User {
  // Métodos para obtener usuarios, buscar, filtrar
}
```

#### ErrorHandlerService (`core/services/error-handler.ts`)

Servicio centralizado para manejo de errores.

```typescript
@Injectable({ providedIn: 'root' })
export class ErrorHandler {
  // Métodos para manejar y mostrar errores
}
```

#### AuthGuard (`core/guards/auth-guard.ts`)

Guardia para proteger rutas.

```typescript
export const authGuard: CanActivateFn = (route, state) => {
  // Lógica de autenticación
};
```

### Shared Components

#### UserCard (`shared/components/user-card/`)

Componente reutilizable que muestra información de un usuario en formato de tarjeta.

#### ErrorMessage (`shared/components/error-message/`)

Componente para mostrar mensajes de error consistentes.

#### Loading (`shared/components/loading/`)

Indicador de carga para operaciones asincrónicas.

#### SkeletonLoader (`shared/components/skeleton-loader/`)

Placeholder de esqueleto mientras se cargan los datos.

### Layout Components

#### MainLayout (`layout/main-layout/`)

Layout principal que envuelve todas las páginas con el navbar.

#### Navbar (`layout/components/navbar/`)

Barra de navegación con menú adaptable para móviles.

### Pages

- **Home** (`pages/home/`) - Página de bienvenida
- **Users** (`pages/users/`) - Listado principal de usuarios
- **UserDetail** (`pages/user-detail/`) - Detalles de usuario específico
- **About** (`pages/about/`) - Información del proyecto

---

## 🧪 Testing

### Estructura de Tests

Los tests están ubicados junto a los componentes y servicios con la extensión `.spec.ts`:

```
src/
├── app/
│   ├── core/
│   │   ├── guards/
│   │   │   └── auth-guard.spec.ts
│   │   ├── interceptors/
│   │   │   ├── http-error-interceptor.spec.ts
│   │   │   └── loading-interceptor.spec.ts
│   │   └── services/
│   │       ├── error-handler.spec.ts
│   │       └── user.spec.ts
│   └── shared/
│       └── components/
│           ├── error-message.spec.ts
│           ├── loading.spec.ts
│           ├── skeleton-loader.spec.ts
│           └── user-card.spec.ts
```

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Generar reporte de cobertura
npm test -- --coverage
```

### Framework de Testing

- **Vitest 4.0.8** - Framework ligero y rápido
- Configuración compatible con Angular

---

## 🎨 Estilos

### Estructura de Estilos

- **Global**: `src/styles.scss` y `src/styles.css`
- **Componentes**: Cada componente tiene su propio archivo `.scss` o `.css`
- **Preprocesador**: SCSS para variables, mixins y funcionalidades avanzadas

### Configuración de Prettier

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

---

## 🔄 Flujo de Datos

```
API → UserService (RxJS Observables)
                ↓
         Componentes (Subscriptions)
                ↓
      Actualización de Plantillas
```

### Estado Compartido

- Utiliza `BehaviorSubject` para estado compartido entre componentes
- Interceptores HTTP para operaciones transversales

---

## 🚨 Manejo de Errores

### Estrategia de Manejo

1. **HTTP Errors**: Capturados por `HttpErrorInterceptor`
2. **Application Errors**: Gestionados por `ErrorHandlerService`
3. **User Display**: `ErrorMessage` componente

### Componente de Error

```html
<app-error-message [error]="error$ | async" [visible]="isErrorVisible$ | async">
</app-error-message>
```

---

## 📊 Performance

### Optimizaciones Implementadas

- **Lazy Loading**: Carga bajo demanda de módulos (si aplica)
- **Change Detection**: Estrategia OnPush en componentes pesados
- **Skeletal Loaders**: Mejora la percepción de velocidad
- **Bundle Size Budgets**:
  - Bundle inicial: 500KB (warning) / 1MB (error)
  - Estilos por componente: 4KB (warning) / 8KB (error)

---

## 🔐 Seguridad

- **RxJS Unsubscribe**: Prevención de memory leaks
- **Route Guards**: Protección de rutas sensibles
- **Error Handling**: Prevención de exposición de información sensible

---

## 🌐 Enrutamiento

### Rutas Configuradas

```
/              → Redirecciona a /home
/home          → Página de inicio
/users         → Listado de usuarios
/user/:id      → Detalles de usuario específico
/about         → Información del proyecto
/**            → Fallback a /home
```

### Protección de Rutas

Algunas rutas pueden estar protegidas con `authGuard`.

---

## 📦 Build para Producción

```bash
npm run build
```

Outputs:

- Ubicación: `dist/amari-technical-test/`
- Archivos optimizados y minificados
- Ready para desplegar en servidores web

### Configuración de Producción

```json
{
  "production": {
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "500kB",
        "maximumError": "1MB"
      }
    ],
    "outputHashing": "all"
  }
}
```

---

## 🐛 Debugging

### Herramientas Recomendadas

1. **Angular DevTools** - Extensión de Chrome para debugging
   - [Descargar](https://chrome.google.com/webstore)

2. **Chrome DevTools** - DevTools nativos del navegador
   - F12 para abrir

3. **VS Code Debugger** - Debugger integrado para TypeScript

### Comandos de Debug

```bash
# Build con source maps
npm run build -- --source-map

# Serve con debugging habilitado
npm start
```

---

## 📚 Recursos Útiles

- [Documentación Angular 21](https://angular.io/docs)
- [RxJS Documentación](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentación](https://vitest.dev/)
- [SCSS Documentación](https://sass-lang.com/documentation)

---

## 🤝 Contribución

### Pasos para Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- Usa Prettier para formatear código
- Sigue los naming conventions de Angular
- Escribe tests unitarios para nuevas funcionalidades
- Comenta código complejo

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 👤 Autor

Desarrollado como prueba técnica para **Amaris Consultoría Tecnológica** por **Teléfonica**.

---

## 📝 Notas Finales

- Este proyecto sigue los principios de **Clean Code** y **Best Practices** en Angular
- La arquitectura es escalable y mantenible
- Los componentes están listos para ser extendidos con nuevas funcionalidades
- Se recomienda mantener la estructura modular para facilitar el mantenimiento futuro

---

**Última actualización**: Enero 2026

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
