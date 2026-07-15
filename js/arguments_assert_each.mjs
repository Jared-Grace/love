import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
export function arguments_assert_each(args, predicates) {
  arguments_assert(arguments, 2);
  arguments_assert(args, predicates.length);
  for (let i = 0; i < predicates.length; i++) {
    let predicate = predicates[i];
    let arg = args[i];
    assert_json_get(predicate(arg), function () {
      return {
        index: i,
        predicate: predicate.name,
        hint: "an argument did not satisfy its expected predicate — check the value passed at this position",
      };
    });
  }
}
