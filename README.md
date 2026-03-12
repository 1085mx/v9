# V9

ResidentOS prototype for committee operations, finance, maintenance, visits, and building rules.

## Repo

- Remote: `git@github.com:1085mx/v9.git`
- Default branch: `main`
- Working directory: `/Volumes/1085/Work/Sebastian/V9`

## Recommended workflow

Use `main` as the stable branch. Do not work directly on `main` for normal feature work.

For each task:

1. Start from updated `main`
   ```bash
   git checkout main
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
6. Merge to `main` after review or after you are comfortable with the change

## Branch naming

Use:

- `codex/finance-overview`
- `codex/maintenance-tracker`
- `codex/reglamento-nav`

Keep branch names short and task-specific.

## When to use `main`

Use `main` only for:

- reviewed changes
- small hotfixes
- changes already validated and ready to keep stable

## Suggested team rule

- `main` should always be usable
- one branch per feature or fix
- avoid mixing unrelated changes in the same branch
- if a task grows, split it into multiple branches

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

Create and switch to a new branch:

```bash
git checkout -b codex/<short-task-name>
```

Push current branch:

```bash
git push -u origin HEAD
```

## Current integration notes

- Supabase tasks schema: `/Volumes/1085/Work/Sebastian/V9/supabase/tasks-schema.sql`
- Supabase setup guide: `/Volumes/1085/Work/Sebastian/V9/supabase/README.md`
- Default frontend config: `/Volumes/1085/Work/Sebastian/V9/supabase-config.js`
