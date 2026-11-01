import { arguments_assert } from "./arguments_assert.mjs";
import { files_root_tracked } from "./files_root_tracked.mjs";
import { files_root_expected } from "./files_root_expected.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
export async function files_root_gate_run() {
  "QA gate: the files git keeps at the top of this repo are exactly the ones written down - no more, and none of them gone.";
  "The twin of the gate on the folders at the top. A commit sweeps the whole working folder, so a file a command drops at the top because it was given a bare name is committed by whoever commits next, and nothing else ever asks about it.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let tracked = await files_root_tracked();
  let expected = files_root_expected();
  let unexpected = list_difference(tracked, expected);
  let absent = list_difference(expected, tracked);
  list_empty_is_assert_json(unexpected, {
    hint: text_combine_multiple([
      "a file is kept at the top of the repo that is not written down - move it into a folder, or take it out of git and ignore it if it is not the repo's; only if a tool needs it at the top should ",
      fn_name("files_root_expected"),
      " name it",
    ]),
    unexpected,
    expected,
  });
  list_empty_is_assert_json(absent, {
    hint: text_combine_multiple([
      "a file written down as kept at the top of the repo is not there any more - take the name out of ",
      fn_name("files_root_expected"),
    ]),
    absent,
    tracked,
  });
  let reached = list_size(tracked);
  let r = {
    reached,
    unexpected: 0,
    absent: 0,
  };
  return r;
}
