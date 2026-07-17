import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_flo_body_add_first } from "./js_flo_body_add_first.mjs";
import { js_imports_missing_add_all_at } from "./js_imports_missing_add_all_at.mjs";
import { folder_src } from "./folder_src.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_size } from "./list_size.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export function function_arguments_assert_each_add_lambda(predicates_comma) {
  async function lambda(ast) {
    let declaration = js_flo(ast);
    let params = js_function_declaration_params_get(declaration);
    let predicate_names = text_split_comma(predicates_comma);
    equal_assert_json(list_size(params), list_size(predicate_names), {
      hint: "give exactly one predicate per parameter — the guard checks every argument, so the predicate count must equal the target function's parameter count",
      predicates_comma,
    });
    let code =
      arguments_assert_each.name + "(arguments, [" + predicates_comma + "]);";
    let statement = js_parse_statement(code);
    js_flo_body_add_first(ast, statement);
    await js_imports_missing_add_all_at(ast, folder_src());
  }
  return lambda;
}
