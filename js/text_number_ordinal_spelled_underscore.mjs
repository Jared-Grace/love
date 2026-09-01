import { arguments_assert } from "./arguments_assert.mjs";
import { text_number_ordinal_spelled } from "./text_number_ordinal_spelled.mjs";
import { text_replace_space_underscore } from "./text_replace_space_underscore.mjs";
export function text_number_ordinal_spelled_underscore(number) {
  arguments_assert(arguments, 1);
  ("A whole number written as a name code can hold - thirty_third - which is its ordinal spelling with an underscore wherever the spelling has a space.");
  ("THE SPELLING AND THE NAME ARE ONE FACT AND HAVE TO STAY ONE. Code that numbers things in order carries the same words as prose that counts them, differing only in the character between them, so the two are made from the same table rather than from two. Kept apart they drift the day somebody writes forty-second in one of them.");
  let spelled = text_number_ordinal_spelled(number);
  let name = text_replace_space_underscore(spelled);
  return name;
}
