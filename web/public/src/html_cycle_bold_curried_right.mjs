import { html_cycle_bold } from "../../../love/public/src/html_cycle_bold.mjs";
export function html_cycle_bold_curried_right(parts) {
  let r2 = function html_cycle_bold_curried_right_result(parent) {
    let r = html_cycle_bold(parent, parts);
    return r;
  };
  return r2;
}
