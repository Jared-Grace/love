import { arguments_assert } from "./arguments_assert.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_a_hash_name_reload } from "./html_a_hash_name_reload.mjs";
import { html_style_position_fixed } from "./html_style_position_fixed.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_sandbox_root_link() {
  arguments_assert(arguments, 0);
  ("a small link pinned to the corner of every sandbox preview that goes back to the list of previews. The sandbox draws it, not the preview, so no preview has to know it lives inside the sandbox.");
  ("it is a real link to the empty hash, so it can also be opened in a new tab; a plain click reloads onto the list.");
  ("it sits on the body, above whatever a preview covers the screen with, which is why it is drawn after the preview has run.");
  let body = html_document_body();
  let link = html_a_hash_name_reload(body, "", "← Sandbox");
  html_style_position_fixed(link);
  html_style_set(link, "top", "0.5em");
  html_style_set(link, "right", "0.5em");
  html_style_set(link, "z-index", "2000");
  html_style_set(link, "padding", "0.25em 0.6em");
  html_style_set(link, "background", "rgba(255,255,255,0.9)");
  html_style_set(link, "color", "#222");
  html_style_set(link, "border-radius", "0.4em");
  html_style_set(link, "font-size", "0.9em");
  html_style_set(link, "text-decoration", "none");
  return link;
}
