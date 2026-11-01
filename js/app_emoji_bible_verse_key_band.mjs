import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_bible_verse_line } from "./app_shared_bible_verse_line.mjs";
import { equal } from "./equal.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
export function app_emoji_bible_verse_key_band(
  content,
  text,
  color,
  chapter_code,
  verse_number,
) {
  "$plain chapter_code";
  "$plain verse_number";
  "the code and number say which verse the band reads, so a tapped Hebrew or Greek word in it is offered on BibleHub. Data handed on.";
  "$plain text";
  "the text is one known reading of the verse above. It is text to draw and nothing that runs.";
  "One band of the key under a picture verse: a line of grey text a reader glances down at.";
  "A BAND WITH NOTHING IN IT IS LEFT OUT RATHER THAN DRAWN EMPTY. A translation that has not reached this verse hands back no text, and a blank grey line under the verse says nothing to anybody while looking exactly like a translation that rendered as nothing - so the absent band is simply absent, and the reader sees the keys that exist.";
  "The absence is answered here rather than at each band, because the bands are drawn in different combinations depending on what the reader asked for, and a check written once per combination is a check that gets forgotten in the newest one.";
  "$plain color";
  "the colour tells this band from the other band beside it, or is null when it stands alone. Data to draw.";
  "A NULL COLOUR MEANS GREY, the key stepping back as before; a colour is handed in only when two bands stand together and must be told apart.";
  arguments_assert(arguments, 5);
  let empty = text_empty_is(text);
  if (empty) {
    return;
  }
  ("A BAND IS DRAWN BY THE BIBLE READER'S OWN VERSE LINE, asked for by the human, so a tap on any word of it opens the same card the reader opens - the word large, an article when one is known, a search and the AI sites - and the line reads in its own direction the same way. Rejected: making only the English tappable, which would need a second way of drawing a band that the reader does not have; the reader makes every translation's words tappable, the original's included.");
  let band = app_shared_bible_verse_line(
    content,
    "",
    text,
    color,
    chapter_code,
    verse_number,
  );
  if (equal(color, null)) {
    app_shared_text_deemphasized(band);
  }
}
