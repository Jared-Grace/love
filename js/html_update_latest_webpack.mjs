import { html_update_latest_webpack_generic } from "./html_update_latest_webpack_generic.mjs";
export async function html_update_latest_webpack(search) {
  "Writes an app's checked page so it loads the bundle just built, with a fresh address each time so nothing can serve the old one.";
  "The address is stamped here as well as at the working stage, which it was not until 2026-09-04. A page and its bundle are written together by one run, so a stamped address always names the build the page belongs to - and a new page can then never send for an old bundle, because the address it asks for is one no earlier build ever wrote.";
  "Being sent no-store is not enough on its own. That settles the browser's own store and says nothing at all about a service worker's, which keeps what it was given whatever the sending said - and a worker falling back after a slow bundle is exactly how a new page came to be handed the previous build's script, whose numbered pieces it then asked for and did not find. Measured 2026-09-02: the screen said the page had not finished loading, and the build it was blamed on was sound.";
  "What is stamped is the one script the page names. A build is free to cut part of itself out into numbered pieces the running script sends for, and those addresses are made by the script rather than written here, so they carry no stamp. That is a narrower hole than the one this closes and it is still open.";
  let path = "f_path_latest";
  let cache_bust = true;
  await html_update_latest_webpack_generic(search, path, cache_bust);
}
