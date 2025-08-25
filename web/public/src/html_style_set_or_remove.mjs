import {html_style_remove} from "./html_style_remove.mjs";
import {html_style_set} from "./html_style_set.mjs";
export function html_style_set_or_remove(condition, component, style_key, style_value) {
  if (condition) {
    html_style_set(component, style_key, style_value);
  } else {
    html_style_remove(component, style_key);
  }
}
