import { app_apps_all_main_fns } from "./app_apps_all_main_fns.mjs";
import { list_includes } from "./list_includes.mjs";
import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { equal } from "./equal.mjs";
import { function_name_app_try } from "./function_name_app_try.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function function_app_import_verdict(imported) {
  arguments_assert(arguments, 1);
  ("What to do about one app-owned name that something outside its app is importing - the app it claims, who actually calls it split by whether they belong to that app, and which of the two ways out those callers point to.");
  ("Both records of this fault hold pairs and no advice, so every line of them is the same piece of reading done again by hand: ask who calls the name, ask which app each caller belongs to, and let the count decide. Doing it three times in one sitting is what says it should be a command.");
  ("No caller belongs to the app in the name, so the prefix is a lie and the name was never that app's. Renaming it to a prefix belonging to no app ends the fault outright, and a rename is behaviour-preserving, so it needs nobody's permission.");
  ("Several callers belong to the app, so the name is probably honest and no rename can help. What the importer does instead depends on what the importer is: code belonging to no app takes the thing as something it is handed, and whoever owns the screen passes it; another app needs its own, or a shared one both can reach.");
  ("That reading rests on the callers' names, which is a strong hint and not a proof, so the callers are given back to be looked at rather than only counted. A caller can wear a prefix that is itself a lie - measured on a colour whose two callers both wore an app's prefix while neither was that app's code, so the count said the app owned it and the truth was that nothing did.");
  ("Exactly one caller belonging to the app decides nothing, and saying so is the point. That one caller may itself be on its way out, in which case the count is about to become none - which is exactly how a colour named after an app turned out to have no app behind it. So this asks for a person and names the single function they have to look at.");
  ("A name gives itself back among its own callers, and it is dropped rather than counted.");
  ("An app's own front door is asked about first and answered separately, because the count says the wrong thing about it every time. Nothing inside an app calls the function the app starts at, so it always has no callers of its own and always reads as a lie - and renaming a front door is the one rename here that would be plainly wrong. What an importer of one has done instead is take the whole app with it, which was measured at 410 KiB on a bundle, so these are the heaviest lines in the record rather than the emptiest.");
  let app_names = await apps_names_prefixed();
  let app = function_name_app_try(imported, app_names);
  let mains = await app_apps_all_main_fns();
  let entry_is = list_includes(mains, imported);
  let names = await data_identifiers_search_names(imported);
  let callers_own = [];
  let callers_other = [];
  for (let name of names) {
    let self_is = equal(name, imported);
    if (self_is) {
      continue;
    }
    let app_caller = function_name_app_try(name, app_names);
    let own_is = equal(app_caller, app);
    if (own_is) {
      list_add(callers_own, name);
      continue;
    }
    list_add(callers_other, name);
  }
  let own_size = list_size(callers_own);
  let none_is = equal(own_size, 0);
  let single_is = equal(own_size, 1);
  let verdict = "own";
  if (single_is) {
    verdict = "read";
  }
  if (none_is) {
    verdict = "rename";
  }
  if (entry_is) {
    verdict = "entry";
  }
  let r = {
    imported,
    app,
    verdict,
    callers_own,
    callers_other,
  };
  return r;
}
