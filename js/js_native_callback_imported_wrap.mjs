import { js_native_callback_imported_calls } from "./js_native_callback_imported_calls.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_native_callback_imported_wrap(ast) {
  "hands each imported name a native array method was given straight as its callback to a lambda of one argument instead, which calls it with the item alone";
  "this changes nothing a run can see only for a callback that never reads past its first argument; one that counts its arguments throws today and stops throwing, and one that reads the index would lose it - so this is for the repair to run after it has checked what each callback takes";
  "the lambda's argument is named afresh at each site, because the file's names grow by one with every site rewritten";
  let calls = js_native_callback_imported_calls(ast);
  for (let call of calls) {
    let passed = call.arguments[0].name;
    let item = js_identifier_unique_ast(ast, "item");
    let lambda = js_parse_expression(
      "(" + item + ") => " + passed + "(" + item + ")",
    );
    call.arguments[0] = lambda;
  }
}
