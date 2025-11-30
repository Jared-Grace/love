import { marker } from "../../../love/public/src/marker.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
export function integer_random_range(column_count) {
  marker("1");
  let r6 = integer_random(0, column_count - 1);
  return r6;
}
