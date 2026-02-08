import { string_tokens_recursive } from "../../../love/public/src/string_tokens_recursive.mjs";
export function text_tokens(input, dictionary) {
  let index_left = 0;
  let tokens_matches = [];
  let current = [];
  string_tokens_recursive(
    input,
    dictionary,
    index_left,
    tokens_matches,
    current,
  );
  return tokens_matches;
}
