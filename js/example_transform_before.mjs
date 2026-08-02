import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
('The "new predicate from scratch" example starts from an empty stub named after');
("its first arg (the new fn name); every other example starts from e.before.");
export function example_transform_before(f_name, e) {
  let right = fn_name("js_node_type_is_new");
  if (equal(f_name, right)) {
    let r = "export function " + e.args[0] + "() {}";
    return r;
  }
  let r2 = e.before;
  return r2;
}
