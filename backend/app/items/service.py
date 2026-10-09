from app.items import repository
from app.items.schemas import Item


def list_items() -> list[Item]:
    """Return items without tying callers to their storage location."""
    return repository.list_items()
