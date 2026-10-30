import { arguments_assert } from "./arguments_assert.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function page_drawn_text(page) {
  arguments_assert(arguments, 1);
  ("the words the page in front of the browser shows - or, when it shows no words at all, a line saying how many pictures it shows instead, so that a page drawn only in pictures is not read as a page that drew nothing.");
  ("the game and the designs page draw no words on their opening screen, only pictures, and a sweep reading words alone called both of them dead on the published site while they were working perfectly.");
  ("a picture counts only when it takes up room on the screen, because a page that never arrives can still hold a hidden icon or two from its loading screen. a coloured box counts as a picture too: the designs page draws thousands of them and not one image, and reading only images called it blank.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let words = await page.innerText("body");
  let trimmed = text_trim(words);
  let b = text_empty_is(trimmed);
  let worded = not(b);
  if (worded) {
    return words;
  }
  let expression =
    '(function () { var n = 0; document.querySelectorAll("body *").forEach(function (e) { var r = e.getBoundingClientRect(); if (r.width > 0 && r.height > 0) { var t = e.tagName; var s = getComputedStyle(e); var drawn = t === "IMG" || t === "svg" || t === "CANVAS" || t === "VIDEO" || s.backgroundImage !== "none" || s.backgroundColor !== "rgba(0, 0, 0, 0)"; if (drawn) { n = n + 1; } } }); return n; })()';
  let pictures = await page.evaluate(expression);
  let none = equal(pictures, 0);
  if (none) {
    return words;
  }
  let v = String(pictures);
  let r = text_combine_multiple(["(no words, ", v, " pictures)"]);
  return r;
}
