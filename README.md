# App Template

A small full-stack app with a FastAPI backend and a Next.js frontend. The home page displays rows returned by `GET /api/v1/items`. Data lives in code today; the backend keeps it behind one repository module so PostgreSQL can be added when the app needs persistence.

## Stack

- **Backend:** Python 3.12+, FastAPI, Pydantic, Uvicorn, pytest, Ruff
- **Frontend:** Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Lucide icons
- **Package managers:** pip with one `backend/requirements.txt`; npm with `frontend/package-lock.json`

## Run locally

Open two terminals from this repository.

**Terminal 1 — API**

```bash
cd backend
python3.12 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

The API is available at `http://localhost:8000`. Open `http://localhost:8000/docs` for interactive API documentation or try:

```bash
curl http://localhost:8000/api/v1/items
```

**Terminal 2 — web app**

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. `API_BASE_URL` is read by the Next.js server and defaults to `http://localhost:8000`; set it in `frontend/.env.local` if the API runs elsewhere. Restart Next.js after changing the environment file.

## Project map

```text
backend/
  app/main.py             FastAPI setup and router registration
  app/items/router.py     HTTP endpoint
  app/items/schemas.py    Response models
  app/items/service.py    Application behavior
  app/items/repository.py Current data source; future database boundary
  tests/                 API tests
frontend/
  src/app/                Next.js routes and global styles
  src/components/         Table presentation and shadcn/ui component
  src/services/items.ts   Typed API request and response contract
AGENTS.md                 Instructions for coding agents
CLAUDE.md                 Claude Code entry point
.claude/rules/             Scoped backend, frontend, and full-stack rules
```

The example response is:

```json
{
  "items": [
    { "id": 1, "name": "Project brief", "category": "Document", "status": "Ready" }
  ]
}
```

The actual endpoint returns three rows. The frontend service mirrors the response fields and passes the rows to the table. To add a feature, start with its backend endpoint and response model, then add a typed frontend service and page or component.

## Checks

```bash
cd backend
.venv/bin/python -m ruff check .
.venv/bin/python -m pytest

cd ../frontend
npm run lint
npm run build
```

## Adding PostgreSQL later

`backend/app/items/repository.py` is the only current data source. When persistence is needed, add a database connection module, schema migration, and a PostgreSQL-backed repository while keeping the `GET /api/v1/items` response stable. Put database settings in an ignored environment file; never commit credentials. See [the database rule](.claude/rules/database.md) for the intended change sequence.
