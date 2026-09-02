import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_top_ask_key() {
  "Where a bible screen leaves its way back to the top of what is being read, for the row of arrows at the foot of the page to find.";
  "The row is built after the reading is, and by shared code that knows nothing about what was put on the page. Only the screen that laid the reading out knows which part of it is the top, so the screen says so and the row goes and asks - the same shape as the way an app says which chapters it can offer.";
  "A screen that says nothing gets a row of two arrows and no way up, which is what every bible screen here had before this existed.";
  arguments_assert(arguments, 0);
  let v = "bible_top_ask";
  return v;
}
