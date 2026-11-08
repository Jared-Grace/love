import { functions_names } from "./functions_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { object_filter } from "./object_filter.mjs";
import { equal_not } from "./equal_not.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { log } from "./log.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { object_values } from "./object_values.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_rename_comma } from "./functions_rename_comma.mjs";
export async function functions_rename_generic(filter, name_change) {
  let f_names = await functions_names();
  let filtered = list_filter(f_names, filter);
  list_empty_not_is_assert_json(filtered, {
    hint: "the filter should match at least one function to rename — did nothing match?",
  });
  let dictionary = list_to_dictionary_value(filtered, name_change);
  let different = object_filter(dictionary, equal_not);
  function lambda2(f_name_after) {
    text_is_assert_json(f_name_after, {
      hint: "each renamed function name should be text — did the name change produce a non-text value?",
      f_name_after,
    });
  }
  log(functions_rename_generic.name, {
    different,
  });
  function lambda4(value, property) {
    lambda2(value);
  }
  each_object(different, lambda4);
  ("A name change that leaves every matched name as it was is nothing to do, not a mistake, so it answers with the empty map rather than handing the batch a map it refuses.");
  let befores = object_property_names(different);
  let empty_is = list_empty_is(befores);
  if (empty_is) {
    return different;
  }
  let afters = object_values(different);
  ("The whole set goes to the batch rename in one call, which reads every shared thing once - measured 2026-11-08, a rename asked one name at a time paid 17 seconds a name with no callers, so a prefix migration of two thousand names ran for hours. Whether a new name is taken is asked there, before anything is written.");
  ("It commits as one step named by the comma command that replays it, so the message is still a real command with its real arguments. The cost is the window: a peer's sweep that lands while the batch runs files what it reaches under a bare word, and that window is now one batch long rather than one rename long. A batch is short enough now that the trade favours it, and committing each rename separately would bring back the per-name cost this removes.");
  await ai_git_noted();
  let befores_comma = list_join_comma(befores);
  let afters_comma = list_join_comma(afters);
  await function_call_commit(functions_rename_comma, [
    befores_comma,
    afters_comma,
  ]);
  ("The pairs that were changed, which this has held since before the first one");
  ("ran. Asking the visiting helper next door for them cannot work - it is named");
  ("as though it maps and it does not, so what came back was nothing at all and a");
  ("caller reading this line saw a command that answered while every wrapper");
  ("above it passed the nothing along.");
  ("The batch commits as it lands and any failure throws, so by here these are");
  ("the ones that went through rather than the ones that were meant to.");
  return different;
}
