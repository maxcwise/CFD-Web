from fastapi import APIRouter

from app.items import service
from app.items.schemas import ItemList

router = APIRouter(prefix="/items", tags=["items"])


@router.get("", response_model=ItemList)
def list_items() -> ItemList:
    return ItemList(items=service.list_items())
