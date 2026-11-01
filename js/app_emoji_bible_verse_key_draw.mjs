import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_verse_paragraph_draw_html } from "./bible_glyph_verse_paragraph_draw_html.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_shared_bible_verse_colors } from "./app_shared_bible_verse_colors.mjs";
import { list_get } from "./list_get.mjs";
import { app_emoji_bible_verse_key_band } from "./app_emoji_bible_verse_key_band.mjs";
import { each_index } from "./each_index.mjs";
export function app_emoji_bible_verse_key_draw(
  content,
  row,
  original_shown,
  english_shown,
  lookup,
  chapter_code,
) {
  "$plain chapter_code";
  "the code names the chapter the verse is in, handed on so a tapped original word in a band is offered on BibleHub.";
  "$plain row";
  "$plain original_shown";
  "$plain english_shown";
  "the row holds one verse in pictures, in the language it was written in, and in English. The two answers beside it say whether the original and the English are wanted under it. All are data to draw and none runs.";
  "Draw one Rosetta verse: the pictures, and under them the known readings a person works the pictures out from.";
  "EACH LINE COMES WHEN ITS OWN BUTTON ASKS FOR IT, because the buttons name one line each, the original and the English, and a button that brought a line it did not name would be telling the reader something untrue. Both offers land in this one function rather than in two, so the ways of showing a verse cannot drift into looking like different pages.";
  "THE TAGALOG LINE IS NOT DRAWN. It used to come with the whole key, and once the key became the original no button names it. Rejected: bringing it with the original, which a button saying original would not have told the reader; giving it a button of its own, which is a third choice nobody has asked for yet.";
  "The pictures are drawn at the reader's own size and the key steps back in grey underneath, because the key is a thing to glance down at rather than a thing to read. A key set as loudly as the verse would be read first, and then the pictures above it are decoration rather than the Bible.";
  "The key is drawn as a line each rather than as one paragraph for the same reason a Rosetta stone has bands and not prose: a reader knows one of the languages and not the others, and has to be able to find their own line without reading through anybody else's.";
  "The number goes in front of the pictures and in front of none of the readings, because it numbers the VERSE rather than any one reading of it. Repeating it on every band would read as several numbered things where there is one.";
  "THE NUMBER STEPS BACK INTO THE SAME GREY THE KEY IS IN, because it is not part of the verse and never was - it is how a reader finds their place. Set as loudly as the pictures it reads as the first word of the verse, which in a Bible of pictures is the one place a number could be taken for a meaning.";
  "$plain lookup";
  "the lookup is a glyph name to character table, data to draw.";
  "THE PICTURE LINE IS DRAWN WORD BY WORD, the same way the pictures alone are, so a tap on a word here opens it with its meaning there too. It used to arrive as one finished line of text, which looked the same and gave a tap nothing to land on.";
  arguments_assert(arguments, 6);
  let verse = bible_glyph_verse_paragraph_draw_html(
    content,
    row.verse_number,
    row.words,
    row.originals,
    lookup,
  );
  ("TWO BANDS SHOWN TOGETHER TAKE TWO COLOURS, asked for by the human: the same rule the bible reader uses to tell translations apart, so a reader who meets both pages sees one rule. A band alone stays grey, since a colour there would tell it apart from nothing. Only bands with text are counted, or an empty English would still colour the lone original.");
  let texts = [];
  function text_add(text) {
    let has = text_empty_not_is(text);
    if (has) {
      list_add(texts, text);
    }
  }
  if (original_shown) {
    text_add(row.original);
  }
  if (english_shown) {
    text_add(row.english);
  }
  let colored = list_multiple_is(texts);
  let colors = app_shared_bible_verse_colors(texts);
  function band_draw(text, index) {
    let color = colored ? list_get(colors, index) : null;
    app_emoji_bible_verse_key_band(
      content,
      text,
      color,
      chapter_code,
      row.verse_number,
    );
  }
  each_index(texts, band_draw);
  return verse;
}
