# 📦 Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org) and uses Conventional Commits for commit messages.

---

## [1.0.0] - 2025-05-07

### 🚀 Added

- Initial production-ready Express.js boilerplate
- TypeScript setup with ESLint and Prettier
- Prisma ORM integration with PostgreSQL
- Modular feature-based architecture (`auth`, `user`)
- JWT-based authentication system
- Swagger/OpenAPI documentation via YAML files
- Centralized error handling with Zod validation
- Static file serving for production builds
- `.env.example` and config loader

### 📁 Project Structure

- `src/app/modules/` for domain-based features
- `src/app/middlewares/` for global logic
- `src/app/config/` for environment setup
- `docs/*.yaml` for Swagger API documentation

---
