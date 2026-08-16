import { arguments_assert } from "./arguments_assert.mjs";
import { tallies_any_covers_is } from "./tallies_any_covers_is.mjs";
import { not } from "./not.mjs";
import { functions_fold_shape_of } from "./functions_fold_shape_of.mjs";
import { functions_fold_blocks_of } from "./functions_fold_blocks_of.mjs";
import { tally_covers_is } from "./tally_covers_is.mjs";
import { list_filter_index } from "./list_filter_index.mjs";
import { js_fold_blocks } from "./js_fold_blocks.mjs";
import { not_equal } from "./not_equal.mjs";
import { functions_fold_shape_forget } from "./functions_fold_shape_forget.mjs";
export function functions_fold_sites_pairs_candidates(
  candidates,
  block_tallies,
  x_wanted,
  shapes,
  entries,
  blocks_kept,
  x_ast,
  sites,
  x_name,
) {
  arguments_assert(arguments, 9);
  for (let f_name of candidates) {
    try {
      let f_tallies = block_tallies[f_name];
      let possible = tallies_any_covers_is(f_tallies, x_wanted);
      let hopeless = not(possible);
      if (hopeless) {
        continue;
      }
      let f_ast = functions_fold_shape_of(f_name, shapes, entries);
      let f_blocks = functions_fold_blocks_of(
        f_name,
        blocks_kept,
        shapes,
        entries,
      );
      ("Only the runs of statements that could hold the body are read for it. The counting above already answers, for each run on its own, whether that run calls everything x calls as many times as x calls it - and that is necessary for a fold, which is the whole reason it is counted at all. Asked of the file the answer is whether some run might, and the answer for each separate run was then thrown away and every run in the file read in full.");
      ("Counted 2026-08-14 across this repo: 123,723 runs read against 31,648 that could have held anything, so three quarters of the reading was of runs already known to be hopeless.");
      ("A count is found by where its run sits, and that is sound because both lists are the runs of one file found the same way - the same walk over the same text, so the two come out in one order.");
      function lambda7(f_block, at) {
        let f_tally = f_tallies[at];
        let holds_is = tally_covers_is(f_tally, x_wanted);
        return holds_is;
      }
      let f_blocks_possible = list_filter_index(f_blocks, lambda7);
      let folded = js_fold_blocks(x_ast, f_ast, f_blocks_possible);
      if (not_equal(folded, null)) {
        functions_fold_shape_forget(f_name, shapes, blocks_kept);
        sites.push({
          x: x_name,
          f: f_name,
        });
      }
    } catch (e) {
      continue;
    }
  }
}
