import { ebible_version_books } from "./ebible_version_books.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_books_upload(bible_folder) {
  marker("1");
  return await ebible_version_books(bible_folder);
}
