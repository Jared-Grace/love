import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_node_to_block } from "./js_node_to_block.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { assert_message } from "./assert_message.mjs";
export function js_selects_functionize_range(selects, ast) {
  let node_from = list_first(selects);
  let node_to = list_last(selects);
  let f_from = js_node_to_block(ast, node_from);
  let f_to = js_node_to_block(ast, node_to);
  let body_from = property_get(f_from, "body");
  let body_to = property_get(f_to, "body");
  let same = equal(body_from, body_to);
  assert_message(
    same,
    "The two chosen statements were expected to live in the same block. Would you like to check that both sit in the same scope?",
  );
  let index_from = property_get(f_from, "index");
  let index_to = property_get(f_to, "index");
  return {
    body_from,
    index_from,
    index_to,
  };
}
