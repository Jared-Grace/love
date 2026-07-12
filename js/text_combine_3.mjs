import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_combine_3(a, b, c) {
  let combined = text_combine_multiple([a, b, c]);
  return combined;
}
