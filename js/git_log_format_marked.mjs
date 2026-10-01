import { arguments_assert } from "./arguments_assert.mjs";
import { git_log_mark } from "./git_log_mark.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function git_log_format_marked(stamp) {
  "The word that asks git to announce each commit with one of its own stamps, on a line marked out from the file names that follow it.";
  "The stamp is given rather than decided here because callers want different ones - a second for comparing against a clock, a day for showing somebody - and the marking is the same whichever is asked for.";
  "Pairing it with the one place that holds the mark is the whole point: a reader of this stream looks for the mark at the start of a line, and a format written out by hand beside a reader written out by hand is two spellings of one agreement.";
  arguments_assert(arguments, 1);
  let mark = git_log_mark();
  let word = text_combine_multiple(["--format=", mark, stamp]);
  return word;
}
