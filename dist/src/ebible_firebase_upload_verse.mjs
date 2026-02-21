import { ebible_verse_merge } from "../../../love/public/src/ebible_verse_merge.mjs";
import { ebible_firebase_upload } from "../../../love/public/src/ebible_firebase_upload.mjs";
import { ebible_verses_upload_name } from "../../../love/public/src/ebible_verses_upload_name.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function ebible_firebase_upload_verse(
  v,
  chapter_code,
  bible_folder,
) {
  let verse_number = property_get(v, "verse_number");
  let joined2 = ebible_verses_upload_name(chapter_code, verse_number);
  let verse = ebible_verse_merge(bible_folder, chapter_code, v);
  await ebible_firebase_upload(bible_folder, joined2, verse);
}
