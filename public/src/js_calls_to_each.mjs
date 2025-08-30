import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_statement_expression_get } from "./js_statement_expression_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_next_try } from "./list_next_try.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_calls_to_each(ast) {
  "multiple calls line after line can be changed into each";
  let call_name = null;
  function lambda(v) {
    let { node, stack } = v;
    let expression = js_statement_expression_get(node);
    let awaited = false;
    let call = expression;
    function lambda3() {
      awaited = true;
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
    if (awaited) {
      let nti = js_node_type_not_is(next, "AwaitExpression");
      if (nti) {
        return;
      }
      call2 = object_property_get(expression2, "argument");
    } else {
      call2 = expression;
    }
    log({
      call2,
      call,
    });
    async function d() {
      await a(b);
      await a(c);
    }
  }
  js_visit_type(ast, "ExpressionStatement", lambda);
}
