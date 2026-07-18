import { arguments_assert } from "./arguments_assert.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { properties_get } from "./properties_get.mjs";
import { text_starts_with_curried_right } from "./text_starts_with_curried_right.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { text_prefix_change_curried_right_2 } from "./text_prefix_change_curried_right_2.mjs";
import { function_alias_change } from "./function_alias_change.mjs";
import { each_async } from "./each_async.mjs";
export async function function_aliases_rename_if_starts_with(
  alias_prefix_before,
  alias_prefix_after,
) {
  arguments_assert(arguments, 2);
  let aliases = await function_aliases();
  let alias_names = properties_get(aliases);
  let filter = text_starts_with_curried_right(alias_prefix_before);
  let matching = list_filter(alias_names, filter);
  list_empty_not_is_assert_json(matching, {
    hint: "the prefix should match at least one alias — did nothing match?",
    alias_prefix_before,
  });
  let change = text_prefix_change_curried_right_2(
    alias_prefix_before,
    alias_prefix_after,
  );
  async function lambda(alias_old) {
    let alias_new = change(alias_old);
    await function_alias_change(alias_old, alias_new);
  }
  await each_async(matching, lambda);
}
