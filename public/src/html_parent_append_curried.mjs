import { html_parent_append } from "../../../love/public/src/html_parent_append.mjs";
export function html_parent_append_curried(parent) {
  let r2 = function html_parent_append_curried_result(e) {
    let r = html_parent_append(parent, e);
    return r;
  };
  return r2;
}
