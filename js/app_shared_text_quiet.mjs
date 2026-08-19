import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function app_shared_text_quiet(parent, text) {
  "One line of text put on a screen in the quieter voice, and handed back so the caller may keep writing to it.";
  "Making the line and turning its voice down were two statements everywhere they appeared, and they are one thing: a screen says this in passing rather than as the thing being read. Somebody who writes only the first half gets a line that shouts, and nothing goes red, because both halves are ordinary on their own.";
  arguments_assert(arguments, 2);
  let div = html_div_text(parent, text);
  app_shared_text_deemphasized(div);
  return div;
}
