import { ebible_chapters_upload } from "../../../love/public/src/ebible_chapters_upload.mjs";
import { ebible_version_books_upload } from "../../../love/public/src/ebible_version_books_upload.mjs";
export async function ebible_version_upload_second(bible_folder) {
  let books = await ebible_version_books_upload(bible_folder);
  await ebible_chapters_upload(bible_folder);
}
