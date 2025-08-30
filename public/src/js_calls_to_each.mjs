import { js_call_new } from "./js_call_new.mjs";
import { not } from "./not.mjs";
import { js_call_callee_name } from "./js_call_callee_name.mjs";
import { equal_by } from "./equal_by.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_statement_expression_get } from "./js_statement_expression_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_next_try } from "./list_next_try.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { each_async } from "./each_async.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_calls_to_each(ast) {
  "multiple calls line after line can be changed into each";
  let call_name = null;
  async function lambda(v) {
    let { node, stack } = v;
    let expression = js_statement_expression_get(node);
    let async_is = false;
    let call = expression;
    function lambda3() {
      async_is = true;
      call = object_property_get(expression, "argument");
    }
    js_node_type_is_if(expression, "AwaitExpression", lambda3);
    let e1 = list_get_end_1(stack);
    let next = list_next_try(e1, node);
    if (null_is(next)) {
      return;
    }
    let nti = js_node_type_not_is(next, "ExpressionStatement");
    if (nti) {
      return;
    }
    let expression2 = js_statement_expression_get(next);
    let call2 = null;
    if (async_is) {
      let nti = js_node_type_not_is(expression2, "AwaitExpression");
      if (nti) {
        return;
      }
      call2 = object_property_get(expression2, "argument");
    } else {
      call2 = expression2;
    }
    let name = js_call_callee_name(call2);
    let n = null_is(name);
    if (n) {
      return;
    }
    function lambda6() {
      let jin2 = js_node_type_not_is(expression, "CallExpression");
      if (jin2) {
        return name;
      }
      let callee = object_property_get(expression, "callee");
    }
    let eq = equal_by(call, call2, js_unparse);
    if (not(eq)) {
      return;
    }
    let { parsed } = await js_call_new(each_async.name, ast);
    let expression3 = object_property_get(parsed, "expression");
    if (async_is) {
      expression3 = object_property_get(expression3, "argument");
    }
    let arguments2 = object_property_get(expression3, "arguments");
    log({
      arguments2,
    });
    async function d() {
      await a(b);
      await a(c);
    }
  }
  js_visit_type(ast, "ExpressionStatement", lambda);
}
