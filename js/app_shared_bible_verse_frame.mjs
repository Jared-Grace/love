import { arguments_assert } from "./arguments_assert.mjs";
import { html_p } from "./html_p.mjs";
import { html_div } from "./html_div.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_bible_verse_frame(content, text_languages) {
  arguments_assert(arguments, 2);
  let p_verse = html_p(content);
  let top = html_div(p_verse);
  ("when the spine (last-chosen) language reads right-to-left, mirror the verse frame: the number moves to the right and the lines right-align, matching the chapter reader");
  let spine_text = list_last_property(text_languages, "text");
  let frame_rtl = text_rtl_is(spine_text);
  if (frame_rtl) {
    html_style_set(top, "direction", "rtl");
  }
  let r = {
    p_verse,
    top,
  };
  return r;
}
