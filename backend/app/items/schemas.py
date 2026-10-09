from pydantic import BaseModel


class Item(BaseModel):
    id: int
    name: str
    category: str
    status: str


class ItemList(BaseModel):
    items: list[Item]
