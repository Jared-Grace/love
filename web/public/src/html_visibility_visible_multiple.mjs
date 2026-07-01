import { each } from "../../../love/public/src/each.mjs";
import { html_visibility_visible } from "../../../love/public/src/html_visibility_visible.mjs";
export function html_visibility_visible_multiple(on_success) {
  function lambda(item) {}
  each(list, lambda);
  let r = html_visibility_visible(on_success);
  return r;
}
