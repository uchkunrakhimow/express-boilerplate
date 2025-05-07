# 🚀 Express boilerplate

A scalable and production-ready Express.js API boilerplate built with TypeScript, Prisma, Zod, and JWT — featuring clean modular structure, Swagger docs, and Docker support.

---

## 📦 Tech Stack

- **Node.js** v22+
- **Express.js** v5+
- **TypeScript** v5+
- **Prisma ORM** with PostgreSQL
- **Zod** for validation
- **JWT** for authentication
- **Swagger (OpenAPI)** for API docs
- **Docker** for containerized deployments
- **ESLint + Prettier** for code quality

---

## 🗂️ Folder Structure

```

src/
├── app/
│   ├── config/         # Env and app config
│   ├── middlewares/    # Global middlewares
│   ├── modules/        # Feature modules (auth, user, etc.)
│   ├── app.ts          # Express app setup
│   └── routes.ts       # Route registration
├── index.ts            # Entrypoint
docs/                   # Swagger YAML docs
prisma/                 # Prisma schema and migrations
.env.example            # Sample environment variables

```

---

## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/uchkunrakhimow/express-boilerplate.git
cd express-boilerplate

# Install dependencies
npm install

# Copy env config and update
cp .env.example .env

# Generate Prisma client
npm run prisma:generate

# Start development server
npm run start:dev
```

---

## 🐳 Docker Setup

To run the app in containers:

```bash
docker-compose up --build
```

- API will be available at `http://localhost:3000`
- PostgreSQL runs on port `5432`
- Prisma will use `DATABASE_URL` from `.env`

See: [`Dockerfile`](./Dockerfile), [`docker-compose.yml`](./docker-compose.yml)

---

## 📚 API Docs

Interactive documentation available at:

```
http://localhost:3000/api-docs
```

- Based on `docs/*.yaml` using Swagger (OpenAPI 3.0)
- Examples: `auth.yaml`, `users.yaml`

---

## 🔐 Auth & Validation

- JWT-based authentication middleware:
  [`verify.middleware.ts`](./src/app/middlewares/verify.middleware.ts)
- Input validation using [Zod](https://zod.dev), with centralized error formatting

---

## 📜 Scripts

| Script                  | Description                       |
| ----------------------- | --------------------------------- |
| `start`                 | Start production server (`dist/`) |
| `start:dev`             | Start dev server with hot reload  |
| `build`                 | Compile TypeScript project        |
| `prisma:migration`      | Create new DB migration (dev)     |
| `prisma:migration:prod` | Apply DB migrations (production)  |
| `prisma:generate`       | Generate Prisma client            |
| `prisma:seed`           | Seed database                     |
| `prisma:studio`         | Launch Prisma Studio GUI          |

---

## 🧑‍💻 Contributing

We welcome community contributions!
Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to:

- Fork and branch properly
- Write Conventional Commits
- Submit a clear pull request (PR)

---

## 📓 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a detailed list of features and updates across all versions. Follows [Semantic Versioning](https://semver.org).

---

## 📌 Requirements

- **Node.js** ≥ 22.x (see `.nvmrc`)
- **PostgreSQL** for Prisma database
- **npm** or `pnpm` (your choice)
- **Docker** (optional, but recommended for consistency)

---

## 📝 License

MIT — [LICENSE](./LICENSE)

---

## 🙌 Acknowledgements

Built and maintained with ❤️ by [@uchkunrakhimow](https://github.com/uchkunrakhimow)
