import { text_first } from "../../../love/public/src/text_first.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { lookup_adder } from "../../../love/public/src/lookup_adder.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { text_replace_if_starts_with } from "../../../love/public/src/text_replace_if_starts_with.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function sandbox_3() {
  let books = await ebible_version_books("engbsb");
  let mapped2 = list_map_property(books, "text");
  function lambda(book_name) {
    let item3 = text_replace_if_starts_with(book_name, "1 ", "");
    let item4 = text_replace_if_starts_with(item3, "2 ", "");
    return item4;
  }
  let mapped = list_map(mapped2, lambda);
  let unique = list_unique(mapped);
  function lambda2(la) {
    function lambda3(book_name) {
      let key = text_first(book_name);
      la(key,book_name);
    }
    each(unique, lambda3);
  }
  let result = lookup_adder(lambda2);
  return result;
}
