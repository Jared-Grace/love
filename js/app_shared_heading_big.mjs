import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_heading_big(parent, text) {
  arguments_assert(arguments, 2);
  ("The name of a whole card, a size above ",
    fn_name("app_shared_heading"),
    ', so the headings inside the card read as its parts (human, 2026-11-25: "top main card has book a meeting be more prominent ... goal is ui shows structure").');
  let heading = html_div_text(parent, text);
  html_style_assign(heading, {
    "font-size": "1.7em",
    "font-weight": "bold",
  });
  return heading;
}
