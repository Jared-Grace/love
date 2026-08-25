import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { html_scroll_top_get } from "./html_scroll_top_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function app_g_arcs_scroll_remember(panel, watched) {
  "Files how far down the arcs bench the reader has come, under the chapter they are reading, so a refresh puts them back rather than at the top.";
  "THE READER IS THE REASON, not the page. Reviewing arcs is one long sitting down a sheet of hundreds of turns, and every note filed draws the sheet again from the top - so before this, the cost of saying one thing about turn ninety was scrolling back to turn ninety. That is a tax on saying anything at all, and it falls hardest on the reader who is finding the most to say.";
  "IT IS FILED UNDER THE CHAPTER because two chapters are two different sheets, and being put back a thousand pixels down a sheet that was never scrolled is worse than being put at the top of it.";
  "IT IS FILED BY HOW FAR DOWN RATHER THAN BY WHICH TURN, which is the cheaper of the two and the weaker. Reading a distance is one number off the panel, where naming a turn means asking every turn on the sheet where it is - and this runs on every twitch of a finger on a phone. What it buys with that is exactness only while the arcs are not being rewritten: a turn added above where the reader was standing moves the reader, because the distance stayed and the writing under it moved. That is the right trade while the arcs are being read rather than authored, and the note beside the resuming half says what to build if that changes.";
  "IT SAYS NOTHING UNTIL A SHEET HAS BEEN DRAWN, which is what keeps the very first moment of the page from filing a zero over yesterday's place.";
  "AFTER THAT IT IS SAFE TO FILE A ZERO, and that is worth setting down because it looks unsafe. Emptying the sheet drops the panel to the very top and the browser says so, so a nothing does get filed in the gap between the emptying and the drawing. Nothing is lost by it: the distance is read when the saying happens rather than carried in the saying, the putting back runs in the same unbroken step as the emptying, and the browser says so again when the putting back moves the panel - so whichever of the two arrives last reads a panel that is already standing where the reader left it.";
  arguments_assert(arguments, 2);
  let chapter_code = property_get(watched, "chapter_code");
  let unknown = null_is(chapter_code);
  if (unknown) {
    return;
  }
  let scroll_top = html_scroll_top_get(panel);
  let place = {
    chapter_code,
    scroll_top,
  };
  storage_local_set(app_g_arcs_scroll_remember, "place", place);
}
