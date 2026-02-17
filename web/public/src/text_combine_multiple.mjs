import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function text_combine_multiple(list) {
  let combined = list_reduce(list, text_combine, "");
  return combined;
}
