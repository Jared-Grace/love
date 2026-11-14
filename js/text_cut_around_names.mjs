import { arguments_assert } from "./arguments_assert.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { text_take } from "./text_take.mjs";
export function text_cut_around_names(text, names) {
  arguments_assert(arguments, 2);
  ("A text cut into pieces that take turns: words, then a name, then words, then the next name, and so on, always starting and ending with words - which may be empty. So a sentence with names dropped into it can be drawn with the names stressed and everything else plain.");
  ("Each name is looked for only in the word pieces still left, never inside a name already cut out, so a short name that also sits inside a longer one - chapter 1 of 1 John - is found where it really stands, provided the longer one is listed first.");
  ("A name found nowhere is left alone, and the text keeps its words; a heading drawn without its stress is still the right heading.");
  let parts = [text];
  for (let name of names) {
    for (let index = 0; index < parts.length; index += 2) {
      let part = parts[index];
      let at = text_index_of_try(part, name);
      if (at < 0) {
        continue;
      }
      let before = text_take(part, at);
      let after = part.slice(at + name.length);
      parts.splice(index, 1, before, name, after);
      break;
    }
  }
  return parts;
}
