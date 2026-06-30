import { integer_random } from "../../../love/public/src/integer_random.mjs";
export function integer_random_1(column_count) {
  let r = integer_random(1, column_count);
  return r;
}
