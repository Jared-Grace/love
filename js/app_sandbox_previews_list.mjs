import { html_p_text } from "./html_p_text.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { properties_get } from "./properties_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
export function app_sandbox_previews_list(root, previews) {
  "no hash matched a preview: show a clickable link per available preview so the user can pick one without editing the URL";
  html_p_text(root, "Pick a preview:");
  let names = properties_get(previews);
  function link(name) {
    let href = text_combine("#", name);
    let a = html_a_href_text(root, href, name);
    html_style_set(a, "display", "block");
  }
  each(names, link);
}
