import { arguments_assert } from "./arguments_assert.mjs";
import { object_baseline_kept_assert } from "./object_baseline_kept_assert.mjs";
import { ebible_language_codes_iso_639_3_renamed_baseline_path } from "./ebible_language_codes_iso_639_3_renamed_baseline_path.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { fn_name } from "./fn_name.mjs";
export async function ebible_language_codes_iso_639_3_renamed_gate_run() {
  "QA gate: the table of language codes renamed to ISO 639-3 still names, for every old code it has ever named, the same new code.";
  "Links and saved choices written before the rename spell the old codes, and they sit in bookmarks, messages and browsers nobody here can reach. The table is the only thing that still opens them, so an old code pointed somewhere else opens the wrong language, and one removed opens none - and nothing else in the repo would notice, because every caller still loads.";
  "The table may grow: an old code the record has never seen is welcome, and the writer adds it.";
  arguments_assert(arguments, 0);
  let path = ebible_language_codes_iso_639_3_renamed_baseline_path();
  let table = ebible_language_codes_iso_639_3_renamed();
  let r = await object_baseline_kept_assert(
    path,
    table,
    "an old language code now opens a different language, or none, so every link and saved choice spelling it breaks - put the entry back in " +
      fn_name("ebible_language_codes_iso_639_3_renamed") +
      "; a new old code is fine, and " +
      fn_name("ebible_language_codes_iso_639_3_renamed_baseline_write") +
      " records it",
  );
  return r;
}
