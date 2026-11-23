import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_entries_moved } from "./object_entries_moved.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function object_baseline_kept_assert(path, table, hint) {
  "Throws when a table no longer names, for some key the record at the path holds, the value the record holds for it - the key pointed elsewhere or gone. A key the record has never seen is welcome: the table may grow. For tables whose entries have escaped the repo, as in links people kept, so an entry may be added but never moved.";
  "Counts what it checked, because a check that read an empty record would pass by finding nothing.";
  arguments_assert(arguments, 3);
  let recorded = await file_read_json(path);
  let moved = object_entries_moved(recorded, table);
  list_empty_is_assert_json(moved, {
    hint,
    moved,
  });
  let checked = object_property_names(recorded).length;
  if (equal(checked, 0)) {
    throw new Error(
      "the record at " + path + " is empty, so this checked nothing",
    );
  }
  let unrecorded = subtract(object_property_names(table).length, checked);
  let r = {
    checked,
    unrecorded,
  };
  return r;
}
