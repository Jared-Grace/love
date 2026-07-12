import { list_concat } from "./list_concat.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
import { list_map } from "./list_map.mjs";
import { list_to } from "./list_to.mjs";
import { text_vowels_lower } from "./text_vowels_lower.mjs";
export function list_vowels() {
  let a = text_vowels_lower();
  let vowels_lower = list_to(a);
  let vowels_upper = list_map(vowels_lower, text_upper_to);
  let vowels = list_concat(vowels_lower, vowels_upper);
  return vowels;
}
