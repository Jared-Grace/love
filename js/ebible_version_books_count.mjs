import { list_size } from "./list_size.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
export async function ebible_version_books_count(bible_folder) {
  let list = await ebible_version_books(bible_folder);
  let size = list_size(list);
  return size;
}
