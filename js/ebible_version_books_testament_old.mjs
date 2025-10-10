import { ebible_class_old } from "../../../love/public/src/ebible_class_old.mjs";
import { ebible_version_books_testament } from "../../../love/public/src/ebible_version_books_testament.mjs";
export async function ebible_version_books_testament_old(bible_folder) {
  const class_old = ebible_class_old();
  let mapped = await ebible_version_books_testament(bible_folder, class_old);
  return mapped;
}
