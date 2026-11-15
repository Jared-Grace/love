import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_heading(parent, text) {
  arguments_assert(arguments, 2);
  ('A heading over a card or a part of a page: larger and bold, so it reads as the name of what follows rather than as one more field label beside the boxes (human: "Booking rules should be styled differently than field names"). The size and weight are the ones the booking page already gave its big lines.');
  let heading = html_div_text(parent, text);
  html_style_assign(heading, {
    "font-size": "1.3em",
    "font-weight": "bold",
  });
  return heading;
}
