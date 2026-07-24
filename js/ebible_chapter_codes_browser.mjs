import { firebase_storage_download_ebible_cache } from "./firebase_storage_download_ebible_cache.mjs";
import { ebible_chapter_codes_upload_name } from "./ebible_chapter_codes_upload_name.mjs";
import { ebible_offline_chapter_codes_get } from "./ebible_offline_chapter_codes_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function ebible_chapter_codes_browser(bible_folder) {
  ("a downloaded bible answers from this device, so turning to the next chapter works with no internet");
  let offline = await ebible_offline_chapter_codes_get(bible_folder);
  if (null_not_is(offline)) {
    return offline;
  }
  let file_name = ebible_chapter_codes_upload_name();
  let value = await firebase_storage_download_ebible_cache(
    ebible_chapter_codes_browser,
    bible_folder,
    file_name,
  );
  return value;
}
