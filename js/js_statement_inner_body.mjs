import { js_statement_if_is } from "./js_statement_if_is.mjs";
import { js_statement_if_consequent_get } from "./js_statement_if_consequent_get.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { property_get } from "./property_get.mjs";
export function js_statement_inner_body(node) {
  "The lines held inside a wrapping statement, whichever wrapper it is. A loop";
  "keeps them under one name and a test keeps them under another, and everything";
  "that wants to reach inside would otherwise have to know which it was looking";
  "at.";
  let if_is = js_statement_if_is(node);
  if (if_is) {
    let consequent = js_statement_if_consequent_get(node);
    let held = js_block_body_get(consequent);
    return held;
  }
  let block = property_get(node, "body");
  let inner = js_block_body_get(block);
  return inner;
}
