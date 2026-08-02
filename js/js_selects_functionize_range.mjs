import { js_selects_pair_same_block } from "./js_selects_pair_same_block.mjs";
import { property_get } from "./property_get.mjs";
export function js_selects_functionize_range(selects, ast) {
  let pair = js_selects_pair_same_block(
    ast,
    selects,
    "The two chosen statements were expected to live in the same block. Would you like to check that both sit in the same scope?",
  );
  let body_from = property_get(pair, "body");
  let index_from = property_get(pair, "index_from");
  let index_to = property_get(pair, "index_to");
  let r = {
    body_from,
    index_from,
    index_to,
  };
  return r;
}
