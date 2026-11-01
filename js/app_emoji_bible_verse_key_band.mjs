import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_emoji_bible_verse_key_band(content, text, color) {
  "$plain text";
  "the text is one known reading of the verse above. It is text to draw and nothing that runs.";
  "One band of the key under a picture verse: a line of grey text a reader glances down at.";
  "A BAND WITH NOTHING IN IT IS LEFT OUT RATHER THAN DRAWN EMPTY. A translation that has not reached this verse hands back no text, and a blank grey line under the verse says nothing to anybody while looking exactly like a translation that rendered as nothing - so the absent band is simply absent, and the reader sees the keys that exist.";
  "The absence is answered here rather than at each band, because the bands are drawn in different combinations depending on what the reader asked for, and a check written once per combination is a check that gets forgotten in the newest one.";
  "$plain color";
  "the colour tells this band from the other band beside it, or is null when it stands alone. Data to draw.";
  "A NULL COLOUR MEANS GREY, the key stepping back as before; a colour is handed in only when two bands stand together and must be told apart.";
  arguments_assert(arguments, 3);
  let empty = text_empty_is(text);
  if (empty) {
    return;
  }
  let band = html_div_text(content, text);
  if (equal(color, null)) {
    app_shared_text_deemphasized(band);
  } else {
    html_font_color_set(band, color);
  }
}
