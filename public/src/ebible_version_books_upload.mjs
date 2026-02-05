import { ebible_version_books_upload_name } from "../../../love/public/src/ebible_version_books_upload_name.mjs";
import { ebible_firebase_upload } from "../../../love/public/src/ebible_firebase_upload.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function ebible_version_books_upload(bible_folder) {
  let books = await ebible_version_books(bible_folder);
  let file_name = ebible_version_books_upload_name();
  await ebible_firebase_upload(bible_folder, file_name, {
    books,
  });
  return books;
}
