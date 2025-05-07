# 🙌 Contributing to express-boilerplate

Thanks for your interest in contributing! Please follow the guidelines below to ensure clean code, smooth collaboration, and high-quality pull requests.

---

## 🧾 Prerequisites

- Use **Node.js v22+** (see `.nvmrc`)
- Install dependencies via `npm install`
- Read the [README.md](./README.md) for project structure and context

---

## 📦 How to Contribute

### 1. Fork the Repository

Create your own fork of this repository, then clone it:

```bash
git clone https://github.com/uchkunrakhimow/express-boilerplate.git
cd express-boilerplate
```

Create a feature/fix branch:

```bash
git checkout -b fix/improve-error-response
```

---

### 2. Make Focused Changes

- Only fix **one logical issue or feature** per pull request
- Follow existing project structure and naming conventions
- Clearly explain **what** you changed and **why** in the PR description

---

### 3. Maintain Code Quality

- Format code using Prettier:

  ```bash
  npx prettier --write .
  ```

- Lint code using ESLint:

  ```bash
  npx eslint . --fix
  ```

- Add or update tests where applicable

---

### 4. Use Conventional Commits

Your commit messages **must** follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:

```bash
feat(user): add email verification
fix(auth): correct JWT expiration handling
docs(readme): fix typo in API usage
```

Bad examples (do not use):

```
"updated stuff", "fix bug", "typo"
```

---

### 5. Submit a Pull Request

- Push your branch:

  ```bash
  git push origin fix/improve-error-response
  ```

- Open a pull request to the `master` branch

- In the PR description:

  - What was changed and why
  - Related issue (if any)
  - Confirmation that you followed all contribution guidelines

---

## ✅ PR Checklist

- [ ] Follows project’s folder and code structure
- [ ] Uses Conventional Commit messages
- [ ] Includes tests or docs if needed
- [ ] Contains only **one** focused change
- [ ] Code is linted and formatted

---

## ⚠️ Notes

- Pull requests that do not follow these guidelines may be closed or require changes
- Spam, low-quality, or irrelevant contributions will be rejected

---

## 🙏 Thanks!

We appreciate your contributions. Together we make this project stronger 💪
