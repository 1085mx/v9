## Supabase setup for `tasks`

1. Create a Supabase project.
2. Open the SQL editor and run:
   - `/Volumes/1085/Work/Sebastian/V9/supabase/tasks-schema.sql`
3. In the project settings, copy:
   - `Project URL`
   - `Publishable key` or legacy `anon public key`
4. In the app, open `Mantenimiento` and use the `Supabase > Conexion de la base` panel to paste:
   - `Project URL`
   - `Publishable key` or legacy `anon public key`
   - `tasks` as the table name
5. Click `Guardar y probar`.

Optional fallback:
- You can still define defaults in `/Volumes/1085/Work/Sebastian/V9/supabase-config.js`.
- Values saved from the UI take precedence in that browser.

Example:

```js
window.SUPABASE_CONFIG = {
  url: "https://YOUR_PROJECT.supabase.co",
  anonKey: "YOUR_ANON_KEY",
  tasksTable: "tasks",
};
```

Notes:
- If `url` and `anonKey` are empty, the app falls back to local in-memory tasks.
- Do not use `service_role` in the browser.
- If you click `Usar modo local`, the browser disables Supabase and the tracker keeps working locally.
- The current SQL policies are open to `anon` for prototyping. Tighten them before using this in production.
- Open the app through a local web server when using Supabase. Avoid `file://` mode.
