import { arguments_assert } from "./arguments_assert.mjs";
import { equal_by_property_multiple } from "./equal_by_property_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_copy } from "./json_copy.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
export function reply_bible_references_merged(references) {
  arguments_assert(arguments, 1);
  ("The noted verses with each verse listed once, in the order first said.");
  ("A verse said once whole and once in part was said whole, so it is not quoted back: not quoting wins.");
  let merged = [];
  for (let reference of references) {
    function same_verse(earlier) {
      let same = equal_by_property_multiple(earlier, reference, [
        "chapter_code",
        "verse_number",
      ]);
      return same;
    }
    let found = list_filter(merged, same_verse);
    if (list_empty_is(found)) {
      let item = json_copy(reference);
      list_add(merged, item);
    } else {
      let earlier = list_first(found);
      earlier.quote = earlier.quote && reference.quote;
    }
  }
  return merged;
}
