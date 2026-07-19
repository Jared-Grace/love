import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
// An inline dark "code chip" (terminal look), shared styling with the app_code
// dark tiles. Used for the fn name and the command.
export function example_chip_dom(parent, text) {
  let chip = html_span_text(parent, text);
  html_style_code_dark(chip);
  html_style_set(chip, "border-radius", app_shared_border_radius());
  html_style_set(chip, "padding", "0.3rem 0.5rem");
  html_style_set(chip, "font-size", "0.9rem");
  return chip;
}
