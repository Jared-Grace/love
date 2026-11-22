import { arguments_assert } from "./arguments_assert.mjs";
import { html_p } from "./html_p.mjs";
import { html_div } from "./html_div.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_bible_verse_frame(content, text_languages) {
  arguments_assert(arguments, 2);
  let p_verse = html_p(content);
  let top = html_div(p_verse);
  ("when the first language shown reads right-to-left, mirror the verse frame: the number moves to the right and the lines right-align, matching the chapter reader. The FIRST rather than the spine (last-chosen) one, because the first is the line the number starts: English over Urdu with the number on the right left the number beside nothing it begins.");
  let first_text = list_first_property(text_languages, "text");
  let frame_rtl = text_rtl_is(first_text);
  if (frame_rtl) {
    html_style_set(top, "direction", "rtl");
  }
  let r = {
    p_verse,
    top,
  };
  return r;
}
