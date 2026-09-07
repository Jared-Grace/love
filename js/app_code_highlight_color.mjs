import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_brand_blue } from "./app_shared_color_brand_blue.mjs";
export function app_code_highlight_color() {
  arguments_assert(arguments, 0);
  ("the colour behind a word that is being pointed at, and behind the piece of code that word is pointing to");
  ("Two things wear it and they are the whole reason it is a function: a word in an English line and a chip in a line of code, sitting a few lines apart, and the only thing telling a learner they are the same thing is that they are the same colour. Written out twice, a later change to one would quietly break the pointing, and nothing would go red.");
  ("THE BLUE THE PAGES LEAD WITH, not the deep one the labels on blue cards are written in. The pointed-at piece of code usually sits ON a black line, and against black the deep blue measures 2.67 to 1 where this one measures 4.06 - so the deep one read as a dark shape on a dark line and the thing being pointed at had to be looked for, which is the one thing a pointer must never make a learner do.");
  ("This is the same blue, read from the same place, that a block being worked out wears while the line comes down. Not a coincidence and not a clash: both say this piece of the line is the one to look at, so one blue is the honest number of blues for it. The reasoning was already written down over there, arrived at from the same black line, before this asked the same question again.");
  let color = app_shared_color_brand_blue();
  return color;
}
