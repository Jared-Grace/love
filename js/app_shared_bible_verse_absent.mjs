import { app_shared_bible_verse_absent_text } from "./app_shared_bible_verse_absent_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
export function app_shared_bible_verse_absent(parent) {
  "The line drawn where a verse would have gone, when no bible being read gave any words for it.";
  "Set back and centred, the same as the reference above it, because it is not the verse - it is a note about the verse being missing, and a note the weight of the words around it reads as scripture.";
  arguments_assert(arguments, 1);
  let text = app_shared_bible_verse_absent_text();
  let line = html_div_text_centered(parent, text);
  app_shared_text_deemphasized(line);
  return line;
}
