import { html_style_padding_em } from "../../../love/public/src/html_style_padding_em.mjs";
import { app_replace_button_style } from "../../../love/public/src/app_replace_button_style.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_replace_button(parent, text, lambda) {
  let b = html_button(parent, text, lambda);
  app_replace_button_style(b);
  html_style_padding_em(b, "0.1");
  return b;
}
