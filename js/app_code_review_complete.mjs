import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { app_shared_spaced_large_gap } from "./app_shared_spaced_large_gap.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_code_review_complete_message } from "./app_code_review_complete_message.mjs";
export function app_code_review_complete(parent) {
  "the large end-of-review celebration: an enlarged green success message and a centered congratulatory line with emojis, with generous vertical spacing (more under the line than the green message)";
  let celebration = html_div(parent);
  let celebration_size = "clamp(1.1rem, 4.5vw, 1.8rem)";
  html_style_font_size(celebration, celebration_size);
  let green = app_shared_success_message(celebration);
  let value = app_shared_spaced_gap();
  html_style_margin_y(green, value);
  let text = app_code_review_complete_message();
  let message = html_div_text(celebration, text);
  html_centered(message);
  let value2 = app_shared_spaced_large_gap();
  html_style_margin_y(message, value2);
}
