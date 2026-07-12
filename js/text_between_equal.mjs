import { text_combine_3 } from "./text_combine_3.mjs";
export function text_between_equal(key, value) {
  let combined = text_combine_3(key, "=", value);
  return combined;
}
