export function permission_settings_paths() {
  "every file a permission rule can live in — the repo-shared settings and the per-machine local settings";
  let paths = [".claude/settings.json", ".claude/settings.local.json"];
  return paths;
}
