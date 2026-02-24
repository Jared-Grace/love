import { firebase_storage_download_ebible_cache } from "../../../love/public/src/firebase_storage_download_ebible_cache.mjs";
import { ebible_chapter_codes_upload_name } from "../../../love/public/src/ebible_chapter_codes_upload_name.mjs";
export async function ebible_chapter_codes_browser(bible_folder) {
  let file_name = ebible_chapter_codes_upload_name();
  let value = await firebase_storage_download_ebible_cache(
    ebible_chapter_codes_browser,
    bible_folder,
    file_name,
  );
  return value;
}
