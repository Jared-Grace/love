import { html_style_padding_em } from "../../love/js/html_style_padding_em.mjs";
import { app_shared_button_style } from "../../love/js/app_shared_button_style.mjs";
import { html_button } from "../../love/js/html_button.mjs";
export function app_shared_button(parent, text, lambda) {
  let b = html_button(parent, text, lambda);
  app_shared_button_style(b);
  html_style_padding_em(b, "0.3");
  return b;
}
