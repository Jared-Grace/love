import { app_replace_button_rule_background_color } from "../../../love/public/src/app_replace_button_rule_background_color.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_replace_button(root, name2, lambda) {
  let b = html_button(root, name2, lambda);
  let c = app_replace_button_rule_background_color();
  let r = {
    b,
    c,
  };
  return r;
}
