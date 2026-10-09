# App Template

This repository is a reusable FastAPI and Next.js starting point for building web applications. Its working example sends `GET /api/v1/items` from the Next.js server to FastAPI and renders the returned rows in a table. PostgreSQL is planned for later; no database is required to run the app now.

## Layout

- `backend/app/main.py` registers FastAPI routes.
- `backend/app/<feature>/router.py` handles HTTP input and output.
- `backend/app/<feature>/schemas.py` defines API models.
- `backend/app/<feature>/service.py` holds application behavior.
- `backend/app/<feature>/repository.py` owns data access.
- `frontend/src/app/` holds routes; `frontend/src/components/` holds UI.
- `frontend/src/services/` owns backend requests and TypeScript API types.

Keep this structure small. Add modules only when a feature needs them. Do not copy company-specific architecture, authentication, database tunneling, or unrelated dependencies from the reference application.

## Full-stack changes

1. Define or update the FastAPI response model and endpoint.
2. Put behavior in the feature service and data access in its repository.
3. Update the matching TypeScript types and service when the API contract changes.
4. Render the result from a Next.js route or component. Keep API calls in `src/services/`.
5. Add focused tests for behavior and contract changes; run relevant checks.

The backend is the source of truth for business rules. The frontend must not duplicate those rules. Keep response field names, types, and nullability aligned across Python and TypeScript. Prefer server-side fetching in Next.js until browser interaction requires a client component.

## Commands

```bash
# Backend, from backend/
python3.12 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python -m uvicorn app.main:app --reload --port 8000
.venv/bin/python -m ruff check .
.venv/bin/python -m pytest

# Frontend, from frontend/
npm install
npm run dev
npm run lint
npm run build
```

## Database and secrets

The example data currently lives in `backend/app/items/repository.py`. Do not add a PostgreSQL dependency, connection, migration, or database write unless the requested feature needs one. When adding persistence, use environment configuration and explicit migrations. Never commit secrets, `.env` files, local virtual environments, or build output. Preserve existing working-tree changes.

## Scoped rules

Claude Code rules live in `.claude/rules/`: `backend.md`, `frontend.md`, `full-stack.md`, and `database.md`. Read the relevant rule before changing that area. `CLAUDE.md` imports this file so both agents share the same project guidance.
