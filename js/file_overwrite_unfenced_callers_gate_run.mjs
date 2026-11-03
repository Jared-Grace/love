import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_overwrite_unfenced_callers_extra } from "./file_overwrite_unfenced_callers_extra.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { error_json } from "./error_json.mjs";
export async function file_overwrite_unfenced_callers_gate_run() {
  "QA gate: the writer with no refusal of any path has only the callers it was built for.";
  "That writer can change the files that decide what runs without asking. A third caller would be a road past the refusal, and nothing about it would look wrong from where it was written.";
  "This reports and does not prevent: a red gate stops no command that has already run. The refusals are in the landing check, the grant check and the safe edit; this catches what reached the repo some other way.";
  arguments_assert(arguments, 0);
  let extra = await file_overwrite_unfenced_callers_extra();
  let has_extra = list_empty_not_is(extra);
  if (has_extra) {
    error_json({
      extra,
      hint: text_combine_multiple([
        "these use the writer that refuses no path - call ",
        fn_name("file_overwrite_uncached_node"),
        ", or ",
        fn_name("file_overwrite_deciding"),
        " if a person should see it granted",
      ]),
    });
  }
}
