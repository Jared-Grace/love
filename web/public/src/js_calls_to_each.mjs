import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_brackets_empty } from "../../../love/public/src/js_code_brackets_empty.mjs";
import { js_call_new } from "../../../love/public/src/js_call_new.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
import { equal_by } from "../../../love/public/src/equal_by.mjs";
import { js_node_type_not_is } from "../../../love/public/src/js_node_type_not_is.mjs";
import { js_statement_expression_get } from "../../../love/public/src/js_statement_expression_get.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { list_next_try } from "../../../love/public/src/list_next_try.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
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
      call = property_get(expression, "argument");
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
      call2 = property_get(expression2, "argument");
    } else {
      call2 = expression2;
    }
    let name = js_call_callee_name(call2);
    let n = null_is(name);
    if (n) {
      return;
    }
    function lambda6(c) {
      let jin2 = js_node_type_not_is(c, "CallExpression");
      if (jin2) {
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
    let { parsed } = await js_call_new(each_async.name, ast);
    let expression3 = property_get(parsed, "expression");
    if (async_is) {
      expression3 = property_get(expression3, "argument");
    }
    let arguments2 = property_get(expression3, "arguments");
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
