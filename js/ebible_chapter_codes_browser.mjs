import { ebible_offline_chapter_codes_get } from "./ebible_offline_chapter_codes_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { equal } from "./equal.mjs";
import { ebible_offline_chapter_codes_name } from "./ebible_offline_chapter_codes_name.mjs";
import { ebible_offline_kept_any_get } from "./ebible_offline_kept_any_get.mjs";
import { ebible_chapter_codes_upload_name } from "./ebible_chapter_codes_upload_name.mjs";
import { firebase_storage_download_ebible_cache } from "./firebase_storage_download_ebible_cache.mjs";
export async function ebible_chapter_codes_browser(bible_folder) {
  "a downloaded bible answers from this device, so turning to the next chapter works with no internet";
  let offline = await ebible_offline_chapter_codes_get(bible_folder);
  if (null_not_is(offline)) {
    return offline;
  }
  let english = ebible_folder_english();
  let english_is = equal(bible_folder, english);
  if (english_is) {
    ("every saved bible keeps English's list of chapters beside it, because that is the list every page turns through - so a reader who saved only their own language still turns to the next chapter with no internet");
    let name = ebible_offline_chapter_codes_name();
    let kept = await ebible_offline_kept_any_get(name);
    if (null_not_is(kept)) {
      return kept;
    }
  }
  let file_name = ebible_chapter_codes_upload_name();
  let value = await firebase_storage_download_ebible_cache(
    ebible_chapter_codes_browser,
    bible_folder,
    file_name,
  );
  return value;
}
