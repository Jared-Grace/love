import { arguments_assert } from "./arguments_assert.mjs";
import { text_prefix_without_inner } from "./text_prefix_without_inner.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
export function ebible_reference_chapter_verses_or_null(line, matched) {
  "The chapter and verses a hand-written passage line carries after the book name it was matched on, or nothing where the line carries none.";
  "IT IS THE FIRST WORD AFTER THE NAME AND NOTHING FURTHER, because a passage line is a reference and may be followed by anything a person felt like writing. Taking the whole of the rest would carry that along into a chapter code.";
  "A LINE WITH NOTHING AFTER THE NAME COMES BACK AS NOTHING rather than as an empty chapter, because a book name on its own is not a passage and a caller that took an empty word for one would ask a bible for a chapter it never named.";
  "The name that was matched is handed in rather than found again, because it is the caller's match that decides where the reference begins and matching a second time here could land somewhere else.";
  arguments_assert(arguments, 2);
  let after = text_prefix_without_inner(line, matched);
  let parts = text_split_space(after);
  let filtered = list_filter_text_empty_not_is(parts);
  let empty = list_empty_is(filtered);
  if (empty) {
    return null;
  }
  let chapter_verses = list_first(filtered);
  return chapter_verses;
}
