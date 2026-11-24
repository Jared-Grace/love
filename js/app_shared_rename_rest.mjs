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
import { functions_names } from "./functions_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_quote_double } from "./text_quote_double.mjs";
import { function_name_to_path_found } from "./function_name_to_path_found.mjs";
import { file_read } from "./file_read.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_name_keyed_tables } from "./app_shared_name_keyed_tables.mjs";
import { property_exists } from "./property_exists.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
import { app_shared_name_listed_functions } from "./app_shared_name_listed_functions.mjs";
import { function_string_whole_replace } from "./function_string_whole_replace.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_set } from "./property_set.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { app_shared_renames_path } from "./app_shared_renames_path.mjs";
import { app_shared_route } from "./app_shared_route.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_shared_description_baseline_rename } from "./app_shared_description_baseline_rename.mjs";
import { app_shared_dev_stamp_path } from "./app_shared_dev_stamp_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_delete } from "./file_delete.mjs";
import { app_shared_renames_redirects_unready_write } from "./app_shared_renames_redirects_unready_write.mjs";
export async function app_shared_rename_rest(a_name_before, a_name_after) {
  "$plain a_name_before";
  "$plain a_name_after";
  arguments_assert(arguments, 2);
  ("The half of an app rename that comes after its functions are renamed: every place that spells the app's short name as a word rather than as a function moves to the new name, and the old address is written down for good. Its own command so a rename whose functions already moved - because the run stopped partway - can be finished without renaming them again.");
  ("It asks that the old name is still in the list of apps and that the new one's main function exists, so it refuses both a rename never begun and one already finished.");
  let names_path = apps_names_file_path();
  let data = await file_read_json(names_path);
  let names = property_get(data, "names");
  list_includes_assert_json(names, a_name_before, {
    hint: "the old name should still be in the list of apps - has this rename already been finished?",
  });
  let taken = list_includes(names, a_name_after);
  not_assert_json(taken, {
    hint: "the new name should not already be an app - pick a name nothing answers to",
    a_name_after,
  });
  let main_after = "app_" + a_name_after;
  let prefix = main_after + "_";
  function mine(f_name) {
    let main = equal(f_name, main_after);
    let under = text_starts_with(f_name, prefix);
    let mine_found = or(main, under);
    return mine_found;
  }
  let f_names = await functions_names();
  let renamed = list_filter(f_names, mine);
  list_includes_assert_json(renamed, main_after, {
    hint: "the app's functions should already be renamed - run the whole rename instead",
  });
  ("A function of the app may spell the app's short name as a value, the way the gloss gates hand it to the complaint they raise. That spelling follows no rename - but the same word can just as well be the app's own content: in the code app, 107 of 108 copies of the word code are a lesson's program, under keys, in data pairs and in comparisons, and only one names the app. Nothing about where a copy sits tells the two apart, so none is moved here. Each function still spelling the old name is handed back, and a copy that names the app is moved by name afterwards, as its own command.");
  let quoted = text_quote_double(a_name_before);
  let literals_left = [];
  for (let f_name of renamed) {
    let f_path = await function_name_to_path_found(f_name);
    let code = await file_read(f_path);
    let b = text_includes(code, quoted);
    if (not(b)) {
      continue;
    }
    list_add(literals_left, f_name);
  }
  let tables = app_shared_name_keyed_tables();
  let keys_moved = [];
  for (let table of tables) {
    let table_keyed = table();
    let has = property_exists(table_keyed, a_name_before);
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
  ("Lists that spell app names as plain words: nothing above follows them, so the old word is replaced there whole.");
  let lists_moved = [];
  for (let listed of app_shared_name_listed_functions()) {
    let listed_path = await function_name_to_path_found(listed.name);
    let listed_code = await file_read(listed_path);
    let listed_has = text_includes(listed_code, quoted);
    if (not(listed_has)) {
      continue;
    }
    await function_call_commit(function_string_whole_replace, [
      listed.name,
      a_name_before,
      a_name_after,
    ]);
    list_add(lists_moved, listed.name);
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
  let names_text = json_format_to_spaces(data, 1) + "\n";
  await file_overwrite(names_path, names_text);
  let renames_path = app_shared_renames_path();
  let renames = await file_read_json(renames_path);
  let source = app_shared_route(a_name_before);
  list_add(renames, {
    before: a_name_before,
    after: a_name_after,
    source,
  });
  await file_overwrite_json(renames_path, renames);
  let description_moved = await app_shared_description_baseline_rename(
    a_name_before,
    a_name_after,
  );
  let stamp_path = app_shared_dev_stamp_path(a_name_before);
  let stamped = await file_exists(stamp_path);
  if (stamped) {
    await file_delete(stamp_path);
  }
  ("The new address works from the moment the rename lands, sent back to the old page until the new one is promoted. Left to be run by hand, it was not: the front page offered a card to /learn_eng with nothing behind it, and the gate that refuses such a card then refused promoting the very app that would fill it.");
  let redirects_waiting = await app_shared_renames_redirects_unready_write();
  let r = {
    renamed,
    keys_moved,
    lists_moved,
    description_moved,
    literals_left,
    redirects_waiting,
  };
  return r;
}
