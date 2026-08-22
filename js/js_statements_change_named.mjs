import { js_statements_change_both_ways_named } from "./js_statements_change_both_ways_named.mjs";
import { js_statements_change_replaced_named } from "./js_statements_change_replaced_named.mjs";
import { js_statements_change_one_direction_named } from "./js_statements_change_one_direction_named.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_unparse_multiple } from "./js_unparse_multiple.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export function js_statements_change_named(before, after) {
  "What happened between two readings of one run of statements, named as the kind of edit it was rather than counted as lines.";
  "THE NAME IS MEANT TO BE THE SPECIFICATION OF A COMMAND. A count of lines says how big an edit was and never what it did, so a bucket named several lines of code names no transform anybody could go and write. Statements reordered does, and so does one statement replaced.";
  "IT COMPARES THE STATEMENTS WRITTEN BACK OUT rather than the trees themselves. Two trees carry positions, comments and the raw text of every literal, so no two readings of the same file are ever equal as trees - written back out by the one printer this repo uses, two statements are the same text exactly when they are the same statement.";
  "AN ADDITION IS ONLY AN ADDITION WHERE EVERYTHING ELSE STAYED PUT. Nothing having been taken out is not enough on its own: the same statements in a different order also take nothing out, and calling that an addition would hide the one edit a reordering command exists to make.";
  arguments_assert(arguments, 2);
  let texts_before = js_unparse_multiple(before);
  let texts_after = js_unparse_multiple(after);
  let same = lists_equal_pair(texts_before, texts_after);
  if (same) {
    let r = "the statements unchanged";
    return r;
  }
  let put_in = list_without_multiple(texts_after, texts_before);
  let taken_out = list_without_multiple(texts_before, texts_after);
  let nothing_new = list_empty_is(put_in);
  let nothing_gone = list_empty_is(taken_out);
  if (nothing_new && nothing_gone) {
    let r2 = "statements reordered";
    return r2;
  }
  if (nothing_gone) {
    let r3 = js_statements_change_one_direction_named(
      texts_before,
      texts_after,
      put_in,
      "added",
    );
    return r3;
  }
  if (nothing_new) {
    let r6 = js_statements_change_one_direction_named(
      texts_after,
      texts_before,
      taken_out,
      "removed",
    );
    return r6;
  }
  let left = list_size(put_in);
  let one_in = equal(left, 1);
  let left4 = list_size(taken_out);
  let one_out = equal(left4, 1);
  let left5 = list_size(before);
  let right = list_size(after);
  let lengths = equal(left5, right);
  if (one_in && one_out && lengths) {
    let r9 = js_statements_change_replaced_named(
      before,
      after,
      texts_before,
      texts_after,
    );
    return r9;
  }
  let r10 = js_statements_change_both_ways_named(texts_before, texts_after);
  return r10;
}
