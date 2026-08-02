import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
export function throws_verdict_assert_json(r, json) {
  arguments_assert(arguments, 2);
  ("Insists that a run which has already happened ended in a refusal, and hands the");
  ("refusal back so its words can be read.");
  ("Receives what the run came to rather than the lambda itself, which is what lets");
  ("the waiting kind and the plain kind share this. Getting the verdict is the only");
  ("thing the two differ by; judging it is the same three lines, and they were");
  ("written out twice.");
  let result = property_get(r, "result");
  let throws = property_get(r, "throws");
  assert_json(throws, {
    result,
    json,
  });
  return result;
}
