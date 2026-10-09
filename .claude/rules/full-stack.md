# Full-stack feature flow

For a feature that spans both applications:

```text
Data source → backend repository → service → FastAPI router / Pydantic schema
                                               ↓ HTTP JSON
Next.js page/component ← typed frontend service ← response contract
```

1. Define the endpoint and Pydantic request/response models.
2. Implement behavior in the backend feature, with data access isolated in the repository.
3. Add a backend test for the externally visible response.
4. Add or update the TypeScript service and matching types.
5. Build the page or component and handle success, empty, and error states.
6. Run backend Ruff/pytest and frontend lint/build; report any checks that could not run.

Use `/api/v1` for API routes. Keep HTTP field names stable unless the frontend is updated in the same change. Avoid new layers or dependencies without a concrete feature need.
