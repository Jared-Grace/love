import { greater_than } from "../../../love/public/src/greater_than.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
export function string_size_greater_than_1(item) {
  const z = string_size(item);
  const n = 1;
  let g = greater_than(z, n);
  return g;
}
