import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
export function data_given_baselines_folder() {
  "Where the ratchets keep their records, in the given half of the data folder.";
  "One place saying it, because the alternative was measured. Every ratchet names its own record in a function called after itself, and each of those wrote the room out again as part of a whole address spelled as one word - forty eight of them, and two more elsewhere. That is not a cost until the room moves, and the room has now moved twice; the second move left one of those fifty spellings pointing at where the room used to be, and nothing went red, because a spelling nobody reads on the way past is just a piece of text that happens to be wrong.";
  "So the room is said here and joined onto there. A move is one edit to this, and a spelling that is out of step is no longer possible to have rather than merely unlikely to be missed.";
  arguments_assert(arguments, 0);
  let given = data_given_folder();
  let v = path_join([given, "baselines"]);
  return v;
}
