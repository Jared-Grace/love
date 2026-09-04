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
  ("The key the errors a device has hit are filed under. It belongs here because what it writes is still there after the tab closes - that is the whole point of it, since the failure worth hearing about most is the one that killed the boot, and the send can only happen on the load after. What it publishes is a frozen word rather than any live function's name, so no rename can move it; it is named here so a reading of what this repo has written onto other people's disks accounts for it.");
  let f_name7 = fn_name("html_error_records_storage_key");
  ("The word a device's own name is filed under, composed once and read from two places that share nothing else - the screen somebody writes in on, and the few lines baked into the page that report a boot which died. It reaches the browser's lasting store through both, so what it publishes is on the disk after the tab closes. Both halves of what it joins are frozen, so no rename can move either; it is named here for the same reason as the errors key above, which is that a reading of what this repo has put on other people's disks has to account for it whether or not a rename could ever disturb it.");
  let f_name8 = fn_name("app_shared_contact_user_id_storage_key");
  ("The lines baked into every page, which compose a key of their own beside the two they ask for by name. What they write goes through the browser's lasting store directly rather than through this repo's storage library - the library is fifty eight KiB and the whole point of these lines is to add nothing to a page - and a key written by hand at a plain store is exactly as published as one written through a door. It is durable for the plainest reason there is: the report it guards is sent on the load AFTER the one that died, so the word it leaves behind has to survive the tab that left it.");
  let f_name9 = fn_name("html_code_error_send_script");
  let seams = [
    f_name,
    f_name3,
    f_name4,
    f_name5,
    f_name6,
    f_name7,
    f_name8,
    f_name9,
  ];
  return seams;
}
