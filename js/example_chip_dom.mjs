import { html_span_text } from "./html_span_text.mjs";
import { example_chip_style } from "./example_chip_style.mjs";
// An inline dark "code chip" (terminal look), shared styling with the app_code
// dark tiles. Used for the command (the fn name uses the clickable variant).
export function example_chip_dom(parent, text) {
  let chip = html_span_text(parent, text);
  example_chip_style(chip);
  return chip;
}
