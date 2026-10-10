import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { js_flow_alias_slice } from "./js_flow_alias_slice.mjs";
import { js_flow_key_power_name } from "./js_flow_key_power_name.mjs";
export function js_flow_read_power(
  read,
  mutating,
  returns_alias,
  capable,
  ppower,
) {
  "Where a power - the language's machinery, or what reaches the machine - could be used by the function js_function_flow_read gave back this reading for: called, or changed in place. A power only does harm when it is used, so a function that merely carries one along, or reads it, uses nothing.";
  "The places it is used are the things the function changes in place, the values it calls, and what it hands into an argument of another function that uses that argument the same way - ppower maps each such function to those positions. Mutating is the set of functions that change what they are handed; returns_alias the set that may hand back what they were handed; capable the set that may hand back a power.";
  "Answers which parameters may be the thing used, so callers handing a power into them are found, and which powers may be it - the functions whose answer it may be, when they are capable, and reads by an unproved key.";
  let places = [...read.mutations, ...read.dynamic];
  for (let call of read.calls) {
    let positions = ppower.get(call.callee);
    if (equal(positions, undefined)) {
      continue;
    }
    for (let i = 0; less_than(i, call.args.length); i++) {
      if (positions.has(i) || call.args[i].spread) {
        places.push(call.args[i].alias);
      }
    }
  }
  let s = js_flow_alias_slice(read, places, returns_alias, mutating);
  let key_power = js_flow_key_power_name();
  function lambda(c) {
    let r = equal(c, key_power) || capable.has(c);
    return r;
  }
  let used = s.callees.filter(lambda);
  let power = {
    params: s.params,
    used,
  };
  return power;
}
