import { text_includes } from "../../../love/public/src/text_includes.mjs";
export function string_includes_lambda(item) {
  let l = function string_includes_lambda_inner(input) {
    let si = text_includes(input, item);
    return si;
  };
  return l;
}
