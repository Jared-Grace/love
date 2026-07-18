export function html_reload_on_hash_change() {
  "when the URL hash changes (e.g. the user clicks a preview link), reload so the app re-reads the hash and runs the newly chosen preview from a clean slate";
  function reload() {
    window.location.reload();
  }
  window.addEventListener("hashchange", reload);
}
