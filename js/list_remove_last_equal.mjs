import { equal_assert_json } from "./equal_assert_json.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
export function list_remove_last_equal(list, expected_last) {
  let popped = list_remove_last(list);
  equal_assert_json(popped, expected_last, {
    hint: "the item removed from the end should equal the expected last item — is the list in the order you expect?",
  });
}
