import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_bible_mode_verse } from "./app_shared_bible_mode_verse.mjs";
export function app_shared_bible_modes() {
  "Both ways a bible page can be read, and the whole of what a link is allowed to say for it.";
  "Written here as a list as well as one to a name, because the two are asked for differently: code picking one of them wants the name, and anything checking what a link says wants all of them together.";
  let verse = app_shared_bible_mode_verse();
  let chapter = app_shared_bible_mode_chapter();
  let modes = [verse, chapter];
  return modes;
}
