import { app_code_match_color } from "./app_code_match_color.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_first_decimal_digit_line(
  parent,
  lead,
  decimal_before,
  digit,
  decimal_after,
) {
  "one worked line naming the first digit after the decimal point, with that digit painted the match colour in TWO places so the eye links them: inside the number itself and as the standalone digit at the end of the sentence. lead is the sentence opener (For example, in / in); decimal_before is the number up to and including the point (like 7.); decimal_after is whatever follows the highlighted digit (like 5 or 999)";
  let div = html_div(parent);
  let color = app_code_match_color();
  html_span_text(div, lead);
  let tile = html_span(div);
  html_style_code_dark_nowrap(tile);
  html_span_text(tile, decimal_before);
  let inner = html_span_text(tile, digit);
  html_font_color_set(inner, color);
  html_span_text(tile, decimal_after);
  html_span_text(div, " the first digit after the decimal point is ");
  let standalone = html_span(div);
  html_style_code_dark_nowrap(standalone);
  html_span_text(standalone, digit);
  html_font_color_set(standalone, color);
  return div;
}
