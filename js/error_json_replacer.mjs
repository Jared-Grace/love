import { arguments_assert } from "./arguments_assert.mjs";
import { error_is } from "./error_is.mjs";
import { error_readable } from "./error_readable.mjs";
export function error_json_replacer(key, value) {
  arguments_assert(arguments, 2);
  ("stands in front of every value on its way into json and hands back the words of anything thrown, so an error written down keeps what it said");
  ("it is offered every value at every depth, which is the whole reason it is shaped this way rather than as a walk over the properties in front of us - an error inside a list inside an object is the case that was actually losing its words, and a walk one level deep would have missed exactly that one.");
  ("the key it is offered says where the value sat, and nothing here needs to know that - what an error should say does not depend on what it was filed under.");
  let thrown = error_is(value);
  if (thrown) {
    let words = error_readable(value);
    return words;
  }
  return value;
}
