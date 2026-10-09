export const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8000";

export type Item = {
  id: number;
  name: string;
  category: string;
  status: string;
};

type ItemList = {
  items: Item[];
};

export async function listItems(): Promise<Item[]> {
  const response = await fetch(`${API_BASE_URL}/api/v1/items`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Items request failed (${response.status})`);
  }

  const data = (await response.json()) as ItemList;
  return data.items;
}
