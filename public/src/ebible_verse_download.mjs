import { firebase_storage_download_json } from "./firebase_storage_download_json.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { ebible_verses_upload_name } from "./ebible_verses_upload_name.mjs";
export async function ebible_verse_download(
  bible_folder,
  chapter_code,
  verse_number,
) {
  let n = ebible_verses_upload_name(chapter_code, verse_number);
  let destination2 = ebible_firebase_upload_path(bible_folder, n);
  let verse = await firebase_storage_download_json(destination2);
  return verse;
}
