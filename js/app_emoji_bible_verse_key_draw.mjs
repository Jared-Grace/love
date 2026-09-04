import { arguments_assert } from "./arguments_assert.mjs";
import { html_p } from "./html_p.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_emoji_bible_verse_key_band } from "./app_emoji_bible_verse_key_band.mjs";
export function app_emoji_bible_verse_key_draw(content, row, others_shown) {
  "$plain row";
  "$plain others_shown";
  "the row holds one verse in pictures, in the language it was written in, word for word in English, and in plain Tagalog. The answer beside it says whether the bands other than the English are wanted. Both are data to draw and neither runs.";
  "Draw one Rosetta verse: the pictures, and under them the known readings a person works the pictures out from.";
  "THE ENGLISH IS THE BAND THAT IS ALWAYS HERE and the others arrive with the whole key, because a reader who asked only to see what a verse says asked for one line and not for a stack of four. Both offers land in this one function rather than in two, so the two ways of showing a verse cannot drift into looking like two different pages.";
  "The pictures are drawn at the reader's own size and the key steps back in grey underneath, because the key is a thing to glance down at rather than a thing to read. A key set as loudly as the verse would be read first, and then the pictures above it are decoration rather than the Bible.";
  "The key is drawn as a line each rather than as one paragraph for the same reason a Rosetta stone has bands and not prose: a reader knows one of the languages and not the others, and has to be able to find their own line without reading through anybody else's.";
  "The number goes in front of the pictures and in front of none of the readings, because it numbers the VERSE rather than any one reading of it. Repeating it on every band would read as several numbered things where there is one.";
  "THE NUMBER STEPS BACK INTO THE SAME GREY THE KEY IS IN, because it is not part of the verse and never was - it is how a reader finds their place. Set as loudly as the pictures it reads as the first word of the verse, which in a Bible of pictures is the one place a number could be taken for a meaning.";
  "It is two pieces of text in one paragraph rather than one, which is what lets the number be grey while the pictures are not, and a reader copying the verse out still copies one line.";
  "THE WORD GAP ARRIVES ALREADY WIDE AND THIS VIEW NO LONGER TOUCHES IT, which is the second time this line has been fixed and the first time in the right place. The picture band is handed here as one finished piece of plain text, so a mark added at draw time had already been lost by the time it reached this function - and the repair used to be to space the whole line from out here. It is not needed any more, because the gap is now a wide character inside the text rather than a style laid over it, so it survives being joined, being handed on, and being copied out of the page by a reader.";
  arguments_assert(arguments, 3);
  let verse = html_p(content);
  let numbered = row.verse_number + " ";
  let number = html_span_text_content(verse, numbered);
  app_shared_text_deemphasized(number);
  html_span_text_content(verse, row.glyphs);
  if (others_shown) {
    app_emoji_bible_verse_key_band(content, row.original);
  }
  app_emoji_bible_verse_key_band(content, row.english);
  if (others_shown) {
    app_emoji_bible_verse_key_band(content, row.tagalog);
  }
  return verse;
}
