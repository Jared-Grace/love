export function html_hash_set(h) {
  history.replaceState(null, "", "#section1");
  return;
  window.location.hash = h;
}
