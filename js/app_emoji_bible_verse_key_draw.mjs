import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_verse_paragraph_draw_html } from "./bible_glyph_verse_paragraph_draw_html.mjs";
import { app_emoji_bible_verse_key_band } from "./app_emoji_bible_verse_key_band.mjs";
export function app_emoji_bible_verse_key_draw(
  content,
  row,
  others_shown,
  lookup,
) {
  "$plain row";
  "$plain others_shown";
  "the row holds one verse in pictures, in the language it was written in, in English, and in plain Tagalog. The answer beside it says whether the bands other than the English are wanted. Both are data to draw and neither runs.";
  "Draw one Rosetta verse: the pictures, and under them the known readings a person works the pictures out from.";
  "THE ENGLISH IS THE BAND THAT IS ALWAYS HERE and the others arrive with the whole key, because a reader who asked only to see what a verse says asked for one line and not for a stack of four. Both offers land in this one function rather than in two, so the two ways of showing a verse cannot drift into looking like two different pages.";
  "The pictures are drawn at the reader's own size and the key steps back in grey underneath, because the key is a thing to glance down at rather than a thing to read. A key set as loudly as the verse would be read first, and then the pictures above it are decoration rather than the Bible.";
  "The key is drawn as a line each rather than as one paragraph for the same reason a Rosetta stone has bands and not prose: a reader knows one of the languages and not the others, and has to be able to find their own line without reading through anybody else's.";
  "The number goes in front of the pictures and in front of none of the readings, because it numbers the VERSE rather than any one reading of it. Repeating it on every band would read as several numbered things where there is one.";
  "THE NUMBER STEPS BACK INTO THE SAME GREY THE KEY IS IN, because it is not part of the verse and never was - it is how a reader finds their place. Set as loudly as the pictures it reads as the first word of the verse, which in a Bible of pictures is the one place a number could be taken for a meaning.";
  "$plain lookup";
  "the lookup is a glyph name to character table, data to draw.";
  "THE PICTURE LINE IS DRAWN WORD BY WORD, the same way the pictures alone are, so a tap on a word here opens it with its meaning there too. It used to arrive as one finished line of text, which looked the same and gave a tap nothing to land on.";
  arguments_assert(arguments, 4);
  let verse = bible_glyph_verse_paragraph_draw_html(
    content,
    row.verse_number,
    row.words,
    lookup,
  );
  if (others_shown) {
    app_emoji_bible_verse_key_band(content, row.original);
  }
  app_emoji_bible_verse_key_band(content, row.english);
  if (others_shown) {
    app_emoji_bible_verse_key_band(content, row.tagalog);
  }
  return verse;
}
