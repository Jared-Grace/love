import { text_size } from "../../../love/public/src/text_size.mjs";
export function string_size_1(list) {
  const s1 = text_size(list) === 1;
  return s1;
}
