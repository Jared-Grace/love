import { ebible_chapters_upload } from "../../../love/public/src/ebible_chapters_upload.mjs";
import { ebible_languages_without_original_bible_folders_each } from "../../../love/public/src/ebible_languages_without_original_bible_folders_each.mjs";
export async function ebible_languages_chapters_upload() {
  await ebible_languages_without_original_bible_folders_each(lambda);
  async function lambda(bible_folder) {
    await ebible_chapters_upload(bible_folder);
  }
}
