import { arguments_assert } from "./arguments_assert.mjs";
import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_flo_body_add_first } from "./js_flo_body_add_first.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
export async function function_arguments_assert_each_add(f_name, predicates_comma) {
  arguments_assert(arguments, 2);
  async function lambda(ast) {
    let code =
      arguments_assert_each.name + "(arguments, [" + predicates_comma + "]);";
    let statement = js_parse_statement(code);
    js_flo_body_add_first(ast, statement);
    await js_imports_missing_add_all(ast);
  }
  await function_transform(f_name, lambda);
}
