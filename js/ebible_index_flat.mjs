import { ebible_offline_index_flat_name } from "./ebible_offline_index_flat_name.mjs";
import { ebible_offline_downloaded_get } from "./ebible_offline_downloaded_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { ebible_offline_index_flat_keep } from "./ebible_offline_index_flat_keep.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
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
    ("a bible kept on this device is read from this device, index and all. it was not, and a reader who had waited out a whole download still waited on the network for this before a word appeared - measured at four seconds on a page whose chapters came back in four milliseconds, which is the whole of why a passage felt slow to somebody who knew they had saved it.");
    let name = ebible_offline_index_flat_name();
    let kept = await ebible_offline_downloaded_get(bible_folder, name);
    if (null_not_is(kept)) {
      return kept;
    }
    let file_name = ebible_index_flat_upload_name();
    let value = await firebase_storage_download_ebible_cache(
      ebible_index_flat,
      bible_folder,
      file_name,
    );
    await ebible_offline_index_flat_keep(bible_folder, value);
    return value;
  }
  async function lambda(la) {
    await ebible_chapters_each_verses(bible_folder, each_chapter);
    async function each_chapter(chapter_code, verses) {
      let property_name = verse_number_key();
      let verse_numbers = list_map_property(verses, property_name);
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
