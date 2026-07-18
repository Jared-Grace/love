import { arguments_assert } from "./arguments_assert.mjs";
import { text_prefix_change_curried_right_2 } from "./text_prefix_change_curried_right_2.mjs";
import { text_starts_with_curried_right } from "./text_starts_with_curried_right.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { function_exists_not_assert_json } from "./function_exists_not_assert_json.mjs";
import { property_exists_not_assert_json } from "./property_exists_not_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each_async } from "./each_async.mjs";
import { data_transform } from "./data_transform.mjs";
import { data_aliases_path } from "./data_aliases_path.mjs";
export async function function_aliases_rename_if_starts_with(
  alias_prefix_before,
  alias_prefix_after,
) {
  arguments_assert(arguments, 2);
  let change = text_prefix_change_curried_right_2(
    alias_prefix_before,
    alias_prefix_after,
  );
  let filter = text_starts_with_curried_right(alias_prefix_before);
  async function lambda(aliases) {
    let alias_names = properties_get(aliases);
    let matching = list_filter(alias_names, filter);
    list_empty_not_is_assert_json(matching, {
      hint: "the prefix should match at least one alias — did nothing match?",
      alias_prefix_before,
    });
    let renamed = {};
    async function place(alias_old) {
      let is_match = list_includes(matching, alias_old);
      let alias_new = alias_old;
      if (is_match) {
        alias_new = change(alias_old);
        await function_exists_not_assert_json(alias_new, {
          hint: "a renamed alias shouldn't collide with an existing function name — pick a prefix that stays clear",
          alias_old,
          alias_new,
        });
      }
      property_exists_not_assert_json(renamed, alias_new, {
        hint: "two aliases would collide on the same new name — rename so they stay distinct",
        alias_old,
        alias_new,
      });
      let value = property_get(aliases, alias_old);
      property_set(renamed, alias_new, value);
    }
    await each_async(alias_names, place);
    return renamed;
  }
  let d_path = data_aliases_path();
  await data_transform("aliases", {}, lambda, d_path);
}
