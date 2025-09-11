import { marker } from "./marker.mjs";
import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
export async function ebible_version_books_testament_new(bible_folder) {
  marker("1");
  const class_old = "nn";
  let mapped = await ebible_version_books_testament(bible_folder, class_old);
  return mapped;
}
