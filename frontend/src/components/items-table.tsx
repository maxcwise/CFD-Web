import type { Item } from "@/services/items";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ItemsTable({ items }: { items: Item[] }) {
  if (items.length === 0) {
    return <p className="px-5 py-12 text-center text-sm text-stone-500">No items yet.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-20">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-mono text-xs text-stone-400">{String(item.id).padStart(2, "0")}</TableCell>
            <TableCell className="font-medium text-stone-900">{item.name}</TableCell>
            <TableCell className="text-stone-600">{item.category}</TableCell>
            <TableCell>
              <span className="inline-flex rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-700">
                {item.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
