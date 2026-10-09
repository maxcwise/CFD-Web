---
paths:
  - "frontend/**"
---

# Frontend

- Use Next.js App Router, React, TypeScript, Tailwind CSS, and the existing shadcn/ui setup.
- Keep backend calls and transport types in `frontend/src/services/`. Do not scatter `fetch` through UI components.
- Match backend response names, types, and nullability exactly; update both sides together.
- Use server components for data display by default. Add `"use client"` only when interaction needs browser state or events.
- Reuse components in `src/components/ui/` before adding a new primitive.
- Show useful empty and error states for data-driven views.
- Run `npm run lint` and `npm run build` after frontend changes.
