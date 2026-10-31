import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_literal_destination } from "./bible_glyph_chapter_literal_destination.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_literal_drawn } from "./bible_glyph_chapter_literal_drawn.mjs";
import { bible_glyph_word_parse } from "./bible_glyph_word_parse.mjs";
export async function bible_glyph_chapter_literal_fetched(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("One chapter drawn word for word from the original, in the page: its interlinear words downloaded and drawn with the picture table this page was built with, each word ready to draw and each holding the original it came from.");
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
    verses.push({
      verse_number: verse.verse_number,
      words: verse.words.map(bible_glyph_word_parse),
      originals: verse.originals,
    });
  }
  let chapter = {
    chapter_code,
    verses,
  };
  return chapter;
}
