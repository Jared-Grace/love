import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_highlight_color() {
  arguments_assert(arguments, 0);
  ("the colour behind a word that is being pointed at, and behind the piece of code that word is pointing to");
  ("Two things wear it and they are the whole reason it is a function: a word in an English line and a chip in a line of code, sitting a few lines apart, and the only thing telling a learner they are the same thing is that they are the same colour. Written out twice, a later change to one would quietly break the pointing, and nothing would go red.");
  ("The deep blue these screens already draw the cup and their own writing in, so a highlight is the screen's own colour used harder rather than a new colour arriving to mean something.");
  let color = app_shared_color_blue_dark();
  return color;
}
