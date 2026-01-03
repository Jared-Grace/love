import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_version_books_count(bible_folder) {
  marker("1");
  return await ebible_version_books(bible_folder);
}
