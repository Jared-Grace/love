import { each } from "../../../love/public/src/each.mjs";
import { html_parent_append_curried } from "../../../love/public/src/html_parent_append_curried.mjs";
export function html_parent_append_multiple(body, rights_cloned2) {
  let r22 = html_parent_append_curried(body);
  each(rights_cloned2, r22);
}
