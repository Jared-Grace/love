import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function bible_verses_text_found_sorted(verses, reader) {
  arguments_assert(arguments, 2);
  ("Everything one reader finds in the text of a list of verses, each thing said once");
  ("and the whole answer put in order.");
  ("MEASURING A CHAPTER MEANS ASKING SEVERAL DIFFERENT QUESTIONS OF THE SAME VERSES,");
  ("and every one of them was being asked in the same six lines: reach into the verse");
  ("for its words, hand them to a reader that answers or does not, drop the verses it");
  ("had no answer for, keep each answer once, and sort. Only the reader differed. Six");
  ("lines written three times is three chances for one of them to be written slightly");
  ("differently - a sort left off one of them, say - and nothing would go red; the");
  ("report would simply come back in a different order for one column than the other");
  ("two.");
  ("THE READER SAYS NO BY ANSWERING NOTHING, which is the same way every reader of a");
  ("verse end here already says it. So a reader can be handed straight in rather than");
  ("wrapped in a test of its own, and what a caller writes is the name of the question");
  ("it is asking and nothing else.");
  ("IN ORDER RATHER THAN IN THE ORDER MET, because the answer is read by a person and");
  ("compared against the same answer from another bible. Met-order carries which verse");
  ("happened to come first, which is a fact about the chapter and not about the bible,");
  ("and it makes two identical findings look unalike.");
  function bible_verses_text_found_lambda(verse) {
    let text = property_get(verse, "text");
    let found = reader(text);
    return found;
  }
  let each = list_map_filter_null_not_is(
    verses,
    bible_verses_text_found_lambda,
  );
  let once = list_unique(each);
  list_sort_text(once);
  return once;
}
