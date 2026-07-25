import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_to_block } from "./js_node_to_block.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { js_functionize } from "./js_functionize.mjs";
export async function js_selects_functionize(ast, selects, f_name_new) {
  arguments_assert(arguments, 3);
  ("Pulls everything from the first chosen statement through the last one out into");
  ("a function of its own. The two ends are ordinary selections, so any selector");
  ("can name them, and nothing has to be written into the code first to mark where");
  ("the span begins and ends.");
  let node_from = list_first(selects);
  let node_to = list_get_end_1(selects);
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
  await js_functionize(ast, f_name_new, body_from, index_from, index_to);
}
