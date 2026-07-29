import { ternary } from "./ternary.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_font_color_set_or_remove } from "./html_font_color_set_or_remove.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_bible_on_click_google_define } from "./app_bible_on_click_google_define.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
export function app_shared_bible_verse_line(parent, name, text, color) {
  let line = html_div(parent);
  ("a null colour means read in the page's default text colour, so leave the property alone rather than writing one in");
  let colored = null_not_is(color);
  html_font_color_set_or_remove(colored, line, color);
  ("every line says its own direction out loud, both ways round, so the label sits at that language's reading start and its words run that language's natural way. saying it only for a right-to-left line is not enough: the frame holding these lines is mirrored by whichever language was chosen last, so a line that stayed silent inherited that mirror - an English verse under an Urdu one right-aligned itself and pushed its label to the far right, reading as though English ran backwards");
  let rtl = text_rtl_is(text);
  let direction = ternary(rtl, "rtl", "ltr");
  let alignment = ternary(rtl, "right", "left");
  html_style_set(line, "direction", direction);
  html_style_set(line, "text-align", alignment);
  let has_name = text_empty_not_is(name);
  if (has_name) {
    ("color the language name with the language color so it matches its verse text");
    let text2 = text_combine(name, ": ");
    let name_span = html_span_text(line, text2);
    ("deemphasize the label by fading it, keeping the language hue rather than graying it out");
    html_style_opacity(name_span, "0.6");
  }
  ("hold the verse words in their own isolated run so a right-to-left script like Urdu or Arabic reads in its own direction, detected from the text itself, without the Latin label flipping it");
  let text_holder = html_span(line);
  html_attribute_set(text_holder, "dir", "auto");
  app_bible_on_click_google_define(text_holder, text);
  return line;
}
