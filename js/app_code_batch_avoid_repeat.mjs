import { property_equals } from "./property_equals.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_batch_avoid_repeat(items, last_question) {
  "if the first item repeats last_question (the previous batch's last question) and there is more than one item, move it to the end so examples never repeat back-to-back; returns the question to remember for next time (the new last item's question)";
  let empty = list_empty_is(items);
  if (empty) {
    return last_question;
  }
  let multiple = list_multiple_is(items);
  if (multiple) {
    let first = list_first(items);
    let repeats = property_equals(first, "question", last_question);
    if (repeats) {
      let index_front = 0;
      list_remove_at(items, index_front);
      list_add(items, first);
    }
  }
  let last = list_last(items);
  let remembered = property_get(last, "question");
  return remembered;
}
