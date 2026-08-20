import { arguments_assert } from "./arguments_assert.mjs";
import { data_folder } from "./data_folder.mjs";
import { data_rooms_expected } from "./data_rooms_expected.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export async function data_rooms_gate_run() {
  "QA gate: the data folder holds its two rooms and nothing else - no third room, no file loose beside them, and neither room gone.";
  "Both halves of that matter for the same reason. Whether a file sits in the given room or the found one decides whether the sweeps that ask if a function name is still spoken for can see it, so a file loose in the data folder itself is a file nobody has answered that question about - and it is invisible rather than wrong, because it simply does not turn up in the given half's answer. This is the moment somebody is asked.";
  "Read off the disk rather than off what git is keeping, which is the opposite of how the same check at the top of the repo works, and deliberately. A reader that creates the file it cannot find will put an empty one back at whatever path it was still holding from before a move, and the file it leaves is untracked - so asking git would be asking the one source that cannot see the thing this is here to catch. It happened three times on the day the rooms were made, once at a path that would have quietly replaced eleven kilobytes of aliases with an empty pair of brackets.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let folder = data_folder();
  let present = await folder_read(folder);
  let expected = data_rooms_expected();
  let unexpected = list_difference(present, expected);
  let absent = list_difference(expected, present);
  let f_name = fn_name("data_rooms_expected");
  list_empty_is_assert_json(unexpected, {
    hint: text_combine_multiple([
      "something is in the data folder that is neither of its two rooms - if it is read to decide what happens next it belongs in the given room, and if it is a record of what already happened it belongs in the found one; if it is a file that came back on its own, a reader is still holding the path it had before the move and the empty file it left can go",
      ", or, if there really is a third kind, ",
      f_name,
      " should say so",
    ]),
    unexpected,
    expected,
  });
  let f_name2 = fn_name("data_rooms_expected");
  list_empty_is_assert_json(absent, {
    hint: text_combine_multiple([
      "a room the data folder is made of is not there any more - if it moved, say where in the function naming it; if the split itself changed, ",
      f_name2,
      " should say so",
    ]),
    absent,
    present,
  });
  let reached = list_size(present);
  let r = {
    reached,
    unexpected: 0,
    absent: 0,
  };
  return r;
}
