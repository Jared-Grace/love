import { list_empty_is_assert } from "../../../love/public/src/list_empty_is_assert.mjs";
import { js_identifiers_named } from "../../../love/public/src/js_identifiers_named.mjs";
import { function_parse } from "../../../love/public/src/function_parse.mjs";
import { function_rename_identifiers_alias } from "../../../love/public/src/function_rename_identifiers_alias.mjs";
import { function_rename_fn_names_check } from "../../../love/public/src/function_rename_fn_names_check.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { function_move } from "../../../love/public/src/function_move.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename(f_name_before, f_name_after) {
  const { unaliased } = await function_name_to_path_unalias(f_name_before);
  f_name_before = unaliased;
  let { ast } = await function_parse(f_name_before);
  let identifiers_named = js_identifiers_named(ast, f_name_after);
  list_empty_is_assert(identifiers_named, {
    f_name_after,
    msg: "already exists in file as identifier",
  });
  await function_rename_fn_names_check(f_name_before);
  await function_move(f_name_before, f_name_after);
  await function_rename_identifiers_alias(f_name_before, f_name_after);
  marker("1");
  return;
}
