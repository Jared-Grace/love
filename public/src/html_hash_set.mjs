export function html_hash_set(h) {
  history.replaceState(null, "", h);
  return;
  ("if we need to update history, then perhaps make a new function");
  window.location.hash = h;
}
