import { greater_than } from "../../../love/public/src/greater_than.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function text_size_greater_than_1(item) {
  const z = text_size(item);
  const n = 1;
  let g = greater_than(z, n);
  return g;
}
