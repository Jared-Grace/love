import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
export function data_given_dev_stamps_folder() {
  arguments_assert(arguments, 0);
  ("Where the records of what each app's dev bundle was built out of are kept.");
  ("Said once here and joined onto rather than spelled out at each place that wants it, for the same reason the ratchets' room is said once: a room that is spelled in several places moves without every spelling following, and a spelling nobody reads on the way past is just a piece of text that happens to be wrong.");
  ("It sits in the given half rather than the found half, because these records are read to decide something. The found half is kept for what a run reported and is deliberately never consulted afterwards, so a record that a gate turns on does not belong there whoever wrote it.");
  let given = data_given_folder();
  let v = path_join([given, "dev_stamps"]);
  return v;
}
