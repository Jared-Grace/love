import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_verses(bible_folder) {
  const class_old = "oo";
  let mapped = await ebible_version_books_testament(bible_folder, class_old);
  return mapped;
  marker("1");
}
