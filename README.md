# SimpleNotes

SimpleNotes is a full-stack web application for managing personal notes. It is built using Django Rest Framework (DRF) for the backend and React for the frontend.

## Features

- User authentication with JWT (JSON Web Tokens).
- Create, view, and delete personal notes.
- Secure API endpoints with user-specific data access.
- Responsive and user-friendly frontend interface.
- Backend and frontend are decoupled for scalability.

## Backend Setup

1. Install dependencies:
```sh
pdm install
```
or
```sh
pip install -r requirements.txt
```

2. Create a `.env` file in the `src/backend/` directory based on `.env.sample`:

```
DB_HOST="your_neon_db_host"
DB_PORT="your_neon_db_port"
DB_USER="your_neon_db_user"
DB_PASSWORD="your_neon_db_password"
DB_NAME="your_neon_db_name"
```

> **Note**: This project uses [Neon](https://neon.tech/) as the PostgreSQL database service. Please ensure you have a Neon account and use the credentials provided by Neon for the above environment variables.

3. Run the migrations to set up the database schema:

```sh
pdm run python src/backend/manage.py migrate
```

4. Run development server:
```sh
pdm run python src/backend/manage.py runserver
```

### Frontend Setup

1. Navigate to the src/frontend/ directory:

```sh
cd src/frontend
```

2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

API Endpoints
----------------

* User Registration: `POST /api/register/`
* Login: `POST /api/token/`
* Refresh Token: `POST /api/token/refresh/`
* Get Notes: `GET /api/notes/`
* Create Note: `POST /api/notes/`
* Delete Note: `DELETE /api/notes/delete/<id>`

### Environment Variables
The backend uses the following environment variables:

- `DB_HOST`: Neon database host
- `DB_PORT`: Neon database port
- `DB_USER`: Neon database username
- `DB_PASSWORD`: Neon database password
- `DB_NAME`: Neon database name

The frontend uses the following environment variable:

* `VITE_API_URL`: Base URL for the backend API.

### LICENSE
This project is licensed under the MIT License.
