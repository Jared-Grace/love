import { string_size } from "./string_size.mjs";
export function string_size_less_1(typed) {
  let sz = string_size(typed);
  const sz1 = sz - 1;
  return sz1;
}
