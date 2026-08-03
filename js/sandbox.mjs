import { fn_name } from "./fn_name.mjs";
import { function_current_selects_nodes_log } from "./function_current_selects_nodes_log.mjs";
import { function_current_selects_apply_args } from "./function_current_selects_apply_args.mjs";
import { function_new_text } from "./function_new_text.mjs";
import { function_transform_current } from "./function_transform_current.mjs";
import { function_source_remove } from "./function_source_remove.mjs";
import { function_node_select_args } from "./function_node_select_args.mjs";
import { function_current_selects_apply } from "./function_current_selects_apply.mjs";
import { function_current_set } from "./function_current_set.mjs";
import { function_current_selects_empty } from "./function_current_selects_empty.mjs";
import { function_node_select_nested } from "./function_node_select_nested.mjs";
import { text_combine } from "./text_combine.mjs";
export async function sandbox() {
  let f_name = fn_name("app_code_lesson_functions_console_log_arithmetic");
  await function_current_set(f_name);
  await function_current_selects_empty();
  ("current_commands: ");
  {
    await function_node_select_args(
      fn_name("js_find_function_type_name_starts_with"),
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
          [
            fn_name("js_call_named_find_alias"),
            fn_name("folder_user_docs_read"),
          ],
          [fn_name("js_expressions_with_string_starting_with"), "p"],
          [fn_name("js_find_call_name_includes"), "ab"],
          [fn_name("js_find_function_type_name_starts_with"), "ab"],
          [fn_name("js_function_node_find_named_node"), "on_passage"],
          [
            fn_name("js_statement_find_call_named"),
            fn_name("property_exists_not"),
          ],
          [fn_name("js_statements_with_identifiers_named"), "on_passage"]);
      }
      {
        (function_current_selects_apply,
          [fn_name("js_expand_selects")],
          [fn_name("js_function_node_empty")],
          [fn_name("js_function_node_unwrap")],
          [fn_name("js_statement_delete")],
          [fn_name("js_statement_duplicate")],
          [fn_name("js_statement_if_return_add")],
          [fn_name("js_statement_wrap_if")]);
      }
      {
        (function_current_selects_apply_args,
          [fn_name("js_expression_functionize"), "1", "file_name"],
          [
            fn_name("js_function_node_call"),
            fn_name("js_operators_arithmetic"),
          ]);
      }
      {
        let combined = text_combine(
          fn_name("html_hash_get"),
          ",html_hash_object_get",
        );
        (function_transform_current,
          [fn_name("js_call_add"), "ldf"],
          [fn_name("js_call_add_before_return"), "ljn"],
          [fn_name("js_call_add_first"), fn_name("html_hash_get")],
          [
            fn_name("js_call_generalize"),
            fn_name("folder_user_docs_path"),
            "file_name_to_path",
          ],
          [fn_name("js_find_return_argument_set"), "joined"],
          [fn_name("js_flo_body_add_return_argument_from_code"), "n"],
          [fn_name("js_flo_body_empty")],
          [
            fn_name("js_identifier_name_new"),
            "l",
            fn_name("folder_user_docs_path_previous"),
          ],
          [fn_name("js_identifier_rename"), combined]);
      }
    }
    ("regular function calls: ");
    {
      await function_source_remove(f_name, "2");
      await function_node_select_nested(fn_name("js_call_callee_name_try"));
      await function_new_text(f_name, text);
      await function_current_selects_empty();
    }
  }
}
