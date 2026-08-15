import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export function functions_call_pairs_atoms_by_key(file_keys) {
  arguments_assert(arguments, 1);
  ("Every function whose whole body is one wired pair, filed under the pair it is - so a row proposing that pair can be told the atom has already been written.");
  ("A function whose whole body IS one of these pairs is the atom the pair is asking for, already written under a name the composed one never guesses: the pair");
  let f_name2 = fn_name("list_size");
  (text_combine_multiple([f_name2, " then equal-to-zero is called "]),
    fn_name("list_empty_is"),
    " here.");
  ("Whole body means the file holds one wired pair, that pair's result is what the");
  ("function hands back, and there is no third worked-out value - which is what tells");
  ("an atom apart from a long function that happens to hold one wired pair in the");
  ("middle of it.");
  let atom_by_key = {};
  for (let file in file_keys) {
    let scanned = property_get(file_keys, file);
    let keys_here = property_get(scanned, "keys");
    let calls = property_get(scanned, "calls");
    let alone = equal(keys_here.length, 1);
    let bare = less_than(calls, 4);
    let atom_is = alone && bare;
    if (not(atom_is)) {
      continue;
    }
    let single = keys_here[0];
    let b = property_get(single, "returned");
    if (not(b)) {
      continue;
    }
    let only_key = property_get(single, "key");
    let f_name = function_path_to_name(file);
    let seen_names = property_get_or_null(atom_by_key, only_key);
    if (not(seen_names)) {
      seen_names = [];
      property_set(atom_by_key, only_key, seen_names);
    }
    seen_names.push(f_name);
  }
  return atom_by_key;
}
