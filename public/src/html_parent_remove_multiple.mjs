import { html_parent_remove } from "../../../love/public/src/html_parent_remove.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function html_parent_remove_multiple(froms) {
  each(froms, html_parent_remove);
}
