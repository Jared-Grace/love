import { text_empty_is } from "./text_empty_is.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
export function app_emoji_bible_verse_key_draw(content, row) {
  "$plain row";
  "the row holds one verse in pictures, in the language it was written in, word for word in English, and in plain Tagalog. It is text to draw and nothing that runs.";
  "Draw one Rosetta verse: the pictures, and under them the known readings a person works the pictures out from.";
  "The pictures are drawn at the reader's own size and the key steps back in grey underneath, because the key is a thing to glance down at rather than a thing to read. A key set as loudly as the verse would be read first, and then the pictures above it are decoration rather than the Bible.";
  "The key is drawn as a line each rather than as one paragraph for the same reason a Rosetta stone has bands and not prose: a reader knows one of the languages and not the others, and has to be able to find their own line without reading through anybody else's.";
  "The number goes in front of the pictures and in front of none of the readings, because it numbers the VERSE rather than any one reading of it. Repeating it on every band would read as several numbered things where there is one.";
  "A BAND WITH NOTHING IN IT IS LEFT OUT RATHER THAN DRAWN EMPTY. A translation that has not reached this verse hands back no text, and a blank grey line under the verse says nothing to anybody while looking exactly like a translation that rendered as nothing - so the absent band is simply absent, and the reader sees the keys that exist.";
  let numbered = row.verse_number + " " + row.glyphs;
  let verse = html_p_text(content, numbered);
  let original = html_div_text(content, row.original);
  app_shared_text_deemphasized(original);
  let english = html_div_text(content, row.english);
  app_shared_text_deemphasized(english);
  let no_tagalog = text_empty_is(row.tagalog);
  if (no_tagalog) {
    return verse;
  }
  let tagalog = html_div_text(content, row.tagalog);
  app_shared_text_deemphasized(tagalog);
  return verse;
}
