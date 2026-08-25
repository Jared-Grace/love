import { arguments_assert } from "./arguments_assert.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { add } from "./add.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function diff_lines_kind_counts(changed) {
  "How many of a difference's changed lines are paragraphs put in, paragraphs taken out, values chosen, and lines of program.";
  "TWO READINGS WERE COUNTING THE SAME THING SIDE BY SIDE. One asked whether prose was touched and whether anything else was, the other asked which way the prose went; both walked the changed lines and both called the same reading on each one, so the walk was written out twice and only the arithmetic after it differed.";
  "IMPORTS ARE COUNTED IN NEITHER, and that is the one place the two callers agreed already. A repaired import is the canonicalizing pass's own work wearing a hand-made label, so counting it would make an edit that reworded a paragraph and let the pass tidy up look like an edit that also changed the program.";
  "THE TWO DIRECTIONS ARE KEPT APART even though one caller adds them straight back together. Which way a paragraph went is the whole of what tells an addition from a rewording, and a caller that does not care can add two numbers far more easily than a caller that does can take one apart.";
  "A VALUE CHOSEN IS COUNTED ON ITS OWN, apart from both the paragraphs and the program. A number raised in a record is neither a sentence a prose verb would have written nor a line standing for a command that was missing, so folding it into either one answers a different question from the one being asked - and every caller here is asking what a named command would have made outright.";
  arguments_assert(arguments, 1);
  let put_in = 0;
  let taken_out = 0;
  let code = 0;
  let data = 0;
  for (let line of changed) {
    let kind = diff_line_kind(line);
    let code_is = equal(kind, "code");
    if (code_is) {
      code = add(code, 1);
      continue;
    }
    let data_is = equal(kind, "data");
    if (data_is) {
      data = add(data, 1);
      continue;
    }
    let prose_is = equal(kind, "comment");
    if (not(prose_is)) {
      continue;
    }
    let added_is = text_starts_with(line, "+");
    if (added_is) {
      put_in = add(put_in, 1);
      continue;
    }
    taken_out = add(taken_out, 1);
  }
  let counts = {
    put_in,
    taken_out,
    code,
    data,
  };
  return counts;
}
