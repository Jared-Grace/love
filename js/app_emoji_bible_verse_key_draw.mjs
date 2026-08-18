import { html_p_text } from "./html_p_text.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
export function app_emoji_bible_verse_key_draw(content, row) {
  "$plain row";
  "the row holds one verse in pictures, in the language it was written in, and word for word in English. It is text to draw and nothing that runs.";
  "Draw one Rosetta verse: the pictures, and under them the two known readings a person works the pictures out from.";
  "The pictures are drawn at the reader's own size and the key steps back in grey underneath, because the key is a thing to glance down at rather than a thing to read. A key set as loudly as the verse would be read first, and then the pictures above it are decoration rather than the Bible.";
  "The key is drawn as two lines rather than one for the same reason a Rosetta stone has three bands and not one paragraph: a reader knows one of the two languages and not the other, and has to be able to find their own line without reading the other.";
  "The number goes in front of the pictures and in front of neither of the other two, because it numbers the VERSE rather than any one reading of it. Repeating it three times would read as three numbered things where there is one.";
  let numbered = row.verse_number + " " + row.glyphs;
  let verse = html_p_text(content, numbered);
  let original = html_div_text(content, row.original);
  app_shared_text_deemphasized(original);
  let english = html_div_text(content, row.english);
  app_shared_text_deemphasized(english);
  return verse;
}
