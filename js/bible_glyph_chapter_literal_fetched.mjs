import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_literal_destination } from "./bible_glyph_chapter_literal_destination.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_literal_drawn } from "./bible_glyph_chapter_literal_drawn.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { bible_glyph_words_joined } from "./bible_glyph_words_joined.mjs";
import { not_equal } from "./not_equal.mjs";
import { bible_glyph_word_parse } from "./bible_glyph_word_parse.mjs";
export async function bible_glyph_chapter_literal_fetched(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("One chapter drawn word for word from the original, in the page: its interlinear words downloaded and drawn with the picture table this page was built with, each word ready to draw and each holding the original it came from.");
  ("THE PIECES OF ONE ORIGINAL WORD ARE DRAWN AS ONE WORD, joined by ",
    fn_name("bible_glyph_words_joined"),
    " with a small gap between them, so the reader sees where each piece ends and also where the original word ends. Pieces belong to one word when they hold the very same original, which the drawing hands every piece of a word; two neighbouring words spelled alike are still two originals and stay two words.");
  ("THE TABLE IS IMPORTED ONLY WHEN A CHAPTER IS DRAWN, the way the written chapters import it, so the chapter list never pays for thirteen thousand pictures.");
  let destination = bible_glyph_chapter_literal_destination(chapter_code);
  let project_url = firebase_storage_url_project_jg();
  let source = await firebase_storage_download_json_decompress_cache(
    project_url,
    destination,
  );
  let testament_name = bible_chapter_testament_name(chapter_code);
  let tables = await import("./bible_glyph_testament_drawn.mjs");
  let drawn = tables.bible_glyph_testament_drawn(testament_name);
  let literal = bible_glyph_chapter_literal_drawn(
    chapter_code,
    source.verses,
    drawn,
  );
  let verses = [];
  for (let verse of literal.verses) {
    let words = [];
    let originals = [];
    let pieces = [];
    let original_before = null;
    function pieces_flush() {
      if (list_empty_is(pieces)) {
        return;
      }
      let joined = bible_glyph_words_joined(pieces);
      words.push(joined);
      originals.push(original_before);
      pieces = [];
    }
    let index = 0;
    for (let word of verse.words) {
      let original = verse.originals[index];
      index = index + 1;
      if (not_equal(original, original_before)) {
        pieces_flush();
      }
      original_before = original;
      let r = bible_glyph_word_parse(word);
      pieces.push(r);
    }
    pieces_flush();
    verses.push({
      verse_number: verse.verse_number,
      words,
      originals,
    });
  }
  let chapter = {
    chapter_code,
    verses,
  };
  return chapter;
}
