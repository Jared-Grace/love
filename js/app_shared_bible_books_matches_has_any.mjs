import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
export function app_shared_bible_books_matches_has_any(item, key) {
  arguments_assert(arguments, 2);
  let any = property_list_empty_not_is(item, key);
  return any;
}
