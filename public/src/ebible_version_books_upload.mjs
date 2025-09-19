import { ebible_firebase_upload } from "./ebible_firebase_upload.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_books_upload(bible_folder) {
  marker("1");
  let books = await ebible_version_books(bible_folder);
  await ebible_firebase_upload(bible_folder, "books", {
    books,
  });
  return books;
}
