import { html_div } from "../../love/js/html_div.mjs";
import { html_div_text } from "../../love/js/html_div_text.mjs";
import { html_centered } from "../../love/js/html_centered.mjs";
import { html_style_font_size } from "../../love/js/html_style_font_size.mjs";
import { html_style_margin_y } from "../../love/js/html_style_margin_y.mjs";
import { app_shared_spaced_gap } from "../../love/js/app_shared_spaced_gap.mjs";
import { app_shared_spaced_large_gap } from "../../love/js/app_shared_spaced_large_gap.mjs";
import { app_shared_success_message } from "../../love/js/app_shared_success_message.mjs";
import { app_code_review_complete_message } from "../../love/js/app_code_review_complete_message.mjs";
export function app_code_review_complete(parent) {
  "the large end-of-review celebration: an enlarged green success message and a centered congratulatory line with emojis, with generous vertical spacing (more under the line than the green message)";
  let celebration = html_div(parent);
  html_style_font_size(celebration, "1.8em");
  let green = app_shared_success_message(celebration);
  html_style_margin_y(green, app_shared_spaced_gap());
  let text = app_code_review_complete_message();
  let message = html_div_text(celebration, text);
  html_centered(message);
  html_style_margin_y(message, app_shared_spaced_large_gap());
}
