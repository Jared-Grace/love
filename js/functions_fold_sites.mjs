import { functions_fold_sites_pairs } from "./functions_fold_sites_pairs.mjs";
import { functions_fold_sites_file_load } from "./functions_fold_sites_file_load.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
export async function functions_fold_sites() {
  "Auto-DRY linter: report every site where a fn's body was hand-written inline instead of calling an";
  ("existing fn that already does it — i.e. every place `",
    fn_name("function_fold"),
    " <x> <f>` would apply. Reads all js");
  ("fns fresh (not the possibly-stale identifier index), keeps the foldable-shaped ones, and for each");
  ("tries ",
    fn_name("js_fold"),
    " against the files that call all its callees.");
  ("Which files those are is read off every run of statements in each file, not the");
  ("one it opens with. Reading only the top left this blind where it mattered most:");
  ("nine live sites of ",
    fn_name("list_first_property"),
    " sat inside ifs and lambdas, so the files holding them were never even offered");
  ("as candidates, and this reported a clean repo while ",
    fn_name("function_fold_everywhere"),
    " - which asks the identifier index, and so sees a call wherever it is written -");
  ("folded all nine.");
  ("Complement of the miner: this finds reuse");
  ("of fns that EXIST. Returns { x, f } pairs; a mutual x<->f pair means two duplicate DEFINITIONS.");
  arguments_assert(arguments, 0);
  let records = await js_files_texts();
  let entries = {};
  let callee_index = {};
  ("What each run of statements calls, counted, is kept per file beside the index of who calls what. The index answers WHETHER a file calls a name and this answers HOW OFTEN, within a single run - which is the question a fold actually asks, because a body is folded into one run and not gathered across a file.");
  let block_tallies = {};
  function file_load(record) {
    let r = functions_fold_sites_file_load(
      record,
      entries,
      block_tallies,
      callee_index,
    );
    return r;
  }
  list_map(records, file_load);
  ("A file is read into its shape once and kept, because the pairing asks about the same files over and over. Counted 2026-08-11 across this repo: 57,709 readings of 2,772 different files, twenty-one times each, and this was the second slowest gate there is.");
  ("What is kept has to be given up the moment a fold succeeds, and only then. Folding writes the call back into the shape it was given - that is how the folded version is handed back - so the kept shape is no longer the file after a success, and the next function pairing against it would be pairing against somebody else's fold. A fold that finds nothing changes nothing, which is every reading but a handful, so almost nothing is ever given up.");
  let shapes = {};
  ("Which runs of statements a file holds is kept beside its shape, for the same reason and with the same care. What those runs are depends on the file alone and never on the function being paired against it, and one file is paired against many: counted 2026-08-12, 56,751 pairings over 2,790 different files, which was twenty-two and a half seconds of finding the same runs again against nine tenths of a second to find them once each.");
  ("They are given up exactly when the shape is, because they are the runs of that tree and a fold writes the call back into it.");
  let blocks_kept = {};
  let sites = functions_fold_sites_pairs(
    entries,
    callee_index,
    shapes,
    block_tallies,
    blocks_kept,
  );
  return sites;
}
