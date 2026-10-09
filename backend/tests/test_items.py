from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health() -> None:
    assert client.get("/health").json() == {"status": "ok"}


def test_items_endpoint_returns_table_data() -> None:
    response = client.get("/api/v1/items")

    assert response.status_code == 200
    assert response.json() == {
        "items": [
            {"id": 1, "name": "Project brief", "category": "Document", "status": "Ready"},
            {"id": 2, "name": "Design review", "category": "Milestone", "status": "In progress"},
            {"id": 3, "name": "Launch checklist", "category": "Task", "status": "Planned"},
        ]
    }
