import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function sandbox() {
  let combined = text_combine_multiple(["a", "b", "c"]);
  return combined;
}
