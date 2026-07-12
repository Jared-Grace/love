import { each } from "./each.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
export function html_visibility_visible_multiple(on_success) {
  each(on_success, html_visibility_visible);
}
