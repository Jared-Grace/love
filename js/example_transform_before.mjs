import { js_node_type_is_new } from "./js_node_type_is_new.mjs";
// The "new predicate from scratch" example starts from an empty stub named after
// its first arg (the new fn name); every other example starts from e.before.
export function example_transform_before(fn_name, e) {
  if (fn_name === js_node_type_is_new.name) {
    return "export function " + e.args[0] + "() {}";
  }
  return e.before;
}
