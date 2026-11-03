import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_address_start_parts_call(call, starts) {
  "the arguments of a call that can supply the beginning of the text the call answers with";
  let callee_name = call.callee.name;
  let given = call.arguments;
  if (
    equal(callee_name, fn_name("text_combine")) ||
    equal(callee_name, "add")
  ) {
    let r = given.slice(0, 1);
    return r;
  }
  if (
    equal(callee_name, fn_name("text_combine_multiple")) ||
    equal(callee_name, fn_name("list_join_empty"))
  ) {
    let joined = given[0];
    if (joined && equal(joined.type, "ArrayExpression")) {
      let r2 = joined.elements.slice(0, 1);
      return r2;
    }
    let r3 = given.slice(0, 1);
    return r3;
  }
  let carried = starts.get(callee_name);
  if (not(carried)) {
    let r4 = [];
    return r4;
  }
  function lambda(position) {
    let r5 = given[position];
    return r5;
  }
  let r6 = [...carried].map(lambda);
  return r6;
}
