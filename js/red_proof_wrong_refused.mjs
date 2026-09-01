import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { json_equal } from "./json_equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function red_proof_wrong_refused(
  wrong_names,
  wrong,
  cases,
  expected_key,
) {
  "Asks every wrong version of the reader every case the corpus writes down, and hands back which cases refused which version, together with the versions no case refused at all.";
  arguments_assert(arguments, 4);
  let refused = {};
  let unrefused = [];
  for (let wrong_name of wrong_names) {
    let reader = property_get(wrong, wrong_name);
    let indices = [];
    let index = 0;
    for (let one of cases) {
      let expected = property_get(one, expected_key);
      let answered = null;
      let threw = false;
      try {
        answered = reader(one);
      } catch (e) {
        threw = true;
      }
      let same = threw ? false : json_equal(answered, expected);
      if (not(same)) {
        list_add(indices, index);
      }
      index = index + 1;
    }
    refused[wrong_name] = indices;
    if (list_empty_is(indices)) {
      list_add(unrefused, wrong_name);
    }
  }
  let r = {
    refused,
    unrefused,
  };
  return r;
}
