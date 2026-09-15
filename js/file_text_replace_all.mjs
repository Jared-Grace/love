import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_replace } from "./text_replace.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function file_text_replace_all(f_path, from, to) {
  "Changes every run of a text in one file, having first made sure it appears there at least once";
  ("do NOT grant, for the same reason as ",
    fn_name("file_text_replace_once"),
    ": the third argument is written into a file, and some files here are executed.");
  ("The twin for a value spelled the same way in several places, where swapping each one means the same thing - one colour written four times becomes one call written four times. Asking for one place at a time would refuse it, and running the one-place command four times leaves no single record of the change.");
  ("How many places changed comes back, because that is the number the caller has to check against what they expected; none at all is refused, since it usually means the text had already changed.");
  arguments_assert(arguments, 3);
  let before = await file_read(f_path);
  let count = text_occurrences_count(before, from);
  let b = greater_than(count, 0);
  assert_json(b, {
    f_path,
    from,
    hint: "the text to replace does not appear in the file",
  });
  let after = text_replace(before, from, to);
  await file_overwrite(f_path, after);
  let r = {
    f_path,
    count,
  };
  return r;
}
