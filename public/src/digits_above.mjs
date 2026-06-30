import { html_cycle_bold } from "../../../love/public/src/html_cycle_bold.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
export function digits_above(root) {
  let p3 = html_p(root);
  let ds = digits();
  let joined = list_join_comma_space(ds);
  let combined2 = text_combine_multiple(["The numbers ", joined, " are "]);
  html_cycle_bold(p3, [combined2, "digits"]);
  let p2 = html_p(root);
  html_cycle_bold(p2, [
    "In a number, the digits (0, 1, 2, ..., 9) are ",
    "symbols",
  ]);
}
