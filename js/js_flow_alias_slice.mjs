import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { js_flow_key_power_name } from "./js_flow_key_power_name.mjs";
export function js_flow_alias_slice(read, starts, returns_alias, mutating) {
  "Which of a function's parameters, and which repo functions' answers, a value could be the very same object as, or hold. Read is what js_function_flow_read gave back; starts are lists of names the value is first held under. Unlike what a value is worked out from, a yes or no computed from an object is not followed back to it: only holding is.";
  "Returns_alias is the set of repo functions that may hand back something they were handed, so an answer of one of them is followed to what it was handed; every answer's function is reported either way, since its answer may be a power of its own. Mutating is the set of repo functions that may change what they are handed - only those can store one argument inside another.";
  let seen = new Set();
  let work = [];
  for (let s of starts) {
    work.push(...s);
  }
  let params = new Set();
  let callees = new Set();
  let key_power = js_flow_key_power_name();
  while (greater_than(work.length, 0)) {
    let v = work.pop();
    if (seen.has(v)) {
      continue;
    }
    seen.add(v);
    for (let i = 0; less_than(i, read.params.length); i++) {
      if (read.params[i].includes(v)) {
        params.add(i);
      }
    }
    if (equal(v, key_power)) {
      callees.add(v);
    }
    for (let source of read.aliases.get(v) ?? []) {
      if (not_equal(source.gate, null)) {
        callees.add(source.gate);
        let b = returns_alias.has(source.gate);
        if (not(b)) {
          continue;
        }
      }
      if (not_equal(source.via, null) && not(mutating.has(source.via))) {
        continue;
      }
      work.push(...source.data);
    }
  }
  let slice = {
    params: [...params],
    callees: [...callees],
  };
  return slice;
}
