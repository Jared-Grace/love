import { arguments_assert } from "./arguments_assert.mjs";
import { duplicate_kind_parallel } from "./duplicate_kind_parallel.mjs";
import { equal } from "./equal.mjs";
import { function_duplicate_kind } from "./function_duplicate_kind.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
export async function fold_pairs_parallel_drop(pairs) {
  "Takes out of a list of pairs of functions written as each other's definition every pair where either side says in its own body that it shares its shape on purpose.";
  "The mark already exists and the duplicate search already reads it; folding was the one reading that did not, so the repo was telling itself two opposite things about the same three functions - keep them apart on purpose, and collapse them into one. A gate that cannot be answered without deleting a mark somebody placed deliberately is not holding a standard.";
  "Three of them sat red like that: the names a run of lines hands back, the ones it reads from above, and the ones it reads from below. All three intersect what one side declares with what the other side reads, so they fold into each other to the character - and they are three different questions about a cut, each with its own account of what goes wrong when it is got wrong. One name for the three would answer none of them.";
  "Only the pairs are filtered and never the one-way sites. A body written out by hand inside another function is folded into a call, which leaves both definitions standing - the mark forbids collapsing two definitions into one, and has nothing to say against calling.";
  arguments_assert(arguments, 1);
  let parallel = duplicate_kind_parallel();
  let kept = [];
  for (let pair of pairs) {
    let x = list_first(pair);
    let f = list_second(pair);
    let kind_x = await function_duplicate_kind(x);
    let kind_f = await function_duplicate_kind(f);
    let marked_x = equal(kind_x, parallel);
    let marked_f = equal(kind_f, parallel);
    if (marked_x) {
      continue;
    }
    if (marked_f) {
      continue;
    }
    list_add(kept, pair);
  }
  return kept;
}
