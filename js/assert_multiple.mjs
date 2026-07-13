import { each } from "./each.mjs";
import { assert_message } from "./assert_message.mjs";
export function assert_multiple(fn, list) {
  function lambda(l) {
    let ii = fn(l);
    assert_message(ii, "One of these items didn't pass the check. Would you like to look at which one fell short?");
  }
  each(list, lambda);
}
