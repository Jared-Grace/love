import { ebible_chapter_codes_upload } from "./ebible_chapter_codes_upload.mjs";
import { ebible_version_chapters_all_upload } from "./ebible_version_chapters_all_upload.mjs";
export async function ebible_offline_version_upload(bible_folder) {
  ("the two files a device needs to keep this version for offline reading: the list of which chapters exist, and every chapter in one bundle so the whole bible downloads in a single request");
  await ebible_chapter_codes_upload(bible_folder);
  await ebible_version_chapters_all_upload(bible_folder);
}
