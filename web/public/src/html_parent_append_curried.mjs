import { html_parent_append } from "../../../love/public/src/html_parent_append.mjs";
export function html_parent_append_curried(parent) {
  return function html_parent_append_curried_result(e) {
    return html_parent_append(parent, e);
  };
}
