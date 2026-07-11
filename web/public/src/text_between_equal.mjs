import { text_combine_ } from "../../../love/public/src/text_combine_3.mjs";
export function text_between_equal(key, value) {
  let combined = text_combine_(key, "=", value);
  return combined;
}
