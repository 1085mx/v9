# AGENTS

## Purpose

This repo is shared between human work, Codex, and Claude. The goal is to keep changes synchronized without losing context or mixing unrelated work.

## Core rules

- Treat `main` as stable.
- Treat `dev` as the integration branch.
- Do not use `main` for normal feature work.
- Use one branch per task.
- Keep commits focused and easy to review.
- Update handoff notes when stopping mid-task.

## Branch naming

Use:

- `codex/<short-task-name>` for Codex work
- `claude/<short-task-name>` for Claude work

Base those branches on `dev`, not on `main`, unless the work is a hotfix.

Examples:

- `codex/supabase-tasks`
- `claude/finance-cleanup`
- `codex/reglamento-sidebar`

## Files that matter before editing

Read these first when taking over work:

- `/Volumes/1085/Work/Sebastian/V9/README.md`
- `/Volumes/1085/Work/Sebastian/V9/docs/handoff.md`
- `/Volumes/1085/Work/Sebastian/V9/docs/decisions.md`

If the task touches Supabase:

- `/Volumes/1085/Work/Sebastian/V9/supabase/README.md`
- `/Volumes/1085/Work/Sebastian/V9/supabase/tasks-schema.sql`

## Handoff expectations

When pausing or handing work to another agent:

1. Update `docs/handoff.md`
2. Note:
   - what changed
   - what is still pending
   - any risks or assumptions
   - which files were touched
3. Keep handoff short and factual

## Scope control

- Do not bundle unrelated UI, logic, and infra changes in one branch unless they are tightly coupled.
- If a task expands, split it into a new branch.
- Prefer small merges back into `dev`.
- Promote `dev` into `main` only when the integrated set is stable.

## Current app shape

- Frontend is plain `index.html`, `styles.css`, `app.js`
- `Mantenimiento` can sync tasks with Supabase
- Finance, rules, visits, neighbors, and providers are still frontend-driven
- Full regulation text lives in `reglamento-data.js`

## Quality bar

- Validate JS syntax after edits
- Keep responsive behavior intact
- Do not break the left rail navigation
- Do not remove committee-first information architecture
