import { not } from "../../../love/public/src/not.mjs";
import { json_equal } from "../../../love/public/src/json_equal.mjs";
export function json_equal_not(verse_numbers, expected) {
  let eq2 = json_equal(verse_numbers, expected);
  let n = not(eq2);
  return n;
}
