import { string_chunk_recursive } from "../../../love/public/src/string_chunk_recursive.mjs";
export function string_chunk(input, dictionary) {
  let index_left = 0;
  let result = [];
  let current = [];
  string_chunk_recursive(input, dictionary, index_left, result, current);
  return result;
}
