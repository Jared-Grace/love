import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
export async function bible_glyph_chapter_downloaded_drawn(
  chapter_code,
  destination,
) {
  arguments_assert(arguments, 2);
  ("$plain chapter_code");
  ("$plain destination");
  ("the code names one chapter, spelled as the chapter codes spell it, and the destination is where in storage that chapter's file sits. Both name something to send for and nothing that runs.");
  ("One picture Bible chapter's file sent for from storage, handed back with the picture table of its testament as it stands in this build.");
  ("WRITTEN ONCE BECAUSE BOTH WAYS OF DRAWING A CHAPTER BEGIN THE SAME WAY. The written chapters and the word-for-word chapters differ in which file they send for and in what they do with it, and in nothing before that.");
  ("A saved copy is handed back first and a fresh one fetched behind it, so a chapter read once opens at once and without a connection.");
  ("THE TABLE IS SENT FOR ONLY WHEN A CHAPTER IS DRAWN. The two tables are over a hundred KiB of source, and the index never draws a word, so the address is spelled out in full where the bundler can read it and split the table into a piece of its own.");
  let project_url = firebase_storage_url_project_jg();
  let downloaded = await firebase_storage_download_json_decompress_cache(
    project_url,
    destination,
  );
  let testament_name = bible_chapter_testament_name(chapter_code);
  let tables = await import("./bible_glyph_testament_drawn.mjs");
  let drawn = tables.bible_glyph_testament_drawn(testament_name);
  let r = {
    downloaded,
    drawn,
  };
  return r;
}
