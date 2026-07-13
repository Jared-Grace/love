import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_is } from "./list_is.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_assign_object_property_get } from "./js_assign_object_property_get.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { js_node_type_is_assert } from "./js_node_type_is_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_set } from "./property_set.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_return_identifier_name } from "./js_return_identifier_name.mjs";
export async function js_destructure_functionize(ast) {
  let variable_name = js_return_identifier_name();
  function lambda(v) {
    let node = property_get(v, "node");
    let properties = property_get(node, "properties");
    let stack = property_get(v, "stack");
    let e = list_get_end_1(stack);
    let l = list_is(e);
    if (l) {
      return;
    }
    let type_is = js_node_type_is(e, "AssignmentExpression");
    if (type_is) {
      return;
    }
    js_node_type_is_assert(e, "VariableDeclarator");
    let init = js_declare_init_get(e);
    let ii = js_identifier_is(init);
    let result = null;
    if (ii) {
      let on_true = js_identifier_name(init);
      result = on_true;
    } else {
      let on_false = js_identifier_unique_ast(ast, variable_name);
      result = on_false;
    }
    let name4 = result;
    let block_body = list_get_end(stack, 4);
    list_is_assert_json(block_body, {
      hint: "the function block body should be a list of statements",
    });
    let block_body_item = list_get_end(stack, 3);
    function lambda2(p) {
      let key = property_get(p, "key");
      let name3 = js_identifier_name(key);
      let value = property_get(p, "value");
      let name2 = js_identifier_name(value);
      let assign = js_assign_object_property_get(
        name3,
        name4,
        block_body,
        block_body_item,
        name2,
      );
    }
    each(properties, lambda2);
    if (ii) {
      list_remove(block_body, block_body_item);
    } else {
      let expression = js_parse_expression(name4);
      property_set(e, "id", expression);
    }
  }
  js_visit_type(ast, "ObjectPattern", lambda);
  await js_imports_missing_add_all(ast);
}
