import { object_property_exists_not_assert } from "../../../love/public/src/object_property_exists_not_assert.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
import { list_empty_is_assert_json } from "../../../love/public/src/list_empty_is_assert_json.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_identifiers_named } from "../../../love/public/src/js_identifiers_named.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
import { function_rename_identifiers_alias } from "../../../love/public/src/function_rename_identifiers_alias.mjs";
import { function_rename_fn_names_check } from "../../../love/public/src/function_rename_fn_names_check.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { function_move } from "../../../love/public/src/function_move.mjs";
export async function function_rename(f_name_before, f_name_after) {
  let identifiers = await data_identifiers_get();
  object_property_exists_not_assert(identifiers, f_name_after);
  const v = await function_name_to_path_unalias(f_name_before);
  let unaliased = object_property_get(v, "unaliased");
  f_name_before = unaliased;
  let v2 = await function_parse_unaliased(f_name_before);
  let ast = object_property_get(v2, "ast");
  let identifiers_named = js_identifiers_named(ast, f_name_after);
  list_empty_is_assert_json(identifiers_named, {
    f_name_after,
    msg: "already exists in file as identifier",
  });
  await function_rename_fn_names_check(f_name_before);
  await function_move(f_name_before, f_name_after);
  await function_rename_identifiers_alias(f_name_before, f_name_after);
  return;
}
