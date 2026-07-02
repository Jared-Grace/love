import { list_to_lookup_text_first } from "../../../love/public/src/list_to_lookup_text_first.mjs";
import { list_map_prefix_without_try_multiple } from "../../../love/public/src/list_map_prefix_without_try_multiple.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function sandbox_3() {
  let books = await ebible_version_books("engbsb");
  let mapped2 = list_map_property(books, "text");
  let prefixes = ["1 ", "2 ", "3 "];
  let mapped = list_map_prefix_without_try_multiple(mapped2, prefixes);
  let unique = list_unique(mapped);
  let result = list_to_lookup_text_first(unique);
  return result;
}
