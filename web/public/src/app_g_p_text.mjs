import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
export function app_g_p_text(container, name) {
  let p = html_p_text(container, name);
  html_style_assign(p, {
    marginTop: "0.5em",
    marginBottom: "0.5em",
  });
}
