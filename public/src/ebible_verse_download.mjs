import { firebase_storage_download_ebible } from "./firebase_storage_download_ebible.mjs";
import { ebible_verses_upload_name } from "./ebible_verses_upload_name.mjs";
export async function ebible_verse_download(
  bible_folder,
  chapter_code,
  verse_number,
) {
  let n = ebible_verses_upload_name(chapter_code, verse_number);
  let index = await firebase_storage_download_ebible(bible_folder, n);
  return index;
}
