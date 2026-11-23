import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { ebible_language_codes_iso_639_3_renamed_baseline_path } from "./ebible_language_codes_iso_639_3_renamed_baseline_path.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { object_entries_moved } from "./object_entries_moved.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function ebible_language_codes_iso_639_3_renamed_gate_run() {
  "QA gate: the table of language codes renamed to ISO 639-3 still names, for every old code it has ever named, the same new code.";
  "Links and saved choices written before the rename spell the old codes, and they sit in bookmarks, messages and browsers nobody here can reach. The table is the only thing that still opens them, so an old code pointed somewhere else opens the wrong language, and one removed opens none - and nothing else in the repo would notice, because every caller still loads.";
  "The table may grow: an old code the record has never seen is welcome, and the writer adds it.";
  "Counts what it checked, because a check that read an empty record would pass by finding nothing.";
  arguments_assert(arguments, 0);
  let file_path = ebible_language_codes_iso_639_3_renamed_baseline_path();
  let recorded = await file_read_json(file_path);
  let table = ebible_language_codes_iso_639_3_renamed();
  let moved = object_entries_moved(recorded, table);
  list_empty_is_assert_json(moved, {
    hint:
      "an old language code now opens a different language, or none, so every link and saved choice spelling it breaks - put the entry back in " +
      fn_name("ebible_language_codes_iso_639_3_renamed") +
      "; a new old code is fine, and " +
      fn_name("ebible_language_codes_iso_639_3_renamed_baseline_write") +
      " records it",
    moved,
  });
  let checked = object_property_names(recorded).length;
  if (equal(checked, 0)) {
    throw new Error(
      "the record of renamed language codes is empty, so this checked nothing",
    );
  }
  let unrecorded = subtract(object_property_names(table).length, checked);
  let r = {
    checked,
    unrecorded,
  };
  return r;
}
