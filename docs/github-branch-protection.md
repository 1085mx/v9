# GitHub branch protection

This repo should use branch protection in GitHub for `main`, and optionally for `dev`.

## Recommended protection for `main`

In GitHub:

1. Open the repo
2. Go to `Settings`
3. Go to `Branches`
4. Add a branch ruleset or protection rule for `main`

Recommended settings:

- require a pull request before merging
- require at least 1 approval
- dismiss stale approvals when new commits are pushed
- require branches to be up to date before merging
- restrict direct pushes to `main`

## Recommended protection for `dev`

Use lighter rules than `main`.

Recommended:

- allow merges by PR
- optionally allow direct pushes only for repo admins
- avoid making `dev` so strict that it blocks normal agent iteration

## Suggested working model

- `main` = stable
- `dev` = integration
- `codex/*` and `claude/*` = task branches

## Merge path

Normal path:

1. task branch
2. `dev`
3. `main`

Hotfix path:

1. hotfix branch from `main`
2. `main`
3. merge back into `dev`
