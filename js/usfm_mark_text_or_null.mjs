import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ternary } from "./ternary.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { text_take } from "./text_take.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_trim } from "./text_trim.mjs";
export function usfm_mark_text_or_null(usfm, mark) {
  arguments_assert(arguments, 2);
  ("$plain usfm");
  ("$plain mark");
  ("What one mark of usfm says, the first time the passage uses it - the book's own name after h, its running title after toc1 - or nothing when the passage never uses that mark at all.");
  ("It ends at the next backslash rather than at the end of a line, because a backslash is what begins the next mark and a line break in usfm means nothing. So this reads the same whether the file was written one mark to a line or all of them running together.");
  ("Nothing is a real answer. Not every book names itself, and a book with no name of its own should be given the name this repo already knows it by rather than an empty one.");
  let opener = text_combine_multiple(["\\", mark, " "]);
  let start = text_index_of_try(usfm, opener);
  let unused = less_than(start, 0);
  if (unused) {
    return null;
  }
  let opener_size = text_size(opener);
  let rest = text_slice_from(usfm, start + opener_size);
  ("A mark nothing follows runs to the end of the passage rather than being refused, so the last thing a file says is still readable.");
  let next = text_index_of_try(rest, "\\");
  let last = less_than(next, 0);
  let whole = text_size(rest);
  let end = ternary(last, whole, next);
  let taken = text_take(rest, end);
  let said = text_trim(taken);
  return said;
}
