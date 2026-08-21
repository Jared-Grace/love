import { ebible_languages_rows } from "./ebible_languages_rows.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_new_getter } from "./function_new_getter.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_languages_more_rows_write(languages) {
  "Lays the given languages down as the generated half of the list, in the short form of three words each.";
  "Both writers come through here rather than each rendering the file its own way, because the file is read back by a single reader that expects one shape, and two renderers are two chances to lay it down differently.";
  let f_name = fn_name("ebible_languages_more_rows");
  let f_name2 = fn_name("ebible_languages_from_rows");
  let meaning = text_combine_multiple([
    "Every language eBible gives away on terms this repo may ship that the hand-written list does not already carry, one translation each, three words to a language: what it is called, the folder its chapters sit in, and its short code. Read back into whole records by ",
    f_name2,
    " - an edit made here is thrown away the next time it is generated.",
  ]);
  let rows = ebible_languages_rows(languages);
  let u = await function_unalias_exists(f_name);
  let exists = property_get(u, "exists");
  if (exists) {
    await function_delete(f_name);
  }
  await function_new_getter(f_name, meaning, rows);
  let count = rows.length;
  let written = {
    count,
  };
  return written;
}
