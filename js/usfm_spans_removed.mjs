import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_index_of_from_try } from "./text_index_of_from_try.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_take } from "./text_take.mjs";
export function usfm_spans_removed(text, note_mark) {
  arguments_assert(arguments, 2);
  ("$plain text");
  ("$plain marker");
  ("One kind of note taken out of a passage of usfm, leaving the scripture around it exactly as it was.");
  ("A note in usfm is written between a mark and the same mark with a star after it - a footnote between f and f star, a cross reference between x and x star - and everything in between belongs to the note rather than to the verse. So the whole run goes, not the marks alone: keeping the marks' contents would put the footnote's own words into the middle of the sentence they are a note on.");
  ("The opening mark is looked for with a space after it, because the marks are not a set of separate words. Taking f alone would also match the mark that opens a picture, fig, and the picture's caption would then be cut away as though it were a footnote.");
  ("A note left open by a page that never closed it stops the taking rather than swallowing the rest of the book. Half a verse with a stray mark in it is a thing a reader can see is wrong; a chapter that quietly ends early is not.");
  let opener = text_combine_multiple(["\\", note_mark, " "]);
  let closer = text_combine_multiple(["\\", note_mark, "*"]);
  let closer_size = text_size(closer);
  let kept = [];
  let rest = text;
  let going = true;
  while (going) {
    let start = text_index_of_try(rest, opener);
    let none = less_than(start, 0);
    if (none) {
      going = false;
    }
    if (going) {
      let after = text_index_of_from_try(rest, closer, start);
      let unclosed = less_than(after, 0);
      if (unclosed) {
        going = false;
      }
      if (going) {
        let before = text_take(rest, start);
        list_add(kept, before);
        rest = text_slice_from(rest, after + closer_size);
      }
    }
  }
  list_add(kept, rest);
  let joined = list_join(kept, "");
  return joined;
}
