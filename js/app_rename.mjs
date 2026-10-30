import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_file_path } from "./apps_names_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { html_public_remove } from "./html_public_remove.mjs";
import { equal } from "./equal.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { or } from "./or.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { functions_rename_generic } from "./functions_rename_generic.mjs";
import { app_name_keyed_tables } from "./app_name_keyed_tables.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_set } from "./property_set.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_shared_dev_stamp_path } from "./app_shared_dev_stamp_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_delete } from "./file_delete.mjs";
import { app_renames_path } from "./app_renames_path.mjs";
import { app_route } from "./app_route.mjs";
import { app_renames_redirects_write } from "./app_renames_redirects_write.mjs";
export async function app_rename(a_name_before, a_name_after) {
  "$plain a_name_before";
  "$plain a_name_after";
  arguments_assert(arguments, 2);
  ("Gives an app a new short name, and so a new address - the name is the address, so a different address is always a rename and never a lookup table between the two.");
  ("Moves everything that spells the name: every function named after the app, the keys of every table that is keyed by app names, the list of apps, and the app's dev stamp. Settings people saved follow the functions that own them, because each function rename records itself for the browser to carry across.");
  ("The old address is already out in the world, so it is written down for good and sent on to the new one with a lasting redirect. The old built files are taken out of the served folder; building the app under its new name is a separate step, so this never sends anything to the internet.");
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
  ("The old built files are found by the old name, so they are taken out before any function moves, and committed under their own command so the deletions are not filed under somebody else's.");
  await ai_git_noted();
  let removed = await function_call_commit(html_public_remove, [a_name_before]);
  let main_before = "app_" + a_name_before;
  let main_after = "app_" + a_name_after;
  let prefix = main_before + "_";
  function mine(f_name) {
    let main = equal(f_name, main_before);
    let under = text_starts_with(f_name, prefix);
    let r = or(main, under);
    return r;
  }
  function name_change(f_name) {
    let rest = text_prefix_without(f_name, main_before);
    let r = main_after + rest;
    return r;
  }
  let renamed = await functions_rename_generic(mine, name_change);
  let tables = app_name_keyed_tables();
  let keys_moved = [];
  for (let table of tables) {
    let keyed = table();
    let has = property_exists(keyed, a_name_before);
    if (not(has)) {
      continue;
    }
    let args = [
      table.name,
      fn_name("js_find_declaration_named"),
      "r",
      fn_name("js_object_key_rename"),
      a_name_before + "," + a_name_after,
    ];
    await function_call_commit(function_select_apply_args_auto, args);
    list_add(keys_moved, table.name);
  }
  function name_lambda(name) {
    if (equal(name, a_name_before)) {
      return a_name_after;
    }
    return name;
  }
  let moved = list_map(names, name_lambda);
  let sorted = list_sort_text(moved);
  property_set(data, "names", sorted);
  await file_overwrite_json(names_path, data);
  let stamp_path = app_shared_dev_stamp_path(a_name_before);
  let stamped = await file_exists(stamp_path);
  if (stamped) {
    await file_delete(stamp_path);
  }
  let renames_path = app_renames_path();
  let renames = await file_read_json(renames_path);
  let source = app_route(a_name_before);
  list_add(renames, {
    before: a_name_before,
    after: a_name_after,
    source,
  });
  await file_overwrite_json(renames_path, renames);
  let redirects = await app_renames_redirects_write();
  let r = {
    removed,
    renamed,
    keys_moved,
    redirects,
  };
  return r;
}
