import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function text_capitals_apart_is(text) {
  arguments_assert(arguments, 1);
  ("Whether no two capital letters in this text stand next to each other.");
  ("Asked before turning a word run together into a name of this repo. A capital there is read as the start of a part, so one capital means one part boundary and the turning is a rule anybody can apply. Two capitals in a row mean something else - a short form written in large letters, where the letters are one word between them - and the same rule pulls that word apart into a letter each.");
  ("So this is the line where the rule stops being a name. On one side the capitals say where the parts are; on the other they say the opposite, and what the parts should be is a reading, which belongs to whoever does the reading rather than to a command.");
  let r = /[A-Z][A-Z]/;
  let together = r.test(text);
  let apart = not(together);
  return apart;
}
