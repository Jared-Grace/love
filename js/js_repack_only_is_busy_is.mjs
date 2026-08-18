import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_block_callee_names } from "./js_block_callee_names.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_statement_arguments_assert_is } from "./js_statement_arguments_assert_is.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
export function js_repack_only_is_busy_is(declaration, getter) {
  arguments_assert(arguments, 2);
  let block = property_get(declaration, "body");
  let callees = js_block_callee_names(block);
  let others = 0;
  for (let callee of callees) {
    let unpack_is = equal(callee, getter);
    if (unpack_is) {
      continue;
    }
    others = add(others, 1);
  }
  let statements = property_get(block, "body");
  for (let statement of statements) {
    let bind_is = js_node_type_is(statement, "VariableDeclaration");
    if (bind_is) {
      continue;
    }
    let hand_back_is = js_node_type_is(statement, "ReturnStatement");
    if (hand_back_is) {
      continue;
    }
    ("The line counting the arguments is written by the canonical pass into every function here, so counting it as work would count a thing nobody chose against every body alike - and since the allowance is one, it would hide every repack that does a single thing besides.");
    let counting_is = js_statement_arguments_assert_is(statement);
    if (counting_is) {
      continue;
    }
    let work_is = js_statement_work_is(statement);
    if (not(work_is)) {
      continue;
    }
    others = add(others, 1);
  }
  let busy_is = greater_than(others, 1);
  return busy_is;
}
