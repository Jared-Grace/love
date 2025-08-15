import { null_is } from "./null_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_declare } from "./js_declare.mjs";
import { js_keyword_null } from "./js_keyword_null.mjs";
import { js_declare_assign } from "./js_declare_assign.mjs";
import { list_next_index } from "./list_next_index.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_get } from "./object_property_get.mjs";
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
import { js_null } from "./js_null.mjs";
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
      let a = null;
      a = 0;
      list_remove(stack2, stack1);
    }
    function lambda2(declaration) {
      let code = js_code_assign("a", "a");
      let s = js_parse_statement(code);
      let expression = object_property_get(s, "expression");
      let { id, init } = declaration;
      let type_is = js_node_type_is(init, "Literal");
      if (type_is) {
        let value = object_property_get(init, "value");
        if (null_is(value)) {
          return;
        }
      }
      js_left_right_set(expression, id, init);
      let name3 = object_property_get(id, "name");
      let init2 = js_null();
      let assign = js_declare(name3, init2);
      list_add(afters, lambda);
      function lambda() {
        object_replace(next, s);
        let index_next = list_next_index(stack2, stack1);
        list_insert(stack2, index_next, assign);
      }
      return;
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
