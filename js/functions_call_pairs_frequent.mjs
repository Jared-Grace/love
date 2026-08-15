import { functions_call_pairs_file_scan } from "./functions_call_pairs_file_scan.mjs";
import { functions_call_pairs_top } from "./functions_call_pairs_top.mjs";
import { functions_call_pairs_rows } from "./functions_call_pairs_rows.mjs";
import { functions_call_pairs_atoms_by_key } from "./functions_call_pairs_atoms_by_key.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_pair_composed } from "./function_name_pair_composed.mjs";
import { function_exists } from "./function_exists.mjs";
export async function functions_call_pairs_frequent() {
  "Auto-DRY recommender: scan every js fn, count how often each ORDERED pair of consecutive";
  ("call-declarations recurs across files (alpha-renamed via ",
    fn_name("js_pair_canonical"),
    "), and return the top");
  ("WIRED pairs — where the second statement consumes the first's output — ranked by how many files hold");
  ("them. A wired pair recurring across many files is a candidate to extract into one named fn. The");
  ("complement of the fold: the fold reuses fns that EXIST, this proposes fns that SHOULD.");
  ("Each row also carries the name the pair WOULD have here (",
    fn_name("function_name_pair_composed"),
    ") and whether a function already answers to it, because reading the report and");
  ("judging that by eye is how a function that already existed came within one command");
  ("of being written a second time: the word you reach for to describe a wrapper is");
  ("the one word its name is least likely to hold. An `exists: true` row is not noise");
  ("either - it says the atom is there and the sites were never folded onto it.");
  ("Every row also says in how many of those files the pair would actually FOLD, and");
  ("that is what it is ranked by. Recurring often and being collapsible are different");
  ("questions, and the second is the one worth acting on.");
  arguments_assert(arguments, 0);
  let entries = await js_files_texts();
  let tally = {};
  let file_keys = {};
  function file_scan(entry) {
    functions_call_pairs_file_scan(entry, tally, file_keys);
  }
  list_map(entries, file_scan);
  let atom_by_key = functions_call_pairs_atoms_by_key(file_keys);
  let rows = functions_call_pairs_rows(tally, atom_by_key);
  let top = functions_call_pairs_top(rows);
  for (let row of top) {
    let composed = function_name_pair_composed(row.left, row.right);
    row.composed = composed;
    let search = await function_exists(composed);
    row.exists = property_get(search, "exists");
  }
  return top;
}
