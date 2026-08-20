import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { command_grantable_run_name } from "./command_grantable_run_name.mjs";
import { equal } from "./equal.mjs";
import { permission_allow_verbs } from "./permission_allow_verbs.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_empty } from "./text_empty.mjs";
export async function permission_rows_run_named(rows) {
  arguments_assert(arguments, 1);
  ("Writes onto each ranked row the dispatcher function a rule would have to name for that row to stop asking, or empty text where no one grant would answer it.");
  ("Empty rather than absent, because a row that no grant reaches has to stay in the ranking. It cost the human the same minute as the rest, and dropping it would leave a report that reads as if everything expensive were grantable.");
  ("What counts as answerable by one grant is read once, by ",
    fn_name("command_grantable_run_name"),
    ", so that this and the guard agree about a pipeline rather than each holding an opinion.");
  ("The verbs the settings file already approves are asked for once and handed to every row. They are the same for all of them, and reading the files per row would put the ranking's cost into the answer least likely to have changed.");
  let allow_verbs = await permission_allow_verbs();
  for (let row of rows) {
    let sample = property_get(row, "sample");
    let run_name = text_empty();
    ("a row grouped on something other than the command carries no command at all where the call was a file edit or a fetch, so the sample is asked whether it is text before it is read as one");
    let worded = equal(typeof sample, "string");
    if (worded) {
      run_name = command_grantable_run_name(sample, allow_verbs);
    }
    property_set(row, "run_name", run_name);
  }
  return rows;
}
