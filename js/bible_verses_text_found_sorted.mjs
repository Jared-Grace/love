import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function bible_verses_text_found_sorted(verses, reader) {
  "Asks one reader of every verse's text and hands back what it found, each answer once, in order.";
  "A reader here answers with the one thing it noticed in a verse or with nothing at all, so the nothings drop out on the way through and only the findings are left. The same finding turns up in verse after verse - that is the point of asking, not a fault - so it is reduced to one of each, and sorted, because what a reader is for is being read by a person and a person reads a list they can scan.";
  arguments_assert(arguments, 2);
  function verse_found(verse) {
    let text = property_get(verse, "text");
    let found = reader(text);
    return found;
  }
  let every = list_map_filter_null_not_is(verses, verse_found);
  let once = list_unique(every);
  list_sort_text(once);
  return once;
}
