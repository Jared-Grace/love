import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { js_address_start_parts } from "./js_address_start_parts.mjs";
export function js_address_start_positions_add(expression, scope, found) {
  "adds to found the position of every parameter that can supply the beginning of this expression's text";
  if (not(expression)) {
    return;
  }
  if (equal(expression.type, "Identifier")) {
    let spelled = expression.name;
    let position = scope.params.indexOf(spelled);
    if (greater_than_equal(position, 0)) {
      found.add(position);
    }
    let written = scope.locals.get(spelled);
    if (written && not(scope.seen.has(spelled))) {
      scope.seen.add(spelled);
      for (let value of written) {
        js_address_start_positions_add(value, scope, found);
      }
    }
    return;
  }
  for (let part of js_address_start_parts(expression, scope.starts)) {
    js_address_start_positions_add(part, scope, found);
  }
}
