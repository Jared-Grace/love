import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function storage_key_seams_durable() {
  "The calls that write a function's own name into a browser store that outlives the tab it was written from.";
  "A key here is the owning function's name with a word after it, so every one of these publishes a name onto a disk this repo will never see again. That is what makes renaming one of those functions the one rename that is not behaviour-preserving, and it is why a reading of the repo has to know exactly which calls do it.";
  "Held by hand rather than read off a shape, because durability is a fact about which browser store stands behind the call, and nothing in the way a call is written says which one that is. What is NOT held by hand is whether the list is complete: every other place the key is composed is named in the sibling list, and a gate insists the two together account for all of them, so a new seam cannot arrive unclassified.";
  arguments_assert(arguments, 0);
  let f_name = fn_name("storage_local_set");
  let f_name2 = fn_name("storage_local_get");
  let f_name3 = fn_name("storage_local_remove");
  let f_name4 = fn_name("storage_local_exists");
  let f_name5 = fn_name("storage_local_quarantine");
  let seams = [f_name, f_name2, f_name3, f_name4, f_name5];
  return seams;
}
