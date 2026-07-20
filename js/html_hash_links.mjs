import { html_hash_links_labeled } from "./html_hash_links_labeled.mjs";
import { list_map } from "./list_map.mjs";
export function html_hash_links(root, names) {
  "render a clickable block link per name, each pointing at #<name> with the name as its text — a plain hash-route index (shared by the sandbox preview list and app_g's #index); pairs with html_reload_on_hash_change so a click re-runs the app on the new hash. label===hash case of html_hash_links_labeled";
  function entry(name) {
    let e = { hash: name, label: name };
    return e;
  }
  let entries = list_map(names, entry);
  html_hash_links_labeled(root, entries);
}
