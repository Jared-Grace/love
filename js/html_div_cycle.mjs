import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle } from "./html_cycle.mjs";
import { html_div } from "./html_div.mjs";
export function html_div_cycle(parent, cycles, parts) {
  arguments_assert(arguments, 3);
  ("a line of its own holding parts that take their styling in turn, and the line handed back so the caller can say something about the line as a whole");
  ("The styled twins of this - code, mono, bold - are the same three lines with one list of stylers changed, so the three lines live here and each of them is left saying only which stylers it means.");
  let div = html_div(parent);
  html_cycle(div, cycles, parts);
  return div;
}
