import { html_flex_grow_1_multiple } from "./html_flex_grow_1_multiple.mjs";
import { html_flex_basis_0_multiple } from "./html_flex_basis_0_multiple.mjs";
export function html_flex_share_equally(buttons) {
  "the buttons in a row come out the same width, rather than each taking what it says plus an equal share of the rest";
  "A row divides only what is left over, so buttons sharing it equally still differ by however much their words differ - and once the words are a translation, one of them is routinely half again as long as the other, which reads as one button being the important one.";
  html_flex_grow_1_multiple(buttons);
  html_flex_basis_0_multiple(buttons);
}
