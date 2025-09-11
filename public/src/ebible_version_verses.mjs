import { ebible_version_books_testament_old } from "./ebible_version_books_testament_old.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_verses(bible_folder) {
  let mapped = await ebible_version_books_testament_old(bible_folder);
  return mapped;
  marker("1");
}
