import { arguments_assert } from "./arguments_assert.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { text_trim } from "./text_trim.mjs";
export function usfm_number_rest(piece) {
  arguments_assert(arguments, 1);
  ("$plain piece");
  ("A piece of usfm that opens with a number, split into that number and everything after it.");
  ("A chapter and a verse are written the same way - the mark, then the number, then the words - so both are read by this one name rather than by two readings that could come to differ.");
  ("The number is kept as it is written rather than counted. A verse spanning two of them is written as one number, a dash and another, and turning that into a count would lose the second half of what the page says the words are.");
  let number = text_split_first(piece, " ");
  let size = text_size(number);
  let after = text_slice_from(piece, size);
  let rest = text_trim(after);
  let both = {
    number,
    rest,
  };
  return both;
}
