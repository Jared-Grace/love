import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_file_path } from "./apps_names_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
import { equal } from "./equal.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { or } from "./or.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { functions_rename_generic } from "./functions_rename_generic.mjs";
import { app_shared_rename_rest } from "./app_shared_rename_rest.mjs";
export async function app_shared_rename(a_name_before, a_name_after) {
  "$plain a_name_before";
  "$plain a_name_after";
  arguments_assert(arguments, 2);
  ("Gives an app a new short name, and so a new address - the name is the address, so a different address is always a rename and never a lookup table between the two.");
  ("Moves everything that spells the name: every function named after the app, the keys of every table that is keyed by app names, the plain-word lists of app names, the list of apps, and the app's dev stamp. Settings people saved follow the functions that own them, because each function rename records itself for the browser to carry across.");
  ("The old address is already out in the world, so it is written down for good. Nothing in the served folder is touched: the old page keeps being served until the app is built and promoted under its new name, and only then is the old page taken out and its address sent on - a redirect written now would send people to a page that does not exist yet.");
  let names_path = apps_names_file_path();
  let data = await file_read_json(names_path);
  let names = property_get(data, "names");
  list_includes_assert_json(names, a_name_before, {
    hint: "the old name should be an app that exists - is it spelled the way its address is?",
  });
  let taken = list_includes(names, a_name_after);
  not_assert_json(taken, {
    hint: "the new name should not already be an app - pick a name nothing answers to",
    a_name_after,
  });
  let main_before = "app_" + a_name_before;
  let main_after = "app_" + a_name_after;
  let prefix = main_before + "_";
  function mine(f_name) {
    let main = equal(f_name, main_before);
    let under = text_starts_with(f_name, prefix);
    let mine_found = or(main, under);
    return mine_found;
  }
  function name_change(f_name) {
    let rest = text_prefix_without(f_name, main_before);
    let name_changed = main_after + rest;
    return name_changed;
  }
  await functions_rename_generic(mine, name_change);
  let r = await app_shared_rename_rest(a_name_before, a_name_after);
  return r;
}
