# V9

ResidentOS prototype for committee operations, finance, maintenance, visits, and building rules.

## Repo

- Remote: `git@github.com:1085mx/v9.git`
- Default branch: `main`
- Integration branch: `dev`
- Working directory: `/Volumes/1085/Work/Sebastian/V9`

## Recommended workflow

Use:

- `main` for stable code
- `dev` for integration
- feature branches for active work

Do not work directly on `main` for normal feature work.
Do not use `dev` as a personal scratch branch. Merge into it from short-lived task branches.

This repo is set up for shared work between:

- humans
- Codex
- Claude

For each task:

1. Start from updated `dev`
   ```bash
   git checkout dev
   git pull
   ```
2. Create a branch
   ```bash
   git checkout -b codex/<short-task-name>
   ```
3. Make changes and verify locally
4. Commit with a clear message
   ```bash
   git add .
   git commit -m "Short summary"
   ```
5. Push the branch
   ```bash
   git push -u origin codex/<short-task-name>
   ```
6. Merge to `dev`
7. Promote `dev` to `main` when the change set is stable

## Branch naming

Use:

- `codex/finance-overview`
- `codex/maintenance-tracker`
- `codex/reglamento-nav`
- `claude/finance-overview`
- `claude/maintenance-tracker`
- `claude/reglamento-nav`

Keep branch names short and task-specific.

## Shared agent context

These files keep both agents aligned:

- `/Volumes/1085/Work/Sebastian/V9/AGENTS.md`
- `/Volumes/1085/Work/Sebastian/V9/CLAUDE.md`
- `/Volumes/1085/Work/Sebastian/V9/docs/handoff.md`
- `/Volumes/1085/Work/Sebastian/V9/docs/decisions.md`
- `/Volumes/1085/Work/Sebastian/V9/docs/github-branch-protection.md`

If work changes hands, update `docs/handoff.md` before stopping.

## When to use `main`

Use `main` only for:

- stable releases
- changes already validated in `dev`
- urgent hotfixes that must go live immediately

## When to use `dev`

Use `dev` for:

- integrating finished task branches
- testing combined changes from Codex and Claude
- preparing the next promotion to `main`

## Suggested team rule

- `main` should always be usable
- `dev` should be usable most of the time
- one branch per feature or fix
- avoid mixing unrelated changes in the same branch
- if a task grows, split it into multiple branches
- merge feature branches into `dev`
- merge `dev` into `main` only when the set is stable

## Useful commands

Check current state:

```bash
git status
git branch
git log --oneline --decorate -5
```

Switch back to `main`:

```bash
git checkout main
```

Switch to `dev`:

```bash
git checkout dev
```

Create and switch to a new branch:

```bash
git checkout dev
git pull
git checkout -b codex/<short-task-name>
```

For Claude:

```bash
git checkout -b claude/<short-task-name>
```

Push current branch:

```bash
git push -u origin HEAD
```

Merge a finished branch into `dev`:

```bash
git checkout dev
git pull
git merge codex/<short-task-name>
git push
```

Promote `dev` into `main`:

```bash
git checkout main
git pull
git merge dev
git push
```

## Current integration notes

- Supabase tasks schema: `/Volumes/1085/Work/Sebastian/V9/supabase/tasks-schema.sql`
- Supabase setup guide: `/Volumes/1085/Work/Sebastian/V9/supabase/README.md`
- Default frontend config: `/Volumes/1085/Work/Sebastian/V9/supabase-config.js`
