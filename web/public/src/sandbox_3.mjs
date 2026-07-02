import { list_map_prefix_without_try_multiple } from "../../../love/public/src/list_map_prefix_without_try_multiple.mjs";
import { text_first } from "../../../love/public/src/text_first.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { lookup_adder } from "../../../love/public/src/lookup_adder.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function sandbox_3() {
  let books = await ebible_version_books("engbsb");
  let mapped2 = list_map_property(books, "text");
  function lambda(book_name) {
    let prefixes = ["1 ", "2 "];
    let item3 = list_map_prefix_without_try_multiple(book_name, prefixes);
    return item3;
  }
  let mapped = list_map(mapped2, lambda);
  let unique = list_unique(mapped);
  function lambda2(la) {
    function lambda3(book_name) {
      let key = text_first(book_name);
      la(key, book_name);
    }
    each(unique, lambda3);
  }
  let result = lookup_adder(lambda2);
  return result;
}
