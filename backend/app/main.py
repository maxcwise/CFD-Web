from fastapi import FastAPI

from app.items.router import router as items_router

app = FastAPI(title="App Template API", version="0.1.0")


@app.get("/health", tags=["system"])
def health() -> dict[str, str]:
    return {"status": "ok"}


app.include_router(items_router, prefix="/api/v1")
