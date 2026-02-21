import { app_replace_button_rule_style } from "../../../love/public/src/app_replace_button_rule_style.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_button_rule_content } from "../../../love/public/src/app_replace_button_rule_content.mjs";
import { html_button_notext } from "../../../love/public/src/html_button_notext.mjs";
export function app_replace_button_rule(root, left, right, on_click) {
  let b = html_button_notext(root, on_click);
  app_replace_button_rule_style(b);
  let r2 = app_replace_button_rule_content(b, left, right);
  let arrow = property_get(r2, "arrow");
  let rights = property_get(r2, "rights");
  let lefts = property_get(r2, "lefts");
  let r = {
    b,
    lefts,
    rights,
    arrow,
  };
  return r;
}
