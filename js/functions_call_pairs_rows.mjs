import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_includes } from "./list_includes.mjs";
export function functions_call_pairs_rows(tally, atom_by_key) {
  arguments_assert(arguments, 2);
  let rows = [];
  for (let key in tally) {
    let record = tally[key];
    if (not(record.wired)) {
      continue;
    }
    let file_count = object_property_names(record.files).length;
    let atom_names = property_get_or_null(atom_by_key, key);
    ("A function whose whole body IS the pair cannot be collapsed into itself, so its");
    ("own file is not a place the pair could be folded. Counting it held rows at the");
    ("top of the list that no atom could ever close - three of the five promised by");
    ("the ",
      fn_name("list_size"),
      "-then-equal row were ",
      fn_name("list_empty_is"),
      ", ",
      fn_name("list_size_1"),
      " and ",
      fn_name("list_size_2"));
    ("themselves - which is the same wasted work this column exists to remove, one");
    ("level up.");
    let closed_names = object_property_names(record.closed_files);
    let closed_count = 0;
    for (let closed_file of closed_names) {
      let closed_name = function_path_to_name(closed_file);
      let already_atom = atom_names && list_includes(atom_names, closed_name);
      if (not(already_atom)) {
        closed_count = closed_count + 1;
      }
    }
    rows.push({
      foldable: closed_count,
      files: file_count,
      count: record.count,
      pair: record.example,
      left: record.left,
      right: record.right,
      atoms: atom_names,
    });
  }
  return rows;
}
