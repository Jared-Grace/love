import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function storage_key_seams_durable() {
  "The calls that write a function's own name into a browser store that outlives the tab it was written from.";
  "A key here is the owning function's name with a word after it, so every one of these publishes a name onto a disk this repo will never see again. That is what makes renaming one of those functions the one rename that is not behaviour-preserving, and it is why a reading of the repo has to know exactly which calls do it.";
  "Held by hand rather than read off a shape, because durability is a fact about which browser store stands behind the call, and nothing in the way a call is written says which one that is. What is NOT held by hand is whether the list is complete: every other place the key is composed is named in the sibling list, and a gate insists the two together account for all of them, so a new seam cannot arrive unclassified.";
  arguments_assert(arguments, 0);
  let f_name = fn_name("storage_local_set");
  ("Reading is not listed here any more. It composes no key of its own: it hands the owner name to the door below and that door makes the key, so it arrives at the reading that watches published names as a front door rather than as a seam - which is what it now is, and it is still read there.");
  let f_name3 = fn_name("storage_local_remove");
  let f_name4 = fn_name("storage_local_exists");
  let f_name5 = fn_name("storage_local_quarantine");
  ("The one that is handed the owner name on its own rather than the owner itself. It publishes exactly what the others publish - the name is joined to the word the same way - so a reading that stopped at the calls taking a function would have missed every key written through this door.");
  let f_name6 = fn_name("storage_local_name_get");
  let seams = [f_name, f_name3, f_name4, f_name5, f_name6];
  return seams;
}
