import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_without } from "./list_without.mjs";
import { add } from "./add.mjs";
export function js_fold_plan(binding, params, return_local, target_sigs, start, k) {
  // Turn a successful match (binding, start) into the rewrite plan: the call's arg list (each param
  // resolved to the F-key it bound), the output local (where x's return value lands), and the internal
  // locals (every matched-block local except the output) that the escape gate must prove unused.
  arguments_assert(arguments, 6);
  function param_to_key(param) {
    let key = property_get(binding, param);
    return key;
  }
  let arg_keys = list_map(params, param_to_key);
  let output_name = property_get(binding, return_local);
  let block_end = add(start, k);
  let block_sigs = list_slice(target_sigs, start, block_end);
  function sig_to_name(sig) {
    let name = property_get(sig, "name");
    return name;
  }
  let block_locals = list_map(block_sigs, sig_to_name);
  let internal_locals = list_without(block_locals, output_name);
  let plan = {
    arg_keys: arg_keys,
    output_name: output_name,
    internal_locals: internal_locals,
  };
  return plan;
}
