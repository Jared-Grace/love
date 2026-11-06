import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { literals_marked_both_ways_baseline_path } from "./literals_marked_both_ways_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function function_rename_literals_both_ways_baseline(
  f_name_before,
) {
  arguments_assert(arguments, 1);
  ("Every word this record holds is spelled once as a frozen word and once as a reference to a function. A rename carries every reference along and walks past every frozen word, so the old name keeps its frozen sites and loses all its references: it no longer wears both, and its line goes. The new name is not written in, because its references arriving gives it no frozen site; if it already had one somewhere, it is a new offence, and the gate is what should say so.");
  ("Swept by the letters, the line was renamed instead, and the record then held a word that was not failing beside a word that was no longer listed - red twice over for a rename that had done nothing wrong.");
  let path = literals_marked_both_ways_baseline_path();
  let known = await baseline_known_read(path);
  function lambda(word) {
    let neq = not_equal(word, f_name_before);
    return neq;
  }
  let kept = known.filter(lambda);
  let sites = subtract(known.length, kept.length);
  if (greater_than(sites, 0)) {
    await baseline_known_write(kept, path);
  }
  let change = {
    f_path: path,
    sites,
  };
  return change;
}
