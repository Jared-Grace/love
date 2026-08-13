import { js_operators_binary } from "./js_operators_binary.mjs";
import { js_equality_operators } from "./js_equality_operators.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { null_is } from "./null_is.mjs";
export function js_equality_function_names() {
  "The names a sameness question wears once the auto pass has turned it from an operator into a call.";
  "Read off the operator table rather than written out, so a rename of one of them follows the table and cannot be forgotten here. Only the spellings of the operators themselves are written out, and those belong to the language.";
  let operators = js_operators_binary();
  let words = js_equality_operators();
  let names = [];
  for (let record of operators) {
    let operator = property_get(record, "operator");
    let asks = list_includes(words, operator);
    if (asks) {
      let fn = property_get_or_null(record, "fn");
      let missing = null_is(fn);
      if (missing) {
        continue;
      }
      list_add_unique(names, fn.name);
    }
  }
  return names;
}
