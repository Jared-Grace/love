import { html_data_set_test } from "./html_data_set_test.mjs";
import { app_replace_button_rule_style } from "./app_replace_button_rule_style.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_button_rule_content } from "./app_replace_button_rule_content.mjs";
import { html_button_notext } from "./html_button_notext.mjs";
export function app_replace_button_rule(root, rule, on_click) {
  let left = property_get(rule, "left");
  let right = property_get(rule, "right");
  let b = html_button_notext(root, on_click);
  let original = property_get(rule, "original");
  html_data_set_test(b, original);
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
