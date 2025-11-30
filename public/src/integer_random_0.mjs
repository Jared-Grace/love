import { marker } from "../../../love/public/src/marker.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
export function integer_random_0(column_count) {
  marker("1");
  let r6 = integer_random(1, column_count);
  return r6;
}
