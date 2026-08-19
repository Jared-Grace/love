import { app_g_verify_hint_p } from "./app_g_verify_hint_p.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { g_verify_chapter_asked } from "./g_verify_chapter_asked.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_verify_home_asked_banner(wrap) {
  "The line above the passage saying the address named a chapter this bible could not have, so the page opened the last one instead. Painted only when that happened, and leaving nothing behind when it did not.";
  "A page that quietly opened something else would be the failure rather than the repair. The reader asked for one chapter and is looking at another, and without a word here the only thing they can conclude is that the tool is broken - which is worse than the wrong chapter, because a broken tool is not something they can fix and a mistyped link is.";
  "The word is quoted back, because the reader is looking for their own typing. Three letters that are not a book and a chapter number written without its leading nought are the two mistakes people actually make, and both are obvious the moment somebody sees what they wrote.";
  "It says what it did as well as what was wrong. A complaint that stopped at the mistake would leave the reader wondering which chapter they are now looking at, and the chapter is named right beside this in the title line.";
  "Quiet rather than alarming. Nothing is lost and nothing is broken - a link asked for something that is not there - so this is a note the reader can read and carry on past, in the same voice as the hint beside it.";
  arguments_assert(arguments, 1);
  let r = g_verify_chapter_asked();
  let usable = property_get(r, "usable");
  if (usable) {
    return;
  }
  let asked = property_get(r, "asked");
  let missing = null_is(asked);
  if (missing) {
    return;
  }
  let text = text_combine_multiple([
    "The address asked for ",
    asked,
    ", which is not a chapter this bible has, so the chapter above is the one that was open last. A chapter is three letters for the book and two digits for the number, as in 1JN01.",
  ]);
  app_g_verify_hint_p(wrap, text);
}
