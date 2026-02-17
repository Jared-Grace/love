import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function sandbox() {
  const a = ["a", "b", "c"];
  let result = list_slice_end(list, offset);
  let combined = text_combine_multiple(a);
  return combined;
}
