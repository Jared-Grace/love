import { string_size } from "../../../love/public/src/string_size.mjs";
export function string_size_greater_than_1(item) {
  let g = string_size(item) > 1;
  return g;
}
