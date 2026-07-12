import { text_only_or } from "./text_only_or.mjs";
export function text_only_or_space(s, symbols_split_non) {
  let replaced = text_only_or(s, symbols_split_non, " ");
  return replaced;
}
