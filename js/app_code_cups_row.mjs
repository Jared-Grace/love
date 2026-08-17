import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_flex_row_center } from "./html_flex_row_center.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_code_cups_row(parent) {
  arguments_assert(arguments, 1);
  ("a place to draw cups next to each other rather than one under the other");
  ("Two cups stacked in a column are two pictures, read one after the other, and the second is understood as what happened next to the first. Side by side they are one picture of two cups standing at the same time, which is what a screen about having more than one name has to show.");
  ("The row is only as wide as the cups in it, and is centred by that width rather than by spreading its contents. A cup centres itself with a margin on either side that grows to fill whatever room is going, which inside a wide row would push the two cups to opposite edges; a row with no room to spare leaves those margins nothing to grow into, so the cups stay together and the gap below is the only thing between them.");
  let row = html_div(parent);
  html_flex_row_center(row);
  html_style_assign(row, {
    width: "fit-content",
    "margin-left": "auto",
    "margin-right": "auto",
    gap: "1.5em",
  });
  return row;
}
