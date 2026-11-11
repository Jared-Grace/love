import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
export function app_shared_bible_copy_lines_headed(reference, paragraphs) {
  "the lines of a copied passage: the reference sitting directly on top of the first bible's words, then each later bible as its own line, for the copy to set a blank line between";
  "The reference touches the first paragraph with no blank line, the way a printed bible sets a heading over its text - so a blank line in the paste always means one thing, the next bible. The human chose this on 2026-11-09 for one bible and several alike, and it lives here so that every place a verse is copied from pastes it the same way.";
  "Rejected: a blank line after the reference - it gave a blank line two meanings; and a blank line only when several bibles are copied - two shapes where one reads as clearly, since the second paragraph is plainly the same verses again.";
  "With no paragraph at all the reference is the whole of it, as it always was.";
  arguments_assert(arguments, 2);
  let none = list_empty_is(paragraphs);
  if (none) {
    let alone = [reference];
    return alone;
  }
  let first = list_first(paragraphs);
  let headed = list_join_newline([reference, first]);
  let rest = list_skip_1(paragraphs);
  let lines = list_concat_single(headed, rest);
  return lines;
}
