import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_strings_generic } from "./js_strings_generic.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_delete } from "./property_delete.mjs";
import { each } from "./each.mjs";
export function js_strings_text_replace(ast, text_before, text_after) {
  "Every piece of written-out text in here that says one thing exactly is made to say another instead, and how many were changed is handed back.";
  "The whole of the text has to match, not part of it. A marker naming a parameter is one word beside another, and a parameter's name is a word other names contain - so replacing wherever the word appears would reach into the middle of a sentence that only mentioned it.";
  "What was written before is thrown away rather than adjusted. A written-out piece of text is kept twice over, as the value it stands for and as the characters somebody typed, and the characters are what gets printed back out - so setting the value alone leaves the file identical and says nothing about it. Dropping the characters is what makes the printing build them again from the value.";
  arguments_assert(arguments, 3);
  let found = js_strings_generic(ast);
  let replaced = 0;
  function lambda(result) {
    let same = property_equals(result, "value", text_before);
    if (same) {
      let node = property_get(result, "node");
      property_set(node, "value", text_after);
      property_delete(node, "raw");
      replaced++;
    }
  }
  each(found, lambda);
  return replaced;
}
