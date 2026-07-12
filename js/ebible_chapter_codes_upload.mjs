import { ebible_chapter_codes_upload_name } from "./ebible_chapter_codes_upload_name.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_firebase_upload } from "./ebible_firebase_upload.mjs";
export async function ebible_chapter_codes_upload(bible_folder) {
  let o = await ebible_chapter_codes(bible_folder);
  let file_name = ebible_chapter_codes_upload_name();
  await ebible_firebase_upload(bible_folder, file_name, o);
}
