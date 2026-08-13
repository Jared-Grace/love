import { app_shared_bible_open_generic } from "./app_shared_bible_open_generic.mjs";
import { window_open_app } from "./window_open_app.mjs";
export function app_shared_bible_open(
  languages_chosen,
  chapter_code,
  verse_number,
  mode,
) {
  "the caller names the reader to land in, so a link can hand someone the whole chapter or the single verse";
  "This one leaves what is open where it is and opens the reader beside it. The twin underneath is shared with the way that goes there instead, so the two cannot come to disagree about what a link into the reader looks like.";
  app_shared_bible_open_generic(
    window_open_app,
    languages_chosen,
    chapter_code,
    verse_number,
    mode,
  );
}
