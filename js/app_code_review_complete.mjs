import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_replace_success_message } from "./app_replace_success_message.mjs";
import { app_code_review_complete_message } from "./app_code_review_complete_message.mjs";
export function app_code_review_complete(parent) {
  "the large end-of-review celebration: an enlarged green success message and a centered congratulatory line with emojis";
  let celebration = html_div(parent);
  html_style_font_size(celebration, "1.8em");
  app_replace_success_message(celebration);
  let text = app_code_review_complete_message();
  let message = html_div_text(celebration, text);
  html_centered(message);
}
