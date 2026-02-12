import { js_assign_default } from "../../../love/public/src/js_assign_default.mjs";
import { js_literal_is } from "../../../love/public/src/js_literal_is.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { list_next_index } from "../../../love/public/src/list_next_index.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_left_right_set } from "../../../love/public/src/js_left_right_set.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_dollar_a_generic } from "../../../love/public/src/js_dollar_a_generic.mjs";
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
      let expression = js_assign_default();
      let init = property_get(declaration, "init");
      let id = property_get(declaration, "id");
      let type_is = js_literal_is(init);
      if (type_is) {
        let value = property_get(init, "value");
        if (null_is(value)) {
          return;
        }
      }
      js_left_right_set(expression, id, init);
      let name3 = property_get(id, "name");
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
