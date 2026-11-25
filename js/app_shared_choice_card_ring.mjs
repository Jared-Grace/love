import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_background_invalid } from "./app_shared_button_background_invalid.mjs";
import { html_rgba_to_rgb } from "./html_rgba_to_rgb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
export function app_shared_choice_card_ring(container, valid) {
  arguments_assert(arguments, 2);
  ("The double ring drawn inside a picked choice card: green when the pick is allowed, the shared invalid colour when it is not, with a white line inside it so the ring stands off the green.");
  let ci = app_shared_button_background_invalid();
  let c = valid ? "#4ad66bff" : ci;
  let taken = html_rgba_to_rgb(c);
  let style_value = text_combine_multiple([
    "inset 0 0 0 .15em ",
    taken,
    ", inset 0 0 0 .3em white",
  ]);
  html_box_shadow_set(container, style_value);
}
