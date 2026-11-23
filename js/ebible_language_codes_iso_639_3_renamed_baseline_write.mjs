import { arguments_assert } from "./arguments_assert.mjs";
import { object_baseline_grow_write } from "./object_baseline_grow_write.mjs";
import { ebible_language_codes_iso_639_3_renamed_baseline_path } from "./ebible_language_codes_iso_639_3_renamed_baseline_path.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
export async function ebible_language_codes_iso_639_3_renamed_baseline_write() {
  "Records the table of renamed language codes, so the gate can tell later if an entry moved. It only ever adds: it refuses when an entry the record holds has moved or gone.";
  arguments_assert(arguments, 0);
  let path = ebible_language_codes_iso_639_3_renamed_baseline_path();
  let table = ebible_language_codes_iso_639_3_renamed();
  let r = await object_baseline_grow_write(path, table);
  return r;
}
