import { clipboard_copy } from "./clipboard_copy.mjs";
import { clipboard_value_text } from "./clipboard_value_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function clipboard_copy_value(value) {
  arguments_assert(arguments, 1);
  ("$plain value");
  ("Puts whatever a function answered with onto the clipboard, in the shape a person would want to paste it.");
  ("THE COPYING ATOM TAKES TEXT AND NOTHING ELSE, which is right for it and wrong for every caller that has an answer rather than a sentence. Handed a list it would have written the word every list turns into when a machine is asked for one word, and the paste would have said the list was objects. So the shaping is done here, once, and named - see the reading that turns a value into that text.");
  let text = clipboard_value_text(value);
  await clipboard_copy(text);
}
