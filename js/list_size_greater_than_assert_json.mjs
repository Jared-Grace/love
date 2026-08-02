import { arguments_assert } from "./arguments_assert.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { assert_json } from "./assert_json.mjs";
export function list_size_greater_than_assert_json(list, number, json) {
  arguments_assert(arguments, 3);
  ("Refuses to go on unless a list holds more things than a given number, saying what it was holding.");
  let more = list_size_greater_than(list, number);
  assert_json(more, {
    list,
    number,
    json,
  });
}
