import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function diff_lines_kind_counts(placed) {
  "How many of a difference's changed lines are paragraphs put in, paragraphs taken out, values chosen, and lines of program.";
  "TWO READINGS WERE COUNTING THE SAME THING SIDE BY SIDE. One asked whether prose was touched and whether anything else was, the other asked which way the prose went; both walked the changed lines and both called the same reading on each one, so the walk was written out twice and only the arithmetic after it differed.";
  "IMPORTS ARE COUNTED IN NEITHER, and that is the one place the two callers agreed already. A repaired import is the canonicalizing pass's own work wearing a hand-made label, so counting it would make an edit that reworded a paragraph and let the pass tidy up look like an edit that also changed the program.";
  "THE TWO DIRECTIONS ARE KEPT APART even though one caller adds them straight back together. Which way a paragraph went is the whole of what tells an addition from a rewording, and a caller that does not care can add two numbers far more easily than a caller that does can take one apart.";
  "A VALUE CHOSEN IS COUNTED ON ITS OWN, apart from both the paragraphs and the program. A number raised in a record is neither a sentence a prose verb would have written nor a line standing for a command that was missing, so folding it into either one answers a different question from the one being asked - and every caller here is asking what a named command would have made outright.";
  "A VALUE GOES BOTH WAYS TOO, and it is split here for the same reason a paragraph is. Which way a value went is the whole of what tells an entry added from a value put in place of another, and that is the question a reading of the values alone has to ask first.";
  "A NAME STANDING ALONE IS COUNTED APART FROM BOTH, and it is the one count here that is a doubt rather than a fact. That shape is written the same way whether it is an entry of a list, a part of a record, or an argument of a call broken over several lines, so no reading of the line can place it; carried as its own number it goes on counting as something other than a value, which is what it did before, while a reader who wants to know how far the values could be out can now read the size of the doubt instead of being told about it.";
  "THE KIND ARRIVES WITH THE LINE RATHER THAN BEING WORKED OUT HERE. A line holding one word alone is settled by the file it came from and not by anything on the line, so a count that read the line again would go on counting the doubt after it had been answered - and it would answer differently from the reading standing beside it, which does take the settled kind.";
  arguments_assert(arguments, 1);
  let prose_put_in = 0;
  let prose_taken_out = 0;
  let code = 0;
  let data_put_in = 0;
  let data_taken_out = 0;
  let name_alone = 0;
  for (let record of placed) {
    let line = property_get(record, "line");
    let kind = property_get(record, "kind");
    let added_is = text_starts_with(line, "+");
    let code_is = equal(kind, "code");
    if (code_is) {
      code = add(code, 1);
      continue;
    }
    let alone_is = equal(kind, "name alone");
    if (alone_is) {
      name_alone = add(name_alone, 1);
      continue;
    }
    let data_is = equal(kind, "data");
    if (data_is) {
      if (added_is) {
        data_put_in = add(data_put_in, 1);
        continue;
      }
      data_taken_out = add(data_taken_out, 1);
      continue;
    }
    let prose_is = equal(kind, "comment");
    if (not(prose_is)) {
      continue;
    }
    if (added_is) {
      prose_put_in = add(prose_put_in, 1);
      continue;
    }
    prose_taken_out = add(prose_taken_out, 1);
  }
  let counts = {
    prose_put_in,
    prose_taken_out,
    code,
    data_put_in,
    data_taken_out,
    name_alone,
  };
  return counts;
}
