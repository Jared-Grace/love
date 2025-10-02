import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_includes_lambda(item) {
  marker("1");
  let l = function string_includes_lambda_inner(input) {
    let si = string_includes(input, item);
    return si;
  };
  return l;
}
