import { arguments_assert } from "./arguments_assert.mjs";
import { bless_prayer_rung } from "./bless_prayer_rung.mjs";
import { bless_prayer_rung_shown } from "./bless_prayer_rung_shown.mjs";
import { app_g_bless_pray_words } from "./app_g_bless_pray_words.mjs";
export function app_g_bless_pray_overlay(container_map, rung, on_amen) {
  arguments_assert(arguments, 3);
  ("The prayer said over a person and everyone the prayer reaches with them, put up over");
  ("the world for the player to read.");
  ("Only the WORDS are decided here. How a prayer is held up, and when its amen arrives,");
  ("is one answer shared by every prayer said on this street.");
  ("The words are the same every single time and the two little pictures either side of");
  ("them are not, so the panel is never quite the page it was last time. This prayer is");
  ("said thousands of times in a sitting, and a screen that is identical on the thousandth");
  ("showing has stopped being read - the eye knows the shape of it and skips to the");
  ("button. Changing the words to fix that would be changing the prayer, which is the one");
  ("thing here that must not move; changing what stands around them costs nothing and");
  ("makes the reader look.");
  ("The shown form is what is printed and the bare prayer is what the wait is timed from,");
  ("because the pictures are not words to be read.");
  let prayer = bless_prayer_rung(rung);
  let shown = bless_prayer_rung_shown(prayer);
  let overlay = app_g_bless_pray_words(container_map, prayer, shown, on_amen);
  return overlay;
}
