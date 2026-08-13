import { arguments_assert } from "./arguments_assert.mjs";
export function text_repeated(t, count) {
  "The same piece of writing laid down one after another a given number of times, and nothing at all when the number is none.";
  arguments_assert(arguments, 2);
  let repeated = t.repeat(count);
  return repeated;
}
