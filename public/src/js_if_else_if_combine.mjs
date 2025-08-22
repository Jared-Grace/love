import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_left_right_set } from "./js_left_right_set.mjs";
import { js_code_or } from "./js_code_or.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { equal_by_async } from "./equal_by_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_is_if_async } from "./js_node_type_is_if_async.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
export async function js_if_else_if_combine(ast) {
  async function lambda(v) {
    let { node, stack } = v;
    let stack1 = list_get_end_1(stack);
    async function lambda3() {
      let consequent2 = object_property_get(node, "consequent");
      let consequent = object_property_get(stack1, "consequent");
      let eq = await equal_by_async(consequent, consequent2, js_unparse);
      if (eq) {
        let test = object_property_get(node, "test");
        let test2 = object_property_get(stack1, "test");
        let code_expression = js_code_or("a", "a");
        let expression = js_parse_expression(code_expression);
        js_left_right_set(expression, test2, test);
        object_property_set(stack1, "test", expression);
        object_property_set(stack1, "alternate", null);
      }
    }
    await js_node_type_is_if_async(stack1, "IfStatement", lambda3);
  }
  await js_visit_type_each_async(ast, "IfStatement", lambda);
}
