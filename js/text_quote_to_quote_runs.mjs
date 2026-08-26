import { arguments_assert } from "./arguments_assert.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { text_index_of_from_try } from "./text_index_of_from_try.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export function text_quote_to_quote_runs(t) {
  arguments_assert(arguments, 1);
  ("Every stretch of a text that runs from one quotation mark to the next, kept exactly as written and keeping both marks.");
  ("This is not a reading of the strings a file holds. A mark inside a comment, inside a written pattern, or standing in the middle of a longer sentence opens a stretch here like any other, and that is wanted: what this answers is whether some exact quoted spelling is written anywhere in a file, which is a question about the writing and not about the code. The neighbour that does read strings properly is text_quote_end_index, which minds escapes and which kind of mark opened the run.");
  ("The stretches overlap, each one starting on the mark the one before it ended on. Carrying on past that mark instead would lose every spelling that begins where another ends: the run standing between two strings is itself a spelling some file gets its value from, and a scan that stepped over it would report that file as not holding it at all.");
  ("So a spelling can only be looked for here if it carries no quotation mark inside it, since such a spelling's own closing mark is by definition the next one along. One that carries a mark of its own is invisible to this and its asker has to search the whole text instead.");
  let runs = [];
  let opened = text_index_of_try(t, '"');
  while (greater_than_equal(opened, 0)) {
    let closed = text_index_of_from_try(t, '"', add(opened, 1));
    if (less_than(closed, 0)) {
      return runs;
    }
    let run = t.slice(opened, add(closed, 1));
    list_add(runs, run);
    opened = closed;
  }
  return runs;
}
