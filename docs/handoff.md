# Handoff

## Current branches

- `main`
- `dev`

## Last known stable state

- GitHub remote connected: `git@github.com:1085mx/v9.git`
- `main` is pushed and tracking `origin/main`
- Maintenance tracker can work:
  - locally
  - or from Supabase `tasks`

## Current implementation summary

- Committee-focused app structure is in place
- Finance is organized from overview to detail
- Regulation has:
  - sticky index
  - active section tracking
  - full text rendering
- Visits include QR generation in the browser
- Maintenance works like a tracker with:
  - month navigation
  - overdue tasks
  - in-progress tasks
  - status updates

## Important files

- `/Volumes/1085/Work/Sebastian/V9/index.html`
- `/Volumes/1085/Work/Sebastian/V9/styles.css`
- `/Volumes/1085/Work/Sebastian/V9/app.js`
- `/Volumes/1085/Work/Sebastian/V9/reglamento-data.js`
- `/Volumes/1085/Work/Sebastian/V9/supabase/README.md`
- `/Volumes/1085/Work/Sebastian/V9/supabase/tasks-schema.sql`

## Open areas

- Supabase currently covers maintenance tasks only
- Finance still needs real persistence and audit logic
- QR visits work in the browser, but not yet with backend persistence
- GitHub workflow is documented, but branch protection must be set in GitHub manually if desired

## Recommended next steps

1. Move `Vecinos` to Supabase
2. Move `Visitas QR` to Supabase
3. Add audit trail for finance operations
4. Add role model for committee/admin/resident

## Handoff template

When pausing work, append a short note like this:

### YYYY-MM-DD HH:MM

- Branch:
- Task:
- Files touched:
- What changed:
- What is pending:
- Risks / assumptions:
