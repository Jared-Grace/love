import { string_includes } from "../../../love/public/src/string_includes.mjs";
export function string_includes_lambda(item) {
  let l = function string_includes_lambda_inner(input) {
    let si = string_includes(input, item);
    return si;
  };
  return l;
}
