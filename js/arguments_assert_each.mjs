import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
export function arguments_assert_each(args, predicates) {
  arguments_assert(arguments, 2);
  for (let i = 0; less_than(i, predicates.length); i++) {
    let predicate = predicates[i];
    let arg = args[i];
    function lambda() {
      let r = {
        index: i,
        predicate: predicate.name,
        hint: "an argument did not satisfy its expected predicate — check the value passed at this position",
      };
      return r;
    }
    let b = predicate(arg);
    assert_json_get(b, lambda);
  }
}
