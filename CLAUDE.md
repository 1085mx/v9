# CLAUDE

## Working model for this repo

This project is shared with Codex. Use the repo as the source of truth, not chat history.

Before starting work, read:

- `/Volumes/1085/Work/Sebastian/V9/README.md`
- `/Volumes/1085/Work/Sebastian/V9/docs/handoff.md`
- `/Volumes/1085/Work/Sebastian/V9/docs/decisions.md`
- `/Volumes/1085/Work/Sebastian/V9/AGENTS.md`

## Branch policy

- Keep `main` stable
- Do not work directly on `main` for normal changes
- Use:
  - `claude/<short-task-name>` for Claude branches
  - `codex/<short-task-name>` for Codex branches

## Collaboration rules

- Do not assume the other agent saw your chat
- Write important decisions into repo files
- If you stop mid-task, update `docs/handoff.md`
- Keep changes narrow and task-focused

## Project context

- Committee-first building operations app
- Main surfaces:
  - Centro
  - Finanzas
  - Vecinos
  - Visitas QR
  - Reglamento
  - Mantenimiento
  - Proveedores
  - Encuestas
  - Archivos
- Typography is Helvetica-based
- Visual system is muted by default, stronger on selected states

## Current technical shape

- Plain frontend:
  - `index.html`
  - `styles.css`
  - `app.js`
- Supabase is currently connected only for maintenance tasks
- The app includes a browser-side Supabase setup panel in `Mantenimiento`

## Expectations

- Preserve responsiveness
- Preserve the committee-first information hierarchy
- Prefer explicit handoff notes over implicit assumptions
