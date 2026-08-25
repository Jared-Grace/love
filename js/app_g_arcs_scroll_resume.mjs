import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_g_arcs_scroll_remember } from "./app_g_arcs_scroll_remember.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { html_scroll_top_set } from "./html_scroll_top_set.mjs";
export function app_g_arcs_scroll_resume(panel, watched, chapter_code) {
  "Says which chapter the sheet now holds, and puts the reader back as far down it as they had come.";
  "THE TWO ARE ONE STEP because they are true at the same single moment and at no other. The sheet is only worth being put back to once it is finished, and the chapter is only safe to file under once it is on screen - so a version that told the watcher earlier would have it filing distances measured against a sheet that was still being built.";
  "IT IS RUN AT THE END OF EVERY DRAWING, not only when the page opens. Filing a note draws the sheet again, so being sent to the top on filing a note is the same loss as being sent to the top on a refresh - and it is the one that happens far more often.";
  "A DIFFERENT CHAPTER IS LEFT AT THE TOP. A distance means nothing on a sheet it was not measured against, and the top of the chapter just chosen is where a reader choosing it expects to be.";
  "IF THE ARCS THEMSELVES START BEING REWRITTEN, this is the thing to change, and the change is known: file which turn was at the top rather than how far down it was, matching it back by the nickname and the number the turn already carries. It costs a walk over every turn on the sheet where this costs one reading, which is why it was not done first - a review bench is read far more often than the writing under it moves.";
  arguments_assert(arguments, 3);
  property_set(watched, "chapter_code", chapter_code);
  let place = storage_local_get(app_g_arcs_scroll_remember, "place");
  let missing = null_is(place);
  if (missing) {
    return;
  }
  let remembered = property_get(place, "chapter_code");
  let b = equal(remembered, chapter_code);
  let elsewhere = not(b);
  if (elsewhere) {
    return;
  }
  let scroll_top = property_get(place, "scroll_top");
  html_scroll_top_set(panel, scroll_top);
}
