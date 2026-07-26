import { data_paths_mentioning } from "./data_paths_mentioning.mjs";
import { duplicates_baseline_path } from "./duplicates_baseline_path.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { function_alias_keys } from "./function_alias_keys.mjs";
import { function_delete } from "./function_delete.mjs";
import { functions_duplicates_baseline_write } from "./functions_duplicates_baseline_write.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { function_shape } from "./function_shape.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
import { function_identifier_replace_named } from "./function_identifier_replace_named.mjs";
import { function_auto } from "./function_auto.mjs";
export async function functions_merge(f_name_keep, f_name_drop) {
  "Collapse two functions that do one job under two names into one. Everything that reached for the dropped name is pointed at the kept name, and the dropped file is then removed only if nothing at all is left holding it.";
  "What makes this safe is not a reading of the two but a proof: both must come out to the same shape, meaning the body with the names that say only who wrote it taken away. Same shape is same work under two spellings, so refusing when the shapes differ is what keeps this from being a guess.";
  "It finds its own set. Nobody hands it a list of the places to change, because a list handed in can be short by one and this cannot.";
  "It does not decide which name survives. That is the one judgment here, and it belongs to a person: two spellings of one idea are still two claims about what the idea is called.";
  arguments_assert(arguments, 2);
  equal_not_assert_json(f_name_keep, f_name_drop, {
    hint: "the name kept and the name dropped are the same - which two functions were meant?",
  });
  let shape_keep = await function_shape(f_name_keep);
  let shape_drop = await function_shape(f_name_drop);
  equal_assert_json(shape_keep, shape_drop, {
    f_name_keep,
    f_name_drop,
    shape_keep,
    shape_drop,
    hint: "these two do not do the same thing, so pointing one at the other would change behaviour",
  });
  let search = await data_identifiers_search(f_name_drop);
  let names = properties_get(search);
  let others = list_filter_equal_not(names, f_name_drop);
  for (let name of others) {
    await function_identifier_replace_named(name, f_name_drop, f_name_keep);
    await function_auto(name);
  }
  ("a gate baseline is a record of the defect, not something depending on it, so the one file listing this pair as an open twin must not be what stops the pair being closed - every other mention in the data folder still does");
  let data_paths = await data_paths_mentioning(f_name_drop);
  let baseline_path = duplicates_baseline_path();
  let blocking = list_filter_equal_not(data_paths, baseline_path);
  list_empty_is_assert_json(blocking, {
    f_name_drop,
    blocking,
    hint: "the data folder still spells the dropped name - clear those first",
  });
  let alias_keys = await function_alias_keys(f_name_drop);
  list_empty_is_assert_json(alias_keys, {
    f_name_drop,
    alias_keys,
    hint: "the human reaches the dropped name by an alias - move the alias to the kept name first",
  });
  await function_delete(f_name_drop);
  let remaining = await functions_duplicates_baseline_write();
  let result = {
    kept: f_name_keep,
    dropped: f_name_drop,
    changed: others,
    remaining,
  };
  return result;
}
