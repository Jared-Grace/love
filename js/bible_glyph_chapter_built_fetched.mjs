import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_built_destination } from "./bible_glyph_chapter_built_destination.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_glyph_chapter_built_parsed } from "./bible_glyph_chapter_built_parsed.mjs";
export async function bible_glyph_chapter_built_fetched(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter, spelled as the chapter codes spell it. It names a chapter to send for and nothing that runs.");
  ("One built picture Bible chapter sent for from storage and drawn from the picture table as it stands in this build, in the parsed form every drawing of a chapter reads.");
  ("THE CHAPTER COMES FROM STORAGE AND THE PICTURES FROM THE PAGE. The chapter says only which word stands where, and ",
    fn_name("bible_glyph_chapters_built_upload"),
    " put it there; which picture draws each word is the table this page was built with. So seating a new picture changes every chapter on the next build without a single chapter being uploaded again.");
  ("THE TABLE IS SENT FOR ONLY WHEN A CHAPTER IS DRAWN. The two tables are over a hundred KiB of source, and the index never draws a word, so the address is spelled out in full where the bundler can read it and split the table into a piece of its own.");
  ("A saved copy is handed back first and a fresh one fetched behind it, so a chapter read once opens at once and without a connection.");
  let destination = bible_glyph_chapter_built_destination(chapter_code);
  let project_url = firebase_storage_url_project_jg();
  let built = await firebase_storage_download_json_decompress_cache(
    project_url,
    destination,
  );
  let testament_name = bible_chapter_testament_name(chapter_code);
  let tables = await import("./bible_glyph_roots_testament_table.mjs");
  let roots = tables.bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let chapter = bible_glyph_chapter_built_parsed(built, drawn);
  return chapter;
}
