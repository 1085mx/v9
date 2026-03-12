# Decisions

## Product

### Committee-first structure

The app is organized for committee decisions first, not for resident self-service first.

That means:

- overview before detail
- risks before archives
- actions before raw tables

### Finance information hierarchy

Finance is structured from general to particular:

1. executive overview
2. cobranza
3. egresos
4. cierre
5. estados

### Regulation as a readable document

The regulation should be readable as a full document, not fragmented into hidden cards.

Filters are used only to jump to sections, not to hide the full text.

### Maintenance as a tracker

Maintenance is not just a calendar. It behaves like a tracker:

- visible current month
- overdue from previous months
- in-progress work
- month navigation

## Design

### Typography

Use Helvetica-based typography across the system.

### Surface behavior

- base surfaces should stay muted
- hover should not repaint panels aggressively
- selected state is the place where stronger color appears
- pills should avoid overuse

## Technical

### Frontend shape

The app remains plain frontend:

- `index.html`
- `styles.css`
- `app.js`

This keeps iteration fast while the information architecture is still evolving.

### Supabase scope

Supabase is introduced first for `Mantenimiento` tasks only.

Reason:

- clear data model
- lower risk than finance
- immediate value for persistence and shared tracking

### Git collaboration

The repo is shared between human work, Codex, and Claude.

Rules:

- `main` stays stable
- work happens in `codex/*` or `claude/*`
- handoffs go into `docs/handoff.md`
