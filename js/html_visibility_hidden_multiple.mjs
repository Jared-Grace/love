import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { each } from "./each.mjs";
export function html_visibility_hidden_multiple(list) {
  each(list, html_visibility_hidden);
}
