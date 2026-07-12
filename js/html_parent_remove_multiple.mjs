import { html_parent_remove } from "./html_parent_remove.mjs";
import { each } from "./each.mjs";
export function html_parent_remove_multiple(froms) {
  each(froms, html_parent_remove);
}
