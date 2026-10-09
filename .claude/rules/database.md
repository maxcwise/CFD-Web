---
paths:
  - "backend/**"
---

# Database integration, when needed

The template has no database connection. `backend/app/items/repository.py` supplies in-code example data.

When a feature calls for PostgreSQL:

1. Choose and document a connection approach, add its dependency to `backend/requirements.txt`, and configure it through an ignored environment file.
2. Add a reviewed schema migration and a documented command to apply it. Never auto-create or destructively reset tables on application startup.
3. Implement database access in the relevant repository while keeping services and API models independent of connection details.
4. Test repository behavior against a disposable database and keep endpoint contract tests.
5. Before applying a migration or writing data, identify the target database and describe the intended operation to the user.

Never commit connection strings or credentials. Avoid database reads and writes inside per-row loops when a bulk operation is available.
