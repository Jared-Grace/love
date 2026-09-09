import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { multiply_round } from "./multiply_round.mjs";
export function share_out_of_thousand(part, whole) {
  "How much of a whole one part is, said as a count out of a thousand and rounded to a whole number.";
  "Out of a thousand rather than a hundred wherever the whole is large: a hundredth of a quarter of a million is two and a half thousand items, and a share that cannot move until that many have been mended is a share that reads as no progress on every day somebody worked.";
  "A whole of nothing is nought rather than a division by nothing. The answer would otherwise be a number that is not one, which a record can be written with and no comparison can read back.";
  let empty = equal(whole, 0);
  if (empty) {
    let r = 0;
    return r;
  }
  let part_of = divide(part, whole);
  let share = multiply_round(part_of, 1000);
  return share;
}
