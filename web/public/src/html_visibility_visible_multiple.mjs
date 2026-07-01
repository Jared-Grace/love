import { each } from "../../../love/public/src/each.mjs";
import { html_visibility_visible } from "../../../love/public/src/html_visibility_visible.mjs";
export function html_visibility_visible_multiple(on_success) {
  each(on_success, html_visibility_visible);
}
