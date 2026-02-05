import { ebible_class_new } from "../../../love/public/src/ebible_class_new.mjs";
import { ebible_version_books_testament } from "../../../love/public/src/ebible_version_books_testament.mjs";
export async function ebible_version_books_testament_new(bible_folder) {
  const class_new = ebible_class_new();
  let mapped = await ebible_version_books_testament(bible_folder, class_new);
  return mapped;
}
