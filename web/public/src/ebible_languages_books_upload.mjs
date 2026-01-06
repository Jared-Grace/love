import { ebible_languages_without_original_bible_folders } from "../../../love/public/src/ebible_languages_without_original_bible_folders.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_version_books_upload } from "../../../love/public/src/ebible_version_books_upload.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_languages_books_upload() {
  marker("1");
  let bible_folders = ebible_languages_without_original_bible_folders();
  await each_async(bible_folders, lambda);
  async function lambda(bible_folder) {
    let books = await ebible_version_books_upload(bible_folder);
  }
}
