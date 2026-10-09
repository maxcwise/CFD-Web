---
paths:
  - "backend/**"
---

# Backend

- Use FastAPI for HTTP handling and Pydantic models for request and response contracts.
- Keep routers thin: validate input, call a service, and return a response.
- Keep application behavior in the feature service and data access in its repository.
- Do not make internal calls to the app's own HTTP endpoints; import the service directly.
- Register new routers in `backend/app/main.py` under `/api/v1`.
- Use the existing `backend/requirements.txt` and Python 3.12+ setup.
- Add focused pytest coverage for new endpoint behavior and run Ruff and pytest.
