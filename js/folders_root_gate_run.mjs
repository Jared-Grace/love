import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folders_root_tracked } from "./folders_root_tracked.mjs";
import { folders_root_expected } from "./folders_root_expected.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function folders_root_gate_run() {
  "QA gate: the folders at the top of this repo are exactly the ones written down as the kinds it is made of - no more, and none of them gone.";
  "The top level is the first thing anybody reads about a repository, and it is the one place nothing else is watching. A folder put there is put there by whoever was in a hurry, and it stays, because there is no moment afterwards at which anybody is asked about it. Three were cleared out on the day this was written and every one of them had been sitting there for months.";
  "A name written down that is no longer on the disk fails too, and that half is the more useful one. It is what a folder having been moved looks like from here, and a list still naming its old place is a list somebody will trust later.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let tracked = await folders_root_tracked();
  let expected = folders_root_expected();
  let unexpected = list_difference(tracked, expected);
  let absent = list_difference(expected, tracked);
  let f_name = fn_name("folders_root_expected");
  list_empty_is_assert_json(unexpected, {
    hint: text_combine_multiple([
      "a folder is at the top of the repo that is not written down as one of the kinds this repo is made of - either it belongs inside one of the folders already there, or it is a kind of its own and ",
      f_name,
      " should say so",
    ]),
    unexpected,
    expected,
  });
  let f_name2 = fn_name("folders_root_expected");
  list_empty_is_assert_json(absent, {
    hint: text_combine_multiple([
      "a folder written down as one of the kinds this repo is made of is not there any more - if it moved, say where it moved to in ",
      f_name2,
      "; if it went, take the name out",
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
