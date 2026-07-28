import { function_call_commit } from "./function_call_commit.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { each_object } from "./each_object.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { function_rename } from "./function_rename.mjs";
import { log } from "./log.mjs";
import { equal_not } from "./equal_not.mjs";
import { object_filter } from "./object_filter.mjs";
import { object_map_async } from "./object_map_async.mjs";
import { property_exists_not_assert_json } from "./property_exists_not_assert_json.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { functions_names } from "./functions_names.mjs";
export async function functions_rename_generic(filter, name_change) {
  let f_names = await functions_names();
  let filtered = list_filter(f_names, filter);
  list_empty_not_is_assert_json(filtered, {
    hint: "the filter should match at least one function to rename — did nothing match?",
  });
  let dictionary = list_to_dictionary_value(filtered, name_change);
  function lambda(f_name_before, f_name_after) {
    let ne = equal_not(f_name_before, f_name_after);
    return ne;
  }
  let different = object_filter(dictionary, lambda);
  let identifiers = await data_identifiers_get();
  function lambda2(f_name_after) {
    text_is_assert_json(f_name_after, {
      hint: "each renamed function name should be text — did the name change produce a non-text value?",
      f_name_after,
    });
    property_exists_not_assert_json(identifiers, f_name_after, {
      hint: "each new function name should not already be taken by another identifier — pick a name that isn't in use",
    });
  }
  log(functions_rename_generic.name, {
    different,
  });
  function lambda4(value, property) {
    lambda2(value);
  }
  each_object(different, lambda4);
  async function lambda3(f_name_after, f_name_before) {
    let args = [f_name_before, f_name_after];
    await function_call_commit(function_rename, args);
  }
  ("each rename is committed as it lands rather than the whole batch at the end. A prefix migration touches hundreds of files and runs for minutes, and with many hands editing the same folder somebody else's sweep files most of them under a bare word long before this returns — so the window has to be one rename wide, which is also the only size that leaves a message naming a real command with its real arguments");
  await ai_git_noted();
  await object_map_async(different, lambda3);
  ("The pairs that were changed, which this has held since before the first one");
  ("ran. Asking the visiting helper next door for them cannot work - it is named");
  ("as though it maps and it does not, so what came back was nothing at all and a");
  ("caller reading this line saw a command that answered while every wrapper");
  ("above it passed the nothing along.");
  ("Every rename commits as it lands and any failure throws, so by here these are");
  ("the ones that went through rather than the ones that were meant to.");
  return different;
}
