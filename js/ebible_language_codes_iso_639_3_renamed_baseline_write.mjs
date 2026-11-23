import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_codes_iso_639_3_renamed_baseline_path } from "./ebible_language_codes_iso_639_3_renamed_baseline_path.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { ebible_language_codes_iso_639_3_renamed_moved } from "./ebible_language_codes_iso_639_3_renamed_moved.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function ebible_language_codes_iso_639_3_renamed_baseline_write() {
  "Records the table of renamed language codes, so the gate can tell later if an entry moved. It only ever adds: when an entry the record already holds has moved or gone, it refuses and writes nothing, because recording that would make the gate accept the very break it exists to catch.";
  arguments_assert(arguments, 0);
  let path = ebible_language_codes_iso_639_3_renamed_baseline_path();
  let table = ebible_language_codes_iso_639_3_renamed();
  let recorded = {};
  if (await file_exists(path)) {
    recorded = await file_read_json(path);
  }
  let moved = ebible_language_codes_iso_639_3_renamed_moved(recorded, table);
  list_empty_is_assert_json(moved, {
    hint: "refusing to record: these old codes moved or were removed, and recording that would hide the break - put them back instead",
    moved,
  });
  await file_overwrite_json(path, table);
  let before = object_property_names(recorded).length;
  let after = object_property_names(table).length;
  let r = {
    path,
    before,
    after,
  };
  return r;
}
