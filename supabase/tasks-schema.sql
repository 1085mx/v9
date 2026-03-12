create extension if not exists pgcrypto;

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  area text not null,
  due_date date not null,
  status text not null check (status in ('pendiente', 'en-curso', 'completada')),
  owner text not null,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_tasks_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists tasks_set_updated_at on public.tasks;
create trigger tasks_set_updated_at
before update on public.tasks
for each row
execute function public.set_tasks_updated_at();

alter table public.tasks enable row level security;

drop policy if exists "tasks_select_public" on public.tasks;
create policy "tasks_select_public"
on public.tasks
for select
to anon, authenticated
using (true);

drop policy if exists "tasks_insert_public" on public.tasks;
create policy "tasks_insert_public"
on public.tasks
for insert
to anon, authenticated
with check (true);

drop policy if exists "tasks_update_public" on public.tasks;
create policy "tasks_update_public"
on public.tasks
for update
to anon, authenticated
using (true)
with check (true);

grant select, insert, update on public.tasks to anon, authenticated;
