import { string_size } from "../../../love/public/src/string_size.mjs";
export function string_size_less_1(s) {
  let sz = string_size(s);
  const sz1 = sz - 1;
  return sz1;
}
