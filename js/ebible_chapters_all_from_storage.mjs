import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_verses_storage_get } from "./ebible_verses_storage_get.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_chapters_all_from_storage(bible_folder) {
  ("rebuild the whole-bible bundle by reading the per-chapter files already in storage, a handful at a time; a chapter a translation lacks simply has no file and is skipped, so a versification gap can never fail the build");
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let chunks = list_chunk(chapter_codes, 24);
  let chapters = [];
  async function lambda_chunk(chunk) {
    async function to_entry(chapter_code) {
      async function get() {
        let verses = await ebible_verses_storage_get(
          bible_folder,
          chapter_code,
        );
        let entry = {
          chapter_code,
          verses,
        };
        return entry;
      }
      let entry = await catch_null_async(get);
      return entry;
    }
    let entries = await list_map_unordered_async(chunk, to_entry);
    list_add_multiple(chapters, entries);
  }
  await each_async(chunks, lambda_chunk);
  let filtered = list_filter_null_not_is(chapters);
  return filtered;
}
