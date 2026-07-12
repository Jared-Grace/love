import { js_await_if_unwrap } from "./js_await_if_unwrap.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_brackets_empty } from "./js_code_brackets_empty.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { not } from "./not.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { equal_by } from "./equal_by.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_statement_expression_get } from "./js_statement_expression_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_next_try } from "./list_next_try.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { each_async } from "./each_async.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_calls_to_each(ast) {
  "multiple calls line after line can be changed into each";
  let call_name = null;
  async function lambda(v) {
    let stack = property_get(v, "stack");
    let node = property_get(v, "node");
    let expression = js_statement_expression_get(node);
    let r2 = js_await_if_unwrap(expression);
    let call = property_get(r2, "argument");
    let async_is = property_get(r2, "async_is");
    let e = list_get_end_1(stack);
    let next = list_next_try(e, node);
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
      call2 = property_get(expression2, "argument");
    } else {
      call2 = expression2;
    }
    let name = js_call_callee_name_try(call2);
    let n = null_is(name);
    if (n) {
      return;
    }
    function lambda6(c) {
      let jin = js_node_type_not_is(c, "CallExpression");
      if (jin) {
        return name;
      }
      let callee = property_get(c, "callee");
      let code = js_unparse(callee);
      return code;
    }
    let eq = equal_by(call, call2, lambda6);
    if (not(eq)) {
      return;
    }
    let r = await js_call_new(each_async.name, ast);
    let parsed = property_get(r, "parsed");
    let expression3 = property_get(parsed, "expression");
    if (async_is) {
      expression3 = property_get(expression3, "argument");
    }
    let arguments2 = js_call_arguments_get(expression3);
    let code2 = js_code_brackets_empty();
    let array_expression = js_parse_expression(code2);
    let elements = property_get(array_expression, "elements");
    async function d() {
      await a(b);
      await a(c);
    }
  }
  js_visit_type(ast, "ExpressionStatement", lambda);
}
