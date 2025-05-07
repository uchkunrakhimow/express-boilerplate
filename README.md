# express-boilerplate

A customizable Express.js boilerplate with TypeScript, Prisma ORM, Zod validation, JWT authentication, Swagger API documentation, and Docker support — designed for building scalable and maintainable RESTful APIs in production.

---

## 📦 Tech Stack

- **Node.js** v22 (LTS)
- **Express.js** v5+
- **TypeScript** v5+
- **Prisma** (PostgreSQL support)
- **Zod** (for request validation)
- **JWT** (Authentication)
- **Swagger / OpenAPI** (API docs)
- **ESLint + Prettier** (Code formatting and linting)
- **Docker-ready** (via external setup)

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── config/         # Environment and app config
│   ├── helpers/        # Shared helper functions
│   ├── middlewares/    # Global middlewares
│   ├── modules/        # Feature-based modules (auth, user, etc.)
│   │   ├── auth/
│   │   └── user/
│   ├── app.ts          # Express app initialization
│   └── routes.ts       # All routes registration
├── index.ts            # App entrypoint
prisma/
├── schema.prisma       # Prisma schema
docs/
├── \*.yaml             # Swagger YAML specs
.env.example            # Environment variable template
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/uchkunrakhimow/express-boilerplate.git
cd express-boilerplate
```

### 2. Setup environment variables

```bash
cp .env.example .env
```

Update values inside `.env` as needed.

### 3. Install dependencies

```bash
npm install
```

### 4. Generate Prisma client

```bash
npm prisma:generate
```

### 5. Run development server

```bash
npm start:dev
```

---

## 🧪 Available Scripts

| Script                  | Description                             |
| ----------------------- | --------------------------------------- |
| `start`                 | Run production server                   |
| `start:dev`             | Start dev server with hot reload        |
| `build`                 | Build project using TypeScript compiler |
| `prisma:migration`      | Run a new Prisma DB migration (dev)     |
| `prisma:migration:prod` | Apply Prisma migrations in prod         |
| `prisma:seed`           | Seed database with initial data         |
| `prisma:studio`         | Open Prisma Studio (GUI)                |
| `prisma:generate`       | Regenerate Prisma client                |

---

## 📚 API Documentation

After starting the server, visit:

```
http://localhost:3000/api-docs
```

Documentation is powered by Swagger using OpenAPI 3.0 and auto-loads from the `docs/` directory:

- `docs/auth.yaml`
- `docs/users.yaml`

---

## 🔐 Authentication

Uses JWT-based authentication. Update `JWT_SECRET` in your `.env` file to a secure random string. Auth middleware is included in:

```ts
src / app / middlewares / verify.middleware.ts;
```

---

## ✅ Validation

All request body validation is powered by [Zod](https://github.com/colinhacks/zod) and errors are handled centrally with proper formatting.

## ✨ Features

- Clean modular folder structure (modules per feature)
- Centralized error handling
- Swagger-ready docs
- Scalable and extensible
- Fully typed with strict TypeScript
- Production-ready with minimal configuration

---

## 📌 Requirements

- Node.js `>=22.x` (see `.nvmrc`)
- PostgreSQL (or compatible database for Prisma)
- npm (recommended) or pnpm

---

## 📝 License

MIT — [LICENSE](./LICENSE)
