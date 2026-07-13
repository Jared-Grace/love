import { list_is } from "./list_is.mjs";
import { assert_message } from "./assert_message.mjs";
export function list_concat(a, b) {
  let l = list_is(a);
  assert_message(
    l,
    "Expected the first value to be a list before concatenating. Would you like to check what was passed in?",
  );
  let concated = a.concat(b);
  return concated;
}
