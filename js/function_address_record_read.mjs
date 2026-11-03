import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_address_start_positions_add } from "./js_address_start_positions_add.mjs";
export function function_address_record_read(record, steering, starts) {
  "goes over one function once, and answers whether that taught the walk anything new";
  let checked = property_get(record, "checked");
  let returned = property_get(record, "returned");
  let calls = property_get(record, "calls");
  let locals = property_get(record, "locals");
  let params = property_get(record, "params");
  let f_name = property_get(record, "f_name");
  let grew = false;
  function positions_of(expression) {
    let scope = {
      params,
      locals,
      starts,
      seen: new Set(),
    };
    let found = new Set();
    js_address_start_positions_add(expression, scope, found);
    let r = [...found];
    return r;
  }
  function learn(map, positions) {
    for (let position of positions) {
      let known = map.get(f_name) ?? new Set();
      let b = known.has(position);
      if (not(b)) {
        known.add(position);
        map.set(f_name, known);
        grew = true;
      }
    }
  }
  for (let expression of returned) {
    let v = positions_of(expression);
    learn(starts, v);
  }
  for (let call of calls) {
    let opener =
      equal(call.callee.property?.name, "goto") ||
      equal(call.callee.name, "fetch");
    let opened = opener ? [0] : [...(steering.get(call.callee.name) ?? [])];
    for (let position of opened) {
      let given = positions_of(call.arguments[position]);
      function lambda(p) {
        let b2 = checked.includes(p);
        let n = not(b2);
        return n;
      }
      let v2 = given.filter(lambda);
      learn(steering, v2);
    }
  }
  return grew;
}
