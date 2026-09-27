import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_second } from "./list_second.mjs";
export function app_code_pointer_color_or_null(pointers, text) {
  arguments_assert(arguments, 2);
  ("the colour a list of pointers gives a piece of text, or null when no pointer names it; pointers is a list of pairs, each the texts to colour and the colour to give them, and the first pair naming the text wins");
  for (let pointer of pointers) {
    let texts = list_first(pointer);
    if (list_includes(texts, text)) {
      let color = list_second(pointer);
      return color;
    }
  }
  return null;
}
