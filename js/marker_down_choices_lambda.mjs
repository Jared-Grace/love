import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_flo } from "./js_flo.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_stack_list_block_is } from "./js_stack_list_block_is.mjs";
export function marker_down_choices_lambda({ stack_2, stack_1, ast }) {
  "not using this as of now";
  let declaration = js_flo(ast);
  let body_block = js_function_declaration_to_block_body(declaration);
  function lambda3(la) {
    function lambda2(v) {
      let node = property_get(v, "node");
      let stack = property_get(v, "stack");
      let includes = list_includes([body_block, declaration], node);
      if (includes) {
        return;
      }
      if (
        js_stack_list_block_is(stack, 1) ||
        js_stack_list_block_is(stack, 0)
      ) {
        la(v);
      }
    }
    js_visit(ast, lambda2);
  }
  let choices = list_adder(lambda3);
  return choices;
}
