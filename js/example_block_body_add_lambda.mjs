import { js_statement_find_call_named } from "./js_statement_find_call_named.mjs";
import { js_statement_if_slot_get } from "./js_statement_if_slot_get.mjs";
export function example_block_body_add_lambda(call_name, slot, code, adder) {
  "Three named pieces, none of which knows about the others: a SELECTOR finds the";
  "if-statement whose test calls the named function, a SLOT step descends to one of";
  "its two blocks, and a TRANSFORM adds a statement there. Swap any one piece and";
  "the other two are unchanged — that is what makes them multiply.";
  async function lambda(ast) {
    let statement_if = await js_statement_find_call_named(ast, call_name);
    let block = js_statement_if_slot_get(statement_if, slot);
    let selects = [block];
    adder(ast, selects, code);
  }
  return lambda;
}
