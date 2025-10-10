import { string_regex_match } from "../../../love/public/src/string_regex_match.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_regex_match_lambda(regex) {
  marker("1");
  let l = function string_regex_match_lambda_inner(input) {
    let m = string_regex_match(input, regex);
    return m;
  };
  return l;
}
