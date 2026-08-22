import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function g_arc_review_line_apply_mark(marks, line, key, holder) {
  "A line of a review page that begins with the mark of one named field, put onto the thing that field belongs to - answering whether the line was that one, so the reader of the page can go on to the next mark when it was not.";
  "FIVE FIELDS OF A REVIEW PAGE ARE READ BACK THE SAME WAY, and each one was written out on its own: find the mark, see whether the line begins with it, take the mark off the front, put what is left on something. Written five times, the five differ only in which word and which thing, and the first of them to drift would have been the taking-off - which is the step that decides what the reviewer's words turn out to be.";
  "THE MARK AND THE FIELD ARE ONE WORD, not two, because they already were in every one of the five. A page marks a line with the name of the field it holds, so a second name here would let a page be written that says one thing and reads back as another.";
  "THE THING IS HANDED IN RATHER THAN LOOKED UP, because the five do not all put their word in the same place - one goes on the conversation being read, one on the page's own running state, and three on the turn being read. Looking it up here would mean spelling that difference out as a third argument, which is the same choice made worse.";
  arguments_assert(arguments, 4);
  let prefix = property_get(marks, key);
  let marked = text_starts_with(line, prefix);
  if (not(marked)) {
    return false;
  }
  let value = text_prefix_without(line, prefix);
  property_set(holder, key, value);
  return true;
}
