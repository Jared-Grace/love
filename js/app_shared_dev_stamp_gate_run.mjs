import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dev_stale_found } from "./app_shared_dev_stale_found.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function app_shared_dev_stamp_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every dev bundle sitting on disk carries a record of what it was built out of, so a later reading can tell whether it still stands for the sources beside it.");
  ("A STALE BUNDLE IS THE QUIETEST FAULT IN THIS REPO. It loads, it runs, it draws a page - it just draws last week's code, and every check that reads sources stays green while it does. The person looking at the page has no way to tell, because a bundle says nothing about when it was made or out of what. The record is what gives it a way to say so.");
  ("IT FAILS ON A BUNDLE WITH NO RECORD, AND ONLY COUNTS THE ONES THAT HAVE FALLEN BEHIND. Those are two different kinds of thing and the difference is whether anybody can get to zero and stay there. A bundle with no record at all was made by a road that goes round the one command that builds a dev page, and that is a mistake somebody made once and can undo once. A bundle that has fallen behind is not a mistake at all: several people edit shared code here all day, and every one of those edits puts every app that carries that code behind at the moment it lands. Measured on the day this was written, a full rebuild of all thirty-one apps was overtaken within ten minutes. Made to fail on that, this check would be red on nearly every commit, and a check that is always red does not stop the fault - it stops every deploy and teaches everyone to read past it.");
  ("SO THE COUNT IS CARRIED OUT RATHER THAN ASSERTED ON, and the names with it. That is not the count being ignored: whoever is about to trust a dev page asks ",
    fn_name("app_shared_dev_stale_found"),
    " and gets the names back, and rebuilding one is a single command. What must not happen is a number nobody can drive to zero being wired to a stop that everybody depends on.");
  ("An app with a page and no bundle is not held against anybody - never having built it is a perfectly ordinary state, and only a bundle that exists can mislead a reader.");
  ("It says how many bundles it opened, because the fault list comes back empty on a clean run and also on a run where the sweep has stopped visiting anything, and those two must not read the same.");
  let found = await app_shared_dev_stale_found();
  let opened = property_get(found, "opened");
  let stale = property_get(found, "stale");
  let unrecorded = property_get(found, "unrecorded");
  list_empty_not_is_assert_json(opened, {
    hint: "no dev bundle was opened at all - this sweep answers about nothing, so its green says nothing either; the list of apps with a dev page is what it walks and that list came back holding none",
  });
  list_empty_is_assert_json(unrecorded, {
    unrecorded,
    hint: text_combine_multiple([
      "these dev bundles have no record of what they were built out of, which means something wrote them without going through ",
      fn_name("app_shared_dev_build"),
      " - rebuild each one with ",
      fn_name("app_shared_dev_build"),
      " <name>, which is the road that writes the record",
    ]),
  });
  let r = {
    walked: list_size(opened),
    behind: stale,
  };
  return r;
}
