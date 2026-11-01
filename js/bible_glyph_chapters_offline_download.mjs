import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_chapter_codes_canonical_browser } from "./ebible_chapter_codes_canonical_browser.mjs";
import { ebible_offline_download_chunk_size } from "./ebible_offline_download_chunk_size.mjs";
import { bible_glyph_chapter_destinations } from "./bible_glyph_chapter_destinations.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { download_cache_key } from "./download_cache_key.mjs";
import { download_cache_put } from "./download_cache_put.mjs";
import { list_size } from "./list_size.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { add } from "./add.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_glyph_chapters_offline_download(on_progress) {
  arguments_assert(arguments, 1);
  ("Keep the whole picture Bible on this device: every chapter in both of the ways it is drawn, saved where a chapter already looks for a copy it read before, so every chapter then opens with no internet. Answers the chapters that still did not arrive.");
  ("IT SAVES INTO THE SAME PLACE READING DOES, rather than a store of its own, so the page needs no second way of finding a chapter: a saved chapter is simply one it has read before.");
  ("A HANDFUL OF CHAPTERS TRAVEL AT ONCE, as many as the bible reader sends, which keeps the connection busy and a slow phone responsive. The count moves per handful, by chapters rather than files, because a reader thinks in chapters.");
  ("A CHAPTER THAT DID NOT ARRIVE IS ASKED FOR ONCE MORE, the way the bible reader asks again, because a dropped fetch on a phone nearly always arrives the second time. Every chapter is published, so what still misses after that is the connection, and the caller says so.");
  ("THE TWO PICTURE TABLES ARE SENT FOR TOO, because a chapter imports them before it draws a word, and a saved chapter that waits on the network for its table is not saved.");
  await import("./bible_glyph_testament_drawn.mjs");
  await import("./bible_glyph_reasons.mjs");
  let project_url = firebase_storage_url_project_jg();
  let chapter_codes = await ebible_chapter_codes_canonical_browser();
  let size = ebible_offline_download_chunk_size();
  async function chapter_save(chapter_code) {
    let destinations = bible_glyph_chapter_destinations(chapter_code);
    for (let destination of destinations) {
      async function fetch() {
        let downloaded = await firebase_storage_download_json_decompress(
          project_url,
          destination,
        );
        return downloaded;
      }
      let value = await catch_null_async(fetch);
      if (null_is(value)) {
        return false;
      }
      let key = download_cache_key(project_url, destination);
      await download_cache_put(key, value);
    }
    return true;
  }
  async function pass(codes) {
    let missed = [];
    let done = 0;
    let total = list_size(codes);
    let chunks = list_chunk(codes, size);
    async function lambda_chunk(chunk) {
      async function one(chapter_code) {
        let saved = await chapter_save(chapter_code);
        if (not(saved)) {
          list_add(missed, chapter_code);
        }
      }
      await list_map_unordered_async(chunk, one);
      let right = list_size(chunk);
      done = add(done, right);
      on_progress(done, total);
    }
    await each_async(chunks, lambda_chunk);
    return missed;
  }
  let missed = await pass(chapter_codes);
  let missed2 = await pass(missed);
  return missed2;
}
