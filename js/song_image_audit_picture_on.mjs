import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { html_text_align } from "./html_text_align.mjs";
import { html_button } from "./html_button.mjs";
export function song_image_audit_picture_on(attempt_line, strip, on_click) {
  arguments_assert(arguments, 3);
  html_style_flex(attempt_line, "1 1 auto");
  html_text_align(attempt_line, "center");
  let on = html_button(strip, "›", on_click);
  return on;
}
