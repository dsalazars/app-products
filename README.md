# Products App

Aplicación móvil desarrollada en React Native CLI que consume una API de productos, permite ver detalles y gestionar una lista de favoritos con persistencia local.

## 📋 Requisitos Previos

Para ejecutar este proyecto, asegúrate de tener configurado tu entorno de desarrollo para **React Native CLI**.

*   **Node.js**: Versión **20** o superior (Requerido).
*   **JDK**: Java Development Kit (Recomendado JDK 17).
*   **Android Studio**: Para desarrollo en Android (SDKs y Emulador).
*   **Xcode**: Para desarrollo en iOS (Solo macOS).
*   **CocoaPods**: Gestor de dependencias para iOS.

## 🚀 Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd productsApp
    ```

2.  **Instalar dependencias (NPM):**
    ```bash
    npm install
    ```

3.  **Instalar dependencias de iOS (Solo macOS):**
    ```bash
    cd ios
    bundle install # Instala dependencias de Ruby si es necesario
    bundle exec pod install
    cd ..
    ```

## ⚙️ Configuración de Variables de Entorno

El proyecto utiliza variables de entorno. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
API_URL=https://dummyjson.com/
FAVORITES_KEY=FAVORITES
```

> **Nota:** Si modificas el archivo `.env`, recuerda reiniciar el servidor Metro con `npm start -- --reset-cache` para que tome los cambios.

## 📱 Ejecutar la Aplicación

Para correr la aplicación necesitas dos terminales:

### 1. Iniciar Metro Bundler
Este es el servidor de desarrollo de JavaScript.

```bash
npm start
```

### 2. Compilar y Correr la App

**Para Android:**
Asegúrate de tener un emulador abierto o un dispositivo conectado por USB.
```bash
npm run android
```

**Para iOS (macOS):**
```bash
npm run ios
```

## 🧪 Testing

El proyecto cuenta con una suite de pruebas unitarias y de integración usando **Jest** y **React Native Testing Library**.

*   **Ejecutar todos los tests:**
    ```bash
    npm test
    ```

*   **Ejecutar tests en modo "Watch" (Desarrollo):**
    ```bash
    npm run test:watch
    ```

## 🛠 Tecnologías Principales
*   **React Native**: 0.83.0
*   **React**: 19.2.0
*   **Navegación**: React Navigation v7
*   **Estado**: Zustand
*   **HTTP**: Axios
*   **Persistencia**: Async Storage

## 📂 Estructura del Proyecto

El proyecto sigue los principios de **Clean Architecture** para asegurar escalabilidad y mantenibilidad:

*   `src/app`: Configuración de navegación y entrada de la app.
*   `src/data`: Implementación de repositorios, fuentes de datos (API, Storage) y adaptadores.
*   `src/domain`: Entidades, interfaces de repositorios y casos de uso (Lógica de negocio pura).
*   `src/presentation`: Componentes de UI, pantallas, hooks y gestión de estado.
*   `src/store`: Configuración global del estado (Zustand).

## 🧹 Calidad de Código

Para verificar errores de estilo y análisis estático del código:

```bash
npm run lint
```

## 🚑 Solución de Problemas Comunes

Si experimentas problemas con la caché de Metro Bundler o cambios que no se reflejan:

```bash
npm start -- --reset-cache
```
