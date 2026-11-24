import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { apps_pages_language_table } from "./apps_pages_language_table.mjs";
import { app_learn_eng_pages_language_table_derived } from "./app_learn_eng_pages_language_table_derived.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
export function app_learn_eng_pages_language_table_fresh_assert() {
  "Fail when the written table of language pages no longer says what learn_eng's stores say.";
  arguments_assert(arguments, 0);
  let written = apps_pages_language_table();
  let derived = app_learn_eng_pages_language_table_derived();
  json_equal_assert_json(written, derived, {
    hint: text_combine_multiple([
      "the language page table is behind the stores - run ",
      fn_name("app_learn_eng_pages_language_table_write"),
    ]),
  });
}
