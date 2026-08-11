import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_any } from "./list_any.mjs";
export function js_code_prose_split_is(code) {
  arguments_assert(arguments, 1);
  ("Whether this source holds a paragraph that has been broken across more than one line, which is the one shape the reader that gathers explanations by reading lines cannot see.");
  ("A paragraph naming a function spells the name as a reference, so a comma sits inside the brackets and the formatter puts what follows on its own line. The opening line then reads as a bracket, a quote, the sentence, a quote and a comma - and never reaches the semicolon that tells a line reader the statement ended. Every line of it fails the test for being a whole quoted string, so the whole paragraph is passed over.");
  ("Asked so that a reading which would otherwise parse every file in the repo parses only the files that could possibly be hiding something. A hundred and forty-nine files answer yes out of nearly eight thousand, and the answer costs a walk over the lines that were being split anyway.");
  ("Answering yes does not promise a paragraph is there, only that one could be. The caller parses and finds out; a wrong yes costs one parse and a wrong no would cost a paragraph, so the test is written to err towards yes.");
  let lines = text_split_newline(code);
  function opening_is(line) {
    let trimmed = text_trim(line);
    let held = text_starts_with(trimmed, '("');
    let unfinished = text_ends_with(trimmed, '",');
    let both = held && unfinished;
    return both;
  }
  let found = list_any(lines, opening_is);
  return found;
}
