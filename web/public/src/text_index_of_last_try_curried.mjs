import { text_index_of_last_try } from "../../../love/public/src/text_index_of_last_try.mjs";
export function text_index_of_last_try_curried(s) {
  let r2 = function text_index_of_last_try_curried_result(search) {
    let r = text_index_of_last_try(s, search);
    return r;
  };
  return r2;
}
