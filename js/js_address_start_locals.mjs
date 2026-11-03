import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_list_type } from "./js_list_type.mjs";
export function js_address_start_locals(body) {
  "every value each local name is ever given in this body, so a name can be followed back to what it holds";
  let locals = new Map();
  function value_add(spelled, value) {
    let b = locals.has(spelled);
    if (not(b)) {
      locals.set(spelled, []);
    }
    locals.get(spelled).push(value);
  }
  for (let v of js_list_type(body, "VariableDeclarator")) {
    let node = v.node;
    if (equal(node.id.type, "Identifier") && node.init) {
      value_add(node.id.name, node.init);
    }
  }
  for (let v of js_list_type(body, "AssignmentExpression")) {
    let node = v.node;
    if (equal(node.left.type, "Identifier")) {
      value_add(node.left.name, node.right);
    }
  }
  return locals;
}
