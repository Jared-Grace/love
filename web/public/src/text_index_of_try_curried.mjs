import { text_index_of_try } from "../../../love/public/src/text_index_of_try.mjs";
export function text_index_of_try_curried(t) {
  let r = function text_index_of_try_curried_result(item) {
    let v = text_index_of_try(t, item);
    return v;
  };
  return r;
}
