import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { object_filter } from "./object_filter.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { not } from "./not.mjs";
import { data_transform } from "./data_transform.mjs";
import { data_aliases_path } from "./data_aliases_path.mjs";
export async function function_aliases_delete_if_starts_with(f_name_prefix) {
  arguments_assert(arguments, 1);
  function deleting_is(f_name, alias) {
    let sw = text_starts_with(f_name, f_name_prefix);
    return sw;
  }
  function keeping_is(f_name, alias) {
    let sw = deleting_is(f_name, alias);
    let n = not(sw);
    return n;
  }
  function lambda(aliases) {
    let deleting = object_filter(aliases, deleting_is);
    let deleting_names = properties_get(deleting);
    list_empty_not_is_assert_json(deleting_names, {
      hint: "no alias points at a function with that prefix — would you like to check the spelling?",
      f_name_prefix,
    });
    let kept = object_filter(aliases, keeping_is);
    return kept;
  }
  let d_path = data_aliases_path();
  let v = await data_transform("aliases", {}, lambda, d_path);
  return v;
}
