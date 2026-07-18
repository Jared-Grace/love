import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
export function html_hash_links(root, names) {
  "render a clickable block link per name, each pointing at #<name> — a plain hash-route index (shared by the sandbox preview list and app_g's #index); pairs with html_reload_on_hash_change so a click re-runs the app on the new hash";
  function link(name) {
    let href = text_combine("#", name);
    let a = html_a_href_text(root, href, name);
    html_style_set(a, "display", "block");
  }
  each(names, link);
}
