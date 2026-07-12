import { text_alphabet_lower } from "./text_alphabet_lower.mjs";
import { text_alphabet_upper } from "./text_alphabet_upper.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_includes } from "./text_includes.mjs";
export function text_identifier_char_is(character) {
  let lower = text_alphabet_lower();
  let upper = text_alphabet_upper();
  let digits = "0123456789";
  let symbols = "_$";
  let chars = text_combine_multiple([lower, upper, digits, symbols]);
  let i = text_includes(chars, character);
  return i;
}
