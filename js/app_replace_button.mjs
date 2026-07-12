import { html_style_padding_em } from "./html_style_padding_em.mjs";
import { app_replace_button_style } from "./app_replace_button_style.mjs";
import { html_button } from "./html_button.mjs";
export function app_replace_button(parent, text, lambda) {
  let b = html_button(parent, text, lambda);
  app_replace_button_style(b);
  html_style_padding_em(b, "0.3");
  return b;
}
