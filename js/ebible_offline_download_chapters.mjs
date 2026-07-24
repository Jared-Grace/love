import { add } from "./add.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_offline_download_chunk_size } from "./ebible_offline_download_chunk_size.mjs";
import { ebible_offline_put_list } from "./ebible_offline_put_list.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
export async function ebible_offline_download_chapters(
  bible_folder,
  chapter_codes,
  on_progress,
) {
  "chapter by chapter, a handful at a time, saving each handful before starting the next so progress survives a lost connection";
  let total = list_size(chapter_codes);
  let done = 0;
  let size = ebible_offline_download_chunk_size();
  let chunks = list_chunk(chapter_codes, size);
  async function lambda_chunk(chunk) {
    async function to_entry(chapter_code) {
      async function fetch() {
        let v = await ebible_verses_storage_browser(bible_folder, chapter_code);
        return v;
      }
      "a translation that omits a book simply has no file for that chapter, so a miss is skipped rather than failing the whole download";
      let value = await catch_null_async(fetch);
      if (null_is(value)) {
        return null;
      }
      let entry = {
        name: chapter_code,
        value,
      };
      return entry;
    }
    let mapped = await list_map_unordered_async(chunk, to_entry);
    let entries = list_filter_null_not_is(mapped);
    await ebible_offline_put_list(bible_folder, entries);
    let right = list_size(chunk);
    done = add(done, right);
    on_progress(done, total);
  }
  await each_async(chunks, lambda_chunk);
}
