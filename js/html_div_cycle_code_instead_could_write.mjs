import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function html_div_cycle_code_instead_could_write(
  parent,
  code_a,
  code_b,
) {
  html_div_cycle_code(parent, [
    "Instead of ",
    code_a,
    " we could write: ",
    code_b,
  ]);
}
