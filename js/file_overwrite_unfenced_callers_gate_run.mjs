import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { error_json } from "./error_json.mjs";
export async function file_overwrite_unfenced_callers_gate_run() {
  "QA gate: the writer with no refusal of any path has only the callers it was built for.";
  "That writer can change the files that decide what runs without asking. One caller refuses those paths first and the other is the named way past the refusal, seen by a person when granted. A third caller would be a road past both, and nothing about it would look wrong from where it was written.";
  "It asks who mentions the name, not who imports it, because a mention is the wider net: a list that names the writer gets looked at too.";
  "This reports and does not prevent: a red gate stops no command that has already run.";
  arguments_assert(arguments, 0);
  let name = fn_name("file_overwrite_unfenced");
  let allowed = [
    name,
    fn_name("file_overwrite_unfenced_callers_gate_run"),
    fn_name("file_overwrite_uncached_node"),
    fn_name("file_overwrite_deciding"),
  ];
  let found = await data_identifiers_search_names(name);
  let extra = list_difference(found, allowed);
  let has_extra = list_empty_not_is(extra);
  if (has_extra) {
    error_json({
      extra,
      hint: text_combine_multiple([
        "these mention the writer that refuses no path - call ",
        fn_name("file_overwrite_uncached_node"),
        ", or ",
        fn_name("file_overwrite_deciding"),
        " if a person should see it granted",
      ]),
    });
  }
}
