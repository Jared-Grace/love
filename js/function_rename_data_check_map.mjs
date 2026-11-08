import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { data_paths } from "./data_paths.mjs";
import { examples_folder } from "./examples_folder.mjs";
import { literals_frozen_path } from "./literals_frozen_path.mjs";
import { literals_marked_both_ways_baseline_path } from "./literals_marked_both_ways_baseline_path.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { file_read } from "./file_read.mjs";
import { text_identifier_count } from "./text_identifier_count.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { text_identifier_replace } from "./text_identifier_replace.mjs";
import { greater_than } from "./greater_than.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { function_rename_literals_frozen_record } from "./function_rename_literals_frozen_record.mjs";
import { list_add } from "./list_add.mjs";
import { function_rename_literals_both_ways_baseline } from "./function_rename_literals_both_ways_baseline.mjs";
import { property_greater_than } from "./property_greater_than.mjs";
export async function function_rename_data_check_map(renames) {
  "The data folder step of a rename, for a whole map of old names to new ones. Each file is read once and written at most once, holding every name it spells, rather than read once per name.";
  "The folder spells function names as plain text - an alias the human types, the entries a gate ratchets against - and none of those files is a function, so no sweep over the tree reaches them. The example corpus is left out because it is code and gets the tree's treatment; the two records of frozen words are left out because each is asked by its own rule, once per name.";
  "Names are swapped one after another in the same text. That gives the same text as swapping them all at once only because no new name is also an old one, which the rename refuses before it starts: a swap can then neither make nor undo another's site.";
  "What it rewrote is named file by file, with a count beside each, because a sweep by the letters cannot tell a reference from an ordinary word that reads the same, and saying where it went is the one honest thing it can do.";
  arguments_assert(arguments, 1);
  let befores = object_property_names(renames);
  let paths_all = await data_paths();
  let folder = examples_folder();
  let path_frozen = literals_frozen_path();
  let path_both_ways = literals_marked_both_ways_baseline_path();
  function swept_is(f_path) {
    let examples_not = text_starts_with_not(f_path, folder);
    let frozen_not = not_equal(f_path, path_frozen);
    let both_ways_not = not_equal(f_path, path_both_ways);
    let swept = examples_not && frozen_not && both_ways_not;
    return swept;
  }
  let paths = list_filter(paths_all, swept_is);
  async function lambda(f_path) {
    let contents = await file_read(f_path);
    let text = contents;
    let sites = 0;
    for (let before of befores) {
      let count = text_identifier_count(text, before);
      if (equal(count, 0)) {
        continue;
      }
      let after = property_get(renames, before);
      text = text_identifier_replace(text, before, after);
      sites = sites + count;
    }
    if (greater_than(sites, 0)) {
      await file_overwrite(f_path, text);
    }
    let change = {
      f_path,
      sites,
    };
    return change;
  }
  let changes_all = await list_map_unordered_async(paths, lambda);
  for (let before of befores) {
    let after = property_get(renames, before);
    let change_frozen = await function_rename_literals_frozen_record(
      before,
      after,
    );
    list_add(changes_all, change_frozen);
    let change_both_ways =
      await function_rename_literals_both_ways_baseline(before);
    list_add(changes_all, change_both_ways);
  }
  function changed_is(change) {
    let any = property_greater_than(change, "sites", 0);
    return any;
  }
  let changes = list_filter(changes_all, changed_is);
  return changes;
}
