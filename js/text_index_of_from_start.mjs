import { add } from "./add.mjs";
import { text_size } from "./text_size.mjs";
import { text_index_of_from } from "./text_index_of_from.mjs";
export function text_index_of_from_start(code, token, index) {
  let index2 = text_index_of_from(code, token, index);
  let size = text_size(token);
  let sum = add(index2, size);
  return sum;
}
