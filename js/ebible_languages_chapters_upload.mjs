import { ebible_chapters_upload } from "./ebible_chapters_upload.mjs";
import { ebible_languages_without_original_bible_folders_each } from "./ebible_languages_without_original_bible_folders_each.mjs";
export async function ebible_languages_chapters_upload() {
  "Uploads the chapters of every language that has no original-language text of its own, one bible folder after another.";
  await ebible_languages_without_original_bible_folders_each(lambda);
  async function lambda(bible_folder) {
    await ebible_chapters_upload(bible_folder);
  }
}
