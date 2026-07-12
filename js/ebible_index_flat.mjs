import { firebase_storage_download_ebible_cache } from "./firebase_storage_download_ebible_cache.mjs";
import { ebible_index_flat_upload_name } from "./ebible_index_flat_upload_name.mjs";
import { browser_is } from "./browser_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { each } from "./each.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
export async function ebible_index_flat(bible_folder) {
  let b = browser_is();
  if (b) {
    let file_name = ebible_index_flat_upload_name();
    let value = await firebase_storage_download_ebible_cache(
      ebible_index_flat,
      bible_folder,
      file_name,
    );
    return value;
  }
  async function lambda(la) {
    await ebible_chapters_each_verses(bible_folder, each_chapter);
    async function each_chapter(chapter_code, verses) {
      let verse_numbers = list_map_property(verses, "verse_number");
      function lambda2(verse_number) {
        la({
          chapter_code,
          verse_number,
        });
      }
      each(verse_numbers, lambda2);
    }
  }
  let list = await list_adder_async(lambda);
  return list;
}
