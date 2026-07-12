import { html_display_none } from "./html_display_none.mjs";
import { each } from "./each.mjs";
export function html_display_none_multiple(list) {
  each(list, html_display_none);
}
