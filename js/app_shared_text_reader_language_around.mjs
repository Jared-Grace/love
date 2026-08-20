import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_text_reader_language_around(parts, middle) {
  "A saying that has something dropped into the middle of it - a language's name, a count, a place - written out in every language this app has it in, and the one of them the reader in front of it should be shown, already wrapped around the thing.";
  "Each language gets what stands before the thing and what stands after it. A saying with a joining word fixed in the middle would hold every language to English's order, and Urdu puts after the name what English puts before it, so the sentence would come out backwards while every word in it was right.";
  "An empty half is a real answer and not a missing one. A language wanting nothing on one side is the normal case rather than the odd one.";
  arguments_assert(arguments, 2);
  let part = app_shared_text_reader_language(parts);
  let before = property_get(part, "before");
  let after = property_get(part, "after");
  let text = text_combine_multiple([before, middle, after]);
  return text;
}
