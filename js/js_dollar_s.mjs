import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { js_assign_default } from "./js_assign_default.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { null_is } from "./null_is.mjs";
import { js_declare } from "./js_declare.mjs";
import { list_next_index } from "./list_next_index.mjs";
import { list_insert } from "./list_insert.mjs";
import { property_get } from "./property_get.mjs";
import { js_left_right_set } from "./js_left_right_set.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { assert_message } from "./assert_message.mjs";
import { each } from "./each.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_dollar_a_generic } from "./js_dollar_a_generic.mjs";
import { js_null } from "./js_null.mjs";
export function js_dollar_s({ stack_1, stack_2, ast, afters }) {
  let count = 1;
  js_dollar_a_generic({
    stack_1,
    stack_2,
    afters,
    lambda,
    ast,
    count,
  });
  function lambda({ stack_1, next, stack_2, ast, declarations }) {
    "todo handle more than 1";
    let s = list_size_1(declarations);
    assert_message(
      s,
      "This handles a single declaration for now - more than one isn't supported yet. Would you like to split them apart?",
    );
    function lambda2(declaration) {
      let expression = js_assign_default();
      let init = js_declare_init_get(declaration);
      let id = property_get(declaration, "id");
      let type_is = js_literal_is(init);
      if (type_is) {
        let value = property_get(init, "value");
        if (null_is(value)) {
          return;
        }
      }
      js_left_right_set(expression, id, init);
      let name = property_get(id, "name");
      let init2 = js_null();
      let assign = js_declare(name, init2);
      object_replace(next, expression);
      let index_next = list_next_index(stack_2, stack_1);
      list_insert(stack_2, index_next, assign);
      list_remove(stack_2, stack_1);
      return;
    }
    each(declarations, lambda2);
  }
}
