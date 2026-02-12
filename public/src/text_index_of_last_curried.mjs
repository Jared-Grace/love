import { text_index_of_last } from "../../../love/public/src/text_index_of_last.mjs";
export function text_index_of_last_curried(s) {
  return function text_index_of_last_curried_result(search) {
    return text_index_of_last(s, search);
  };
}
