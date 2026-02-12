import { text_index_of_last_try } from "../../../love/public/src/text_index_of_last_try.mjs";
export function text_index_of_last_try_curried(s) {
  return function text_index_of_last_try_curried_result(search) {
    return text_index_of_last_try(s, search);
  };
}
