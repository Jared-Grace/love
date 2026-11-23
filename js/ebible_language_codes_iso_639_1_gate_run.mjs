import { arguments_assert } from "./arguments_assert.mjs";
import { object_baseline_kept_assert } from "./object_baseline_kept_assert.mjs";
import { ebible_language_codes_iso_639_1_baseline_path } from "./ebible_language_codes_iso_639_1_baseline_path.mjs";
import { ebible_language_codes_iso_639_1 } from "./ebible_language_codes_iso_639_1.mjs";
import { fn_name } from "./fn_name.mjs";
export async function ebible_language_codes_iso_639_1_gate_run() {
  "QA gate: the table of two-letter language codes still names, for every two-letter code it has ever named, the same language.";
  "A link a person typed with two letters is kept in bookmarks and messages nobody here can reach, so a code that now opens another language, or none, breaks it silently. The writer keeps every recorded entry by construction; this catches the table being edited by hand or by anything else.";
  arguments_assert(arguments, 0);
  let path = ebible_language_codes_iso_639_1_baseline_path();
  let table = ebible_language_codes_iso_639_1();
  let r = await object_baseline_kept_assert(
    path,
    table,
    "a two-letter language code now opens a different language, or none, so every link spelling it breaks - run " +
      fn_name("ebible_language_codes_iso_639_1_write") +
      ", which puts every recorded entry back",
  );
  return r;
}
