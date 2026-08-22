import { arguments_assert } from "./arguments_assert.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export function js_statements_change_both_ways_named(
  texts_before,
  texts_after,
) {
  "The name for an edit that put statements in and took statements out at once, told apart by how much of the run was still standing afterwards.";
  "A REWRITE AND A REWORKING ARE NOT THE SAME EDIT AND WERE SHARING ONE NAME. Where nothing at all survives there is nothing to point a command at, and the body rewritten is the honest answer; where most of the run survives, what happened is a handful of statements swapped, and that is a command somebody can write. Folded together, the second was hiding inside the bucket that was supposed to stay small.";
  "THE LENGTH OF THE RUN DECIDES WHICH OF THE TWO IT IS. As many out as in leaves the run the length it was, which is what a swap looks like; the run having grown or shrunk means statements were put in and taken out in different numbers, and no single command does that.";
  arguments_assert(arguments, 2);
  let taken_out = list_without_multiple(texts_before, texts_after);
  let kept = list_without_multiple(texts_before, taken_out);
  let survived = list_size(kept);
  let none = equal(survived, 0);
  if (none) {
    let r = "the body rewritten";
    return r;
  }
  let left = list_size(texts_before);
  let right = list_size(texts_after);
  let lengths = equal(left, right);
  if (lengths) {
    let r2 = "statements replaced";
    return r2;
  }
  let r3 = "statements added and removed";
  return r3;
}
