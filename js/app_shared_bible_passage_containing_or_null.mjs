import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
export function app_shared_bible_passage_containing_or_null(
  downloaded,
  verse_number,
) {
  "The passage a verse belongs to, or null when there are no passages or none covers the verse. When two cover it the first is the one, so the reader always lands on the same one.";
  arguments_assert(arguments, 2);
  if (null_is(downloaded)) {
    return null;
  }
  let passages = property_get(downloaded, "passages");
  function covers(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let c = list_includes(verse_numbers, verse_number);
    return c;
  }
  let found = list_find_or_null(passages, covers);
  return found;
}
