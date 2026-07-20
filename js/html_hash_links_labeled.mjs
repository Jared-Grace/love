import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function html_hash_links_labeled(root, entries) {
  "render a clickable block link per entry {hash, label}: the link TEXT is `label` but it navigates to #<hash> — so a display label (e.g. 'conversation: believe') can differ from the route it points at (#believe). html_hash_links is the label===hash special case";
  function link(entry) {
    let hash = property_get(entry, "hash");
    let label = property_get(entry, "label");
    let href = text_combine("#", hash);
    let a = html_a_href_text(root, href, label);
    html_style_set(a, "display", "block");
  }
  each(entries, link);
}
