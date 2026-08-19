import { app_g_verify_hint_font_size } from "./app_g_verify_hint_font_size.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
export function app_g_verify_hint_p(wrap, text) {
  "One quiet line of guidance on the verify screen: a paragraph carrying the words, dimmed and set small and held tight against whatever is above it.";
  "Both places that say something quietly to a reviewer said it in the same five steps, and those five steps are the whole of what makes the two lines read as one voice rather than two. Written out twice they could stop matching without anything going wrong at the moment they parted - one of them left a little larger than the other, and the screen would then be speaking quietly in two different tones with nothing to say which was meant.";
  arguments_assert(arguments, 2);
  let note = html_p_text(wrap, text);
  app_shared_text_deemphasized(note);
  let value = app_g_verify_hint_font_size();
  html_style_font_size(note, value);
  html_margin_em(note, "0");
}
