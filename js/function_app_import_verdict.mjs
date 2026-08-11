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
  ("Several callers belong to the app, so the name really is that app's and no rename can be honest. The call has to leave the shared side instead - the importer takes what it needs as something it is handed, and whoever owns the screen passes it.");
  ("Exactly one caller belonging to the app decides nothing, and saying so is the point. That one caller may itself be on its way out, in which case the count is about to become none - which is exactly how a colour named after an app turned out to have no app behind it. So this asks for a person and names the single function they have to look at.");
  ("A name gives itself back among its own callers, and it is dropped rather than counted.");
  let app_names = await apps_names_prefixed();
  let app = function_name_app_try(imported, app_names);
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
  let verdict = "parameter";
  if (single_is) {
    verdict = "read";
  }
  if (none_is) {
    verdict = "rename";
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
