import { text_index_of_try } from "../../../love/public/src/text_index_of_try.mjs";
export function text_index_of_try_curried(t) {
  return function text_index_of_try_curried_result(item) {
    return text_index_of_try(t, item);
  };
}
