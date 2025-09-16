import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_books_testament_apocrypha(
  bible_folder,
  selector,
) {
  marker("1");
  return await ebible_version_books_testament(bible_folder, selector);
}
