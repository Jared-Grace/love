import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_g_p_text(container, name) {
  arguments_assert(arguments, 2);
  let p = html_p_text(container, name);
  html_style_assign(p, {
    marginTop: "0.5em",
    marginBottom: "0.5em",
  });
}
