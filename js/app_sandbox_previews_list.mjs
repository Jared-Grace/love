import { html_p_text } from "./html_p_text.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_sandbox_previews_list(root, previews) {
  "no hash matched a preview: gently show which previews exist so you can add #<name> to the URL to see one";
  let names = properties_get(previews);
  let joined = list_join_space(names);
  let text = text_combine("Open the sandbox with a hash after #: ", joined);
  html_p_text(root, text);
}
