import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function storage_key_seams_durable_not() {
  "The other places a storage key is composed - the ones that publish no name onto a disk, each for its own reason.";
  "Session storage belongs to one browser tab and is gone when the tab closes, so a name reaching it is never waiting there afterwards to be orphaned by a rename.";
  "The prefix helper composes a name with nothing after it, to walk keys that are already there; whoever wrote those keys published the name, and this only reads back what that call already published.";
  "The enabling test writes into a mock store, so its key never leaves the run that made it.";
  "This list earns its keep by being wrong out loud. It is not a set of exemptions somebody may quietly extend - a gate demands that it and the durable list together account for every place the key is composed, so leaving a new call out of both is what fails, and putting it here is a claim a reader can check against these reasons.";
  arguments_assert(arguments, 0);
  let f_name = fn_name("storage_session_set");
  let f_name2 = fn_name("storage_session_get");
  let f_name3 = fn_name("storage_session_exists");
  let f_name4 = fn_name("storage_local_key_prefix");
  let f_name5 = fn_name("storage_local_enabling_test");
  let seams = [f_name, f_name2, f_name3, f_name4, f_name5];
  return seams;
}
