import { html_p_text } from "./html_p_text.mjs";
import { properties_get } from "./properties_get.mjs";
import { html_hash_links } from "./html_hash_links.mjs";
export function app_sandbox_previews_list(root, previews) {
  "no hash matched a preview: show a clickable link per available preview so the user can pick one without editing the URL";
  html_p_text(root, "Pick a preview:");
  let names = properties_get(previews);
  html_hash_links(root, names);
}
