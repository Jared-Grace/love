import { html_style_overflow_wrap } from "./html_style_overflow_wrap.mjs";
import { app_shared_code_rounded_unbordered_padded } from "./app_shared_code_rounded_unbordered_padded.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function html_style_code_unfonted(
  component,
  color_background,
  color_font,
) {
  html_style_background_color_set(component, color_background);
  html_font_color_set(component, color_font);
  app_shared_code_rounded_unbordered_padded(component);
  ("code that may wrap never runs past the right edge of its room: where a piece of it is wider than the whole row and has no place to break, it breaks anyway, as a last resort, at the human's request, 2026-09-28. The places it prefers - between tokens - are left by whatever writes the code into it. Code held to one line, standing inside a sentence, does not wrap at all, so this changes nothing there");
  html_style_overflow_wrap(component, "anywhere");
}
