import { arguments_assert } from "./arguments_assert.mjs";
export function random_seed_name() {
  "the word a page is asked to carry when the numbers drawn on it have to come out the same every time";
  "the reader of the word and the script that writes it are two different files, and a page that was handed one word while the drawing looked for another would simply draw fresh numbers and say nothing - which is the whole thing being fixed, come back as a way of failing";
  arguments_assert(arguments, 0);
  let name = "random_seed";
  return name;
}
