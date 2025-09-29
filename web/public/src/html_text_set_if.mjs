import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export function html_text_set_if(condition, on_true, on_false, component) {
  let label_rules_text = ternary(condition, on_true, on_false);
  html_text_set(component, label_rules_text);
}
