import { text_index_of_last } from "../../../love/public/src/text_index_of_last.mjs";
export function text_index_of_last_curried(s) {
  let r = function text_index_of_last_curried_result(search) {
    let i = text_index_of_last(s, search);
    return i;
  };
  return r;
}
