import { marker } from "../../../love/public/src/marker.mjs";
import { string_chunk_recursive } from "../../../love/public/src/string_chunk_recursive.mjs";
export function string_tokens(input, dictionary) {
  marker("1");
  let index_left = 0;
  let result = [];
  let current = [];
  string_chunk_recursive(input, dictionary, index_left, result, current);
  return result;
}
