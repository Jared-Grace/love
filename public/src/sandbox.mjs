import { js_function_node_unwrap } from "../../../love/public/src/js_function_node_unwrap.mjs";
import { js_function_node_find_named_node } from "../../../love/public/src/js_function_node_find_named_node.mjs";
import { js_statements_with_identifiers_named } from "../../../love/public/src/js_statements_with_identifiers_named.mjs";
import { js_statement_delete } from "../../../love/public/src/js_statement_delete.mjs";
import { app_gloss_bible_home_generic } from "../../../love/public/src/app_gloss_bible_home_generic.mjs";
import { js_flo_body_add_return_argument_from_code } from "../../../love/public/src/js_flo_body_add_return_argument_from_code.mjs";
import { js_call_add_first } from "../../../love/public/src/js_call_add_first.mjs";
import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
import { function_transform_current } from "../../../love/public/src/function_transform_current.mjs";
import { html_hash_get } from "../../../love/public/src/html_hash_get.mjs";
import { function_source_remove } from "../../../love/public/src/function_source_remove.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
import { js_statement_if_return_add } from "../../../love/public/src/js_statement_if_return_add.mjs";
import { js_statement_wrap_if } from "../../../love/public/src/js_statement_wrap_if.mjs";
import { js_statement_duplicate } from "../../../love/public/src/js_statement_duplicate.mjs";
import { function_node_select_args } from "../../../love/public/src/function_node_select_args.mjs";
import { js_statement_find_call_named } from "../../../love/public/src/js_statement_find_call_named.mjs";
import { function_current_selects_apply } from "../../../love/public/src/function_current_selects_apply.mjs";
import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
import { function_current_selects_empty } from "../../../love/public/src/function_current_selects_empty.mjs";
import { function_node_select_nested } from "../../../love/public/src/function_node_select_nested.mjs";
export async function sandbox() {
  await function_current_selects_empty();
  const f_name = app_gloss_bible_home_generic.name;
  await function_current_set(f_name);
  await function_node_select_args(
    js_statements_with_identifiers_named.name,
    "on_passage",
  );
  await function_current_selects_apply(js_statement_delete.name);
  return r;
  (function_node_select_args,
    [js_function_node_find_named_node.name, "on_passage"],
    [js_statements_with_identifiers_named.name, "on_passage"],
    [js_statement_find_call_named.name, property_exists_not.name]);
  return;
  ("below is functionality that has been used in the past");
  (function_transform_current,
    [js_identifier_rename.name, "html_hash_get,html_hash_object_get"],
    [js_call_add_first.name, html_hash_get.name],
    [js_flo_body_add_return_argument_from_code.name, "n"]);
  (function_current_selects_apply,
    [js_function_node_unwrap.name],
    [js_statement_delete.name],
    [js_statement_if_return_add.name],
    [js_statement_wrap_if.name],
    [js_statement_duplicate.name]);
  await function_source_remove(f_name, "2");
  await function_node_select_nested(js_call_callee_name.name);
}
