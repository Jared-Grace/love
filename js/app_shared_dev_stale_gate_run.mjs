import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dev_stale_found } from "./app_shared_dev_stale_found.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function app_shared_dev_stale_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every dev bundle on disk was built out of the sources sitting beside it, rather than standing for what those sources used to say.");
  ("A STALE BUNDLE IS THE QUIETEST FAULT IN THIS REPO. It loads, it runs, it draws a page - it just draws last week's code, and every gate that reads sources stays green while it does, because the sources are right and only the built copy is behind. Somebody then tries a change on a phone, sees the old behaviour, and goes looking for the fault in code that is already correct.");
  ("IT IS ANSWERED FROM WHAT THE FILES SAY AND NEVER FROM WHEN THEY WERE TOUCHED. The watcher that rebuilds all day compares times, which is right for it and useless here: this runs in a fresh copy of the repository made at one moment, so every file in it was written at that moment and a reading built on times has nothing left to compare.");
  ("A BUNDLE NOTHING WAS EVER RECORDED ABOUT FAILS AS LOUDLY AS ONE WHOSE RECORD DISAGREES. Never having been asked is not the same as being fresh, and treating it as fresh is how a gate comes to be green over the very bundles nobody has looked at. The repair is the same one command either way.");
  ("An app with a page and no bundle is not held against anybody - a page can carry its script inside itself and have no bundle to be behind.");
  ("It says which bundles it opened, because both fault lists come back empty on a clean run and also on a run where the sweep has stopped visiting anything, and those two have to be tellable apart from the outside.");
  let found = await app_shared_dev_stale_found();
  let opened = property_get(found, "opened");
  let stale = property_get(found, "stale");
  let unrecorded = property_get(found, "unrecorded");
  list_empty_not_is_assert_json(opened, {
    hint: "no dev bundle was opened at all - this sweep answers about nothing, so its green says nothing either; the list of apps with a dev page is what it walks and that list came back holding none",
  });
  let behind = list_concat(stale, unrecorded);
  list_empty_is_assert_json(behind, {
    stale,
    unrecorded,
    walked: list_size(opened),
    hint: text_combine_multiple([
      "these dev bundles do not stand for the sources beside them - rebuild each one with ",
      fn_name("app_shared_dev_build"),
      " <name>, which is also what writes down what it was built out of",
    ]),
  });
  let r = {
    walked: list_size(opened),
  };
  return r;
}
