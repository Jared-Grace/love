import { null_is } from "../../../love/public/src/null_is.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { list_next_index } from "../../../love/public/src/list_next_index.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_left_right_set } from "../../../love/public/src/js_left_right_set.mjs";
import { js_code_assign } from "../../../love/public/src/js_code_assign.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_dollar_a_generic } from "../../../love/public/src/js_dollar_a_generic.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_null } from "../../../love/public/src/js_null.mjs";
export function js_dollar_s({ stack1, stack2, ast, afters }) {
  let count = 1;
  js_dollar_a_generic({
    stack1,
    stack2,
    afters,
    lambda,
    ast,
    count,
  });
  function lambda({ stack1, next, stack2, ast, declarations }) {
    "todo handle more than 1";
    let s1 = list_size_1(declarations);
    assert(s1);
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
        list_remove(stack2, stack1);
      }
      return;
    }
    each(declarations, lambda2);
  }
}
