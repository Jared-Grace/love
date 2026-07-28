export function app_g_dev_tools_open() {
  "open the #index dev-route directory from the player menu — set the URL hash so html_reload_on_hash_change reloads the app into the dev directory (the same nav the #index cards + back-link use). BESPOKE (window.location) — do NOT auto-canonicalize";
  window.location.hash = "index";
}
