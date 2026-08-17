import { arguments_assert } from "./arguments_assert.mjs";
import { js_fold_block_empty } from "./js_fold_block_empty.mjs";
import { property_get } from "./property_get.mjs";
export function js_fold_block_x_name(x_ast) {
  arguments_assert(arguments, 1);
  let r = js_fold_block_empty(x_ast);
  let empty = property_get(r, "empty");
  let k = property_get(r, "k");
  let pattern_sigs = property_get(r, "pattern_sigs");
  let return_local = property_get(r, "return_local");
  let params = property_get(r, "params");
  let x_name = property_get(r, "x_name");
  let r2 = {
    empty,
    k,
    pattern_sigs,
    return_local,
    params,
    x_name,
  };
  return r2;
}
