import { property_exists_not_assert_json } from "./property_exists_not_assert_json.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
export async function function_rename_check(f_name_after) {
  let identifiers = await data_identifiers_get();
  property_exists_not_assert_json(identifiers, f_name_after, {
    hint: "the new function name should not already be taken by another identifier — pick a name that isn't in use",
  });
}
