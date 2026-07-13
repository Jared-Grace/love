import { function_alias_rename } from "./function_alias_rename.mjs";
import { functions_identifiers_rename } from "./functions_identifiers_rename.mjs";
import { function_move } from "./function_move.mjs";
import { function_rename_fn_names_check } from "./function_rename_fn_names_check.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function function_rename_inner(f_name_before, f_name_after) {
  let v = await function_name_to_path_unalias(f_name_before);
  let unaliased = property_get(v, "unaliased");
  f_name_before = unaliased;
  let v2 = await function_parse_unaliased(f_name_before);
  let ast = property_get(v2, "ast");
  let identifiers_named = js_identifiers_named(ast, f_name_after);
  list_empty_is_assert_json(identifiers_named, {
    f_name_after,
    msg: "already exists in file as identifier",
  });
  await function_rename_fn_names_check(f_name_before, f_name_after);
  await function_alias_rename(f_name_before, f_name_after);
  await function_move(f_name_before, f_name_after);
  await functions_identifiers_rename(f_name_before, f_name_after);
  return f_name_before;
}
