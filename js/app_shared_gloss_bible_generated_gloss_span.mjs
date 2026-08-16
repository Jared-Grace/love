import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text_nbsp_replace_property_from } from "./html_span_text_nbsp_replace_property_from.mjs";
import { html_font_color_set_green } from "./html_font_color_set_green.mjs";
import { html_span_nbsp } from "./html_span_nbsp.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { html_span_space } from "./html_span_space.mjs";
export function app_shared_gloss_bible_generated_gloss_span(e, div, generated) {
  arguments_assert(arguments, 3);
  let span = html_span_text_nbsp_replace_property_from(div, e, generated);
  html_font_color_set_green(span);
  html_span_nbsp(div);
  let span2 = html_span_text_nbsp_replace_property_from(div, e, "gloss");
  html_font_color_set_white(span2);
  html_span_space(div);
}
