import { bible_interlinear_verses_upload_folder } from "./bible_interlinear_verses_upload_folder.mjs";
import { bible_interlinear_chapter_codes } from "./bible_interlinear_chapter_codes.mjs";
import { ebible_chapter_codes_upload_name } from "./ebible_chapter_codes_upload_name.mjs";
import { ebible_firebase_upload } from "./ebible_firebase_upload.mjs";
export async function bible_interlinear_chapter_codes_upload() {
  ("publish the original's chapter list (plain, like every other version) so turning the page works both online and offline");
  let bible_folder = bible_interlinear_verses_upload_folder();
  let codes = await bible_interlinear_chapter_codes();
  let file_name = ebible_chapter_codes_upload_name();
  await ebible_firebase_upload(bible_folder, file_name, codes);
}
