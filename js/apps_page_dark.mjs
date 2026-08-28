import { arguments_assert } from "./arguments_assert.mjs";
export function apps_page_dark() {
  arguments_assert(arguments, 0);
  ("The apps whose PAGE is painted dark before a line of their code has run - named here by");
  ("the app, so the colour is in the built HTML file and is on the screen at the browser's");
  ("very first paint.");
  ("Every app in this repo waits behind the same dark cover while it downloads, but the");
  ("page underneath that cover is the browser's own white, and the cover is eight parts in");
  ("ten of black rather than solid. So the wait is grey where it was meant to be dark, and");
  ("the moment before the cover is painted at all is white - which on a phone away from the");
  ("desk is long enough to read as the wrong page having opened.");
  ("A list rather than every app, because a dark page under a light app is the same fault");
  ("the other way round: the app paints its own white over it a moment later and the player");
  ("gets a flash of dark instead of a flash of white. Only an app that is itself dark, or");
  ("that arrives out of the dark on purpose, belongs here.");
  let r = ["g_bless"];
  return r;
}
