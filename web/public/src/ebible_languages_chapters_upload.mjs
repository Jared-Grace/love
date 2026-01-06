import { ebible_chapters_upload } from "../../../love/public/src/ebible_chapters_upload.mjs";
import { ebible_languages_without_original_bible_folders_each } from "../../../love/public/src/ebible_languages_without_original_bible_folders_each.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_languages_chapters_upload() {
  marker("1");
  await ebible_languages_without_original_bible_folders_each(lambda);
  async function lambda(bible_folder) {
    let books = await ebible_chapters_upload(bible_folder);
  }
}
