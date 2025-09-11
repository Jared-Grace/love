import { ebible_class_new } from "./ebible_class_new.mjs";
import { marker } from "./marker.mjs";
import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
export async function ebible_version_books_testament_new(bible_folder) {
  marker("1");
  const class_old = ebible_class_new();
  let mapped = await ebible_version_books_testament(bible_folder, class_old);
  return mapped;
}
