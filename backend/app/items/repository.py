from app.items.schemas import Item

# Replace this module's data access when the app gets PostgreSQL persistence.
_EXAMPLE_ITEMS = (
    Item(id=1, name="Project brief", category="Document", status="Ready"),
    Item(id=2, name="Design review", category="Milestone", status="In progress"),
    Item(id=3, name="Launch checklist", category="Task", status="Planned"),
)


def list_items() -> list[Item]:
    return list(_EXAMPLE_ITEMS)
