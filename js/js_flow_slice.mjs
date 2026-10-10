import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
export function js_flow_slice(read, starts, with_control, mutating) {
  ("Which of a function's parameters, and which functions it calls, a value could have been worked out from. Read is what ",
    fn_name("js_function_flow_read"),
    " gave back; starts are lists of the names the value is first read from. Every name each one was worked out from is followed in turn, until nothing new turns up.");
  ("With control, the conditions deciding whether a line ran are followed too - that is the question of whether something happens. Without, only the values that can flow are followed - the question of what a value can be, which a condition cannot answer differently, since it chooses between values and makes none.");
  ("Mutating is the set of functions that may change what they are handed; a value handed to one of them may come back changed, so that function is followed too.");
  let seen = new Set();
  let work = [];
  for (let s of starts) {
    work.push(...s);
  }
  let params = new Set();
  let callees = new Set();
  let imported = new Set(read.imported);
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
    if (imported.has(v)) {
      callees.add(v);
    }
    for (let source of read.index.get(v) ?? []) {
      work.push(...source.data);
      if (with_control) {
        work.push(...source.control);
      }
      if (not_equal(source.via, null) && mutating.has(source.via)) {
        work.push(source.via);
      }
    }
  }
  let slice = {
    params: [...params],
    callees: [...callees],
  };
  return slice;
}
