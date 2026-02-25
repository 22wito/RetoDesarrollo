# Temporada F1 2025
El objetivo de este proyecto no es más que mostrar los resultados del mundial de pilotos de F1 en la temporada 2025.



## 🛠️ Instalación y Ejecución

### 📋 Requisitos Previos
Asegúrate de tener instalado en tu equipo:
* **Node.js** (Versión 20.6.0 o superior para soporte nativo de variables de entorno).
* **XAMPP** (Para el servidor MySQL y phpMyAdmin).

---

### 1. Clonar e Instalar Dependencias
Abre tu terminal, sitúate en la carpeta del proyecto y ejecuta:
```bash
npm install
```

### 2. Configurar Variables de Entorno
Crea un archivo llamado `.env` en la raíz del proyecto. Aquí configuraremos las credenciales de conexión a la base de datos (por defecto, XAMPP usa el usuario `root` sin contraseña) Aquí un ejemplo:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=f1_2025
DB_PORT=3306
```

### 3. Importar la Base de Datos
En la raíz de este proyecto encontrarás el archivo `database.sql` (o el nombre que le hayas puesto a tu archivo). Sigue estos pasos para montarla:
1. Abre el panel de control de **XAMPP** e inicia los módulos **Apache** y **MySQL**.
2. Entra en tu navegador a `http://localhost/phpmyadmin`.
3. Crea una nueva base de datos llamada `f1_2025` (y selecciona el cotejamiento `utf8mb4_spanish_ci` para no tener problemas con las tildes).
4. Selecciona la base de datos recién creada, ve a la pestaña superior **Importar**, selecciona el archivo `.sql` proporcionado en el proyecto y pulsa en **Importar** (o Continuar) al final de la página.

### 4. Arrancar el Servidor
Una vez la base de datos esté lista, vuelve a tu terminal y arranca el proyecto en modo desarrollo:
```bash
npm run dev
```

El servidor te indicará que está corriendo. Ya puedes acceder a la aplicación:



Endpoints:
- GET "/": Nos da la bienvenida y muestra la información principal de la API
- GET "/api/datos": En este endpoint se hará una consulta a la base de datos, mostrándonos el resultado en formato JSON




```text
api-f1/
├── 📁 node_modules/       # Dependencias instaladas por npm (ignorado en git)
├── 📁 public/             # Archivos estáticos accesibles públicamente
│   └── 📄 index.html      # Portada de bienvenida y documentación de la API
├── 📁 src/                # Código fuente del backend (TypeScript)
│   ├── 📄 db.ts           # Configuración del pool de conexión a MySQL
│   └── 📄 index.ts        # Servidor Express, middlewares y endpoints (rutas)
├── 📄 .env                # Variables de entorno (Credenciales de DB y puerto)
├── 📄 package.json        # Configuración de Node, dependencias y scripts
└── 📄 tsconfig.json       # Configuración estricta de TypeScript para ES Modules
```

