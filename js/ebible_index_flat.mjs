import { browser_is } from "./browser_is.mjs";
import { ebible_offline_index_flat_name } from "./ebible_offline_index_flat_name.mjs";
import { ebible_offline_downloaded_get } from "./ebible_offline_downloaded_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { equal } from "./equal.mjs";
import { ebible_offline_index_flat_english_name } from "./ebible_offline_index_flat_english_name.mjs";
import { ebible_offline_kept_any_get } from "./ebible_offline_kept_any_get.mjs";
import { ebible_index_flat_upload_name } from "./ebible_index_flat_upload_name.mjs";
import { firebase_storage_download_ebible_cache } from "./firebase_storage_download_ebible_cache.mjs";
import { ebible_offline_index_flat_keep } from "./ebible_offline_index_flat_keep.mjs";
import { ebible_offline_index_flat_english_keep } from "./ebible_offline_index_flat_english_keep.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
import { fn_name } from "./fn_name.mjs";
export async function ebible_index_flat(bible_folder) {
  let b = browser_is();
  if (b) {
    ("a bible kept on this device is read from this device, index and all. it was not, and a reader who had waited out a whole download still waited on the network for this before a word appeared - measured at four seconds on a page whose chapters came back in four milliseconds, which is the whole of why a passage felt slow to somebody who knew they had saved it.");
    let name = ebible_offline_index_flat_name();
    let kept = await ebible_offline_downloaded_get(bible_folder, name);
    if (null_not_is(kept)) {
      return kept;
    }
    let english = ebible_folder_english();
    let english_is = equal(bible_folder, english);
    if (english_is) {
      ("English's index is asked for by every page whatever language is read, for the order the chapters come in. every saved bible keeps a copy of it, so a reader who saved only their own language still opens the book list with no internet.");
      let name_english = ebible_offline_index_flat_english_name();
      let kept_english = await ebible_offline_kept_any_get(name_english);
      if (null_not_is(kept_english)) {
        return kept_english;
      }
    }
    let file_name = ebible_index_flat_upload_name();
    let value = await firebase_storage_download_ebible_cache(
      ebible_index_flat,
      bible_folder,
      file_name,
    );
    await ebible_offline_index_flat_keep(bible_folder, value);
    if (english_is) {
      await ebible_offline_index_flat_english_keep(value);
    }
    return value;
  }
  ("★ THE OTHER HALF IS ASKED FOR BY NAME RATHER THAN IMPORTED. Branching here stops a page WALKING the road that reads a whole bible off a disk; it does nothing about the page CARRYING it, because a bundler follows a plain import whether the branch runs or not. Named and fetched at the moment it is wanted, the fetching, the unzipping and the chapter-by-chapter reading are not in the page at all.");
  let fn = await function_import_relative(fn_name("ebible_index_flat_node"));
  let list = await fn(bible_folder);
  return list;
}
