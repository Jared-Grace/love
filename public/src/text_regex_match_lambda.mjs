import { text_regex_match } from "../../../love/public/src/text_regex_match.mjs";
export function text_regex_match_lambda(regex) {
  let l = function string_regex_match_lambda_inner(input) {
    let m = text_regex_match(input, regex);
    return m;
  };
  return l;
}
