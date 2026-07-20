import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_fold_call_statement(fn_name, arg_keys, output_name) {
  // Brick 4a: build the statement that replaces a matched block — `let <output> = <fn_name>(<args>)`.
  // arg_keys are canonical unparses (identifier names or literal source), so they compose straight
  // into valid source; parse it back to an AST statement node.
  arguments_assert(arguments, 3);
  let args_text = list_join(arg_keys, ", ");
  let code = text_combine_multiple([
    "let ",
    output_name,
    " = ",
    fn_name,
    "(",
    args_text,
    ");",
  ]);
  let statement = js_parse_statement(code);
  return statement;
}
