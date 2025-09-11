import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
export async function ebible_version_books_testament_old(bible_folder) {
  const class_old = ".oo";
  let mapped = await ebible_version_books_testament(bible_folder, class_old);
  return mapped;
}
