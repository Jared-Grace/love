import { list_map } from "../../../love/public/src/list_map.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function sandbox_3() {
  let books = await ebible_version_books("engbsb");
  function lambda(item) {}
  let mapped = list_map(list, lambda);
  return books;
}
