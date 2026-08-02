import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function storage_browser_doors() {
  "The functions allowed to speak to the browser's own stores themselves, each for its own reason.";
  "Eight of them are the doors: speaking to the browser is the whole of what they do, and every reading that watches a stored word starts from their names. A word reaching a disk through one of them is a word something is looking at.";
  "One of them names no word at all. The refresher clears both stores whole, so nothing about it can be orphaned by a rename - there is no key in it to publish.";
  "This list earns its keep by being wrong out loud. It is not a set of exemptions somebody may quietly extend: a gate measures every other file against what the repo already carried, so a new name put here is a claim a reader can check against these reasons rather than a line that disappears into a baseline.";
  arguments_assert(arguments, 0);
  let f_name = fn_name("storage_local_specify_get_json");
  let f_name2 = fn_name("storage_local_specify_set");
  let f_name3 = fn_name("storage_local_specify_remove");
  let f_name4 = fn_name("storage_local_remove");
  let f_name5 = fn_name("storage_local_keys_browser");
  let f_name6 = fn_name("storage_session_get");
  let f_name7 = fn_name("storage_session_set");
  let f_name8 = fn_name("storage_session_exists");
  let f_name9 = fn_name("playwright_refresh");
  let doors = [
    f_name,
    f_name2,
    f_name3,
    f_name4,
    f_name5,
    f_name6,
    f_name7,
    f_name8,
    f_name9,
  ];
  return doors;
}
