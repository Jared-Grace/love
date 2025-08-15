import { js_left_right_set } from "./js_left_right_set.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { log } from "./log.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_assign } from "./js_code_assign.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
import { object_replace } from "./object_replace.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { js_dollar_a_generic } from "./js_dollar_a_generic.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_dollar_s({ stack1, stack2, ast, afters }) {
  js_dollar_a_generic({
    stack1,
    stack2,
    afters,
    lambda,
    ast,
  });
  function lambda({ stack1, next, stack2, ast, declarations }) {
    "todo handle more than 1";
    let s1 = list_size_1(declarations);
    assert(s1);
    if (false) {
      $s;
      let a = 0;
      list_remove(stack2, stack1);
    }
    function lambda2(declaration) {
      let code = js_code_assign("a", "a");
      let expression = js_parse_statement(code);
      let { id, init } = declaration;
      js_left_right_set(expression, id, init);
      log(expression);
      return;$g$statement$expression
      let { name } = id;
      let is = js_identifiers_named(ast, name);
      function lambda3(item) {
        let replacement = object_copy(init);
        object_replace(item, replacement);
      }
      each(is, lambda3);
    } 
    each(declarations, lambda2);
  }
}
