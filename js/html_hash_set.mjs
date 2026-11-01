export function html_hash_set(h) {
  "$plain h";
  "Puts h, the hash end of an address, into the address bar without adding a step to the back button.";
  "The page's own address is spelled out in front of h rather than h being handed over alone. A lone hash is read against the page's base address, and a page that sits in a folder names the top folder as its base - so the browser would put the hash on the top folder's address, and reloading would open a different page. Spelled out, the path and the query stay this page's.";
  let url = location.pathname + location.search + h;
  history.replaceState(history.state, "", url);
  return;
  ("if we need to update history, then perhaps make a new function");
  window.location.hash = h;
}
