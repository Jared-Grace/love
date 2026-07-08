import { add } from "../../../love/public/src/add.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { text_index_of_from } from "../../../love/public/src/text_index_of_from.mjs";
export function text_index_of_from_start(code2, token, index) {
  let index2 = text_index_of_from(code2, token, index);
  let size = text_size(token);
  let sum = add(index2, size);
  return sum;
}
