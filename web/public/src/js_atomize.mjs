import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { each } from "./each.mjs";
import { js_type } from "./js_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_get } from "./list_get.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
import { list_is } from "./list_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_atomize(ast) {
  marker(marker());
  let existing = js_identifiers(ast);
  js_visit_type(ast, "CallExpression", (v) => {
    let { node } = v;
    let { stack } = v;
    const stack1 = list_get_end(stack, 1);
    if (list_is(stack1)) {
      let unique = js_identifier_unique(existing, "v");
      let copy = object_copy(node);
      let block = js_stack_last(stack, "BlockStatement");
      let block_index_next = list_index_of_next(stack, block);
      let block_body = list_get(stack, block_index_next);
      let block_index_next2 = list_index_of_next(stack, block_body);
      let block_body_item = list_get(stack, block_index_next2);
      log({
        block_body_item,
        block_body,
      });
      let block_body_item_index = list_index_of(block_body, block_body_item);
      let assign_code = js_code_let_assign(unique, "a");
      let assign = js_parse_statement(assign_code);
      log(assign);
      let { body } = block;
    }
  });
}
