import { js_function_node_call } from "./js_function_node_call.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { js_expression_functionize } from "./js_expression_functionize.mjs";
import { js_function_node_empty } from "./js_function_node_empty.mjs";
import { function_current_selects_nodes_log } from "./function_current_selects_nodes_log.mjs";
import { js_find_function_type_name_starts_with } from "./js_find_function_type_name_starts_with.mjs";
import { js_find_call_name_includes } from "./js_find_call_name_includes.mjs";
import { app_code_lesson_functions_console_log_arithmetic } from "./app_code_lesson_functions_console_log_arithmetic.mjs";
import { js_find_return_argument_set } from "./js_find_return_argument_set.mjs";
import { js_call_add_before_return } from "./js_call_add_before_return.mjs";
import { js_call_add } from "./js_call_add.mjs";
import { js_flo_body_empty } from "./js_flo_body_empty.mjs";
import { js_call_generalize } from "./js_call_generalize.mjs";
import { js_identifier_name_new } from "./js_identifier_name_new.mjs";
import { js_call_named_find_alias } from "./js_call_named_find_alias.mjs";
import { js_expand_selects } from "./js_expand_selects.mjs";
import { function_current_selects_apply_args } from "./function_current_selects_apply_args.mjs";
import { js_expressions_with_string_starting_with } from "./js_expressions_with_string_starting_with.mjs";
import { function_new_text } from "./function_new_text.mjs";
import { js_function_node_unwrap } from "./js_function_node_unwrap.mjs";
import { js_function_node_find_named_node } from "./js_function_node_find_named_node.mjs";
import { js_statements_with_identifiers_named } from "./js_statements_with_identifiers_named.mjs";
import { js_statement_delete } from "./js_statement_delete.mjs";
import { js_flo_body_add_return_argument_from_code } from "./js_flo_body_add_return_argument_from_code.mjs";
import { js_call_add_first } from "./js_call_add_first.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { function_transform_current } from "./function_transform_current.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
import { function_source_remove } from "./function_source_remove.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { js_statement_if_return_add } from "./js_statement_if_return_add.mjs";
import { js_statement_wrap_if } from "./js_statement_wrap_if.mjs";
import { js_statement_duplicate } from "./js_statement_duplicate.mjs";
import { function_node_select_args } from "./function_node_select_args.mjs";
import { js_statement_find_call_named } from "./js_statement_find_call_named.mjs";
import { function_current_selects_apply } from "./function_current_selects_apply.mjs";
import { function_current_set } from "./function_current_set.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { function_current_selects_empty } from "./function_current_selects_empty.mjs";
import { function_node_select_nested } from "./function_node_select_nested.mjs";
import { text_combine } from "./text_combine.mjs";
import { folder_user_docs_read } from "./folder_user_docs_read.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { folder_user_docs_path_previous } from "./folder_user_docs_path_previous.mjs";
export async function sandbox() {
  let f_name = app_code_lesson_functions_console_log_arithmetic.name;
  await function_current_set(f_name);
  await function_current_selects_empty();
  ("current_commands: ");
  {
    let r = await function_node_select_args(
      js_find_function_type_name_starts_with.name,
      "ab",
    );
    await function_current_selects_nodes_log();
  }
  return;
  ("below is functionality that has been used in the past: ");
  {
    ("function calls with varied arguments");
    {
      {
        (function_node_select_args,
          [js_call_named_find_alias.name, folder_user_docs_read.name],
          [js_expressions_with_string_starting_with.name, "p"],
          [js_find_call_name_includes.name, "ab"],
          [js_find_function_type_name_starts_with.name, "ab"],
          [js_function_node_find_named_node.name, "on_passage"],
          [js_statement_find_call_named.name, property_exists_not.name],
          [js_statements_with_identifiers_named.name, "on_passage"]);
      }
      {
        (function_current_selects_apply,
          [js_expand_selects.name],
          [js_function_node_empty.name],
          [js_function_node_unwrap.name],
          [js_statement_delete.name],
          [js_statement_duplicate.name],
          [js_statement_if_return_add.name],
          [js_statement_wrap_if.name]);
      }
      {
        (function_current_selects_apply_args,
          [js_expression_functionize.name, "1", "file_name"],
          [js_function_node_call.name, js_operators_arithmetic.name]);
      }
      {
        let combined = text_combine(
          html_hash_get.name,
          ",html_hash_object_get",
        );
        (function_transform_current,
          [js_call_add.name, "ldf"],
          [js_call_add_before_return.name, "ljn"],
          [js_call_add_first.name, html_hash_get.name],
          [
            js_call_generalize.name,
            folder_user_docs_path.name,
            "file_name_to_path",
          ],
          [js_find_return_argument_set.name, "joined"],
          [js_flo_body_add_return_argument_from_code.name, "n"],
          [js_flo_body_empty.name],
          [
            js_identifier_name_new.name,
            "l",
            folder_user_docs_path_previous.name,
          ],
          [js_identifier_rename.name, combined]);
      }
    }
    ("regular function calls: ");
    {
      await function_source_remove(f_name, "2");
      await function_node_select_nested(js_call_callee_name_try.name);
      await function_new_text(f_name, text);
      await function_current_selects_empty();
    }
  }
}
