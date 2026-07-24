import { add } from "./add.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_chapter_codes_browser } from "./ebible_chapter_codes_browser.mjs";
import { ebible_offline_download_chunk_size } from "./ebible_offline_download_chunk_size.mjs";
import { ebible_offline_put_list } from "./ebible_offline_put_list.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_offline_download_chapters(
  bible_folder,
  on_progress,
) {
  "chapter by chapter, a handful at a time, saving each handful before starting the next so progress survives a lost connection";
  let chapter_codes = await ebible_chapter_codes_browser(bible_folder);
  let total = list_size(chapter_codes);
  let done = 0;
  let size = ebible_offline_download_chunk_size();
  let chunks = list_chunk(chapter_codes, size);
  async function lambda_chunk(chunk) {
    async function to_entry(chapter_code) {
      let value = await ebible_verses_storage_browser(
        bible_folder,
        chapter_code,
      );
      let entry = {
        name: chapter_code,
        value,
      };
      return entry;
    }
    let entries = await list_map_unordered_async(chunk, to_entry);
    await ebible_offline_put_list(bible_folder, entries);
    let right = list_size(chunk);
    done = add(done, right);
    on_progress(done, total);
  }
  await each_async(chunks, lambda_chunk);
}
