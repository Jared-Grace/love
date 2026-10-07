import { arguments_assert } from "./arguments_assert.mjs";
import { song_agape_references } from "./song_agape_references.mjs";
import { song_wordings } from "./song_wordings.mjs";
export async function song_agape_wordings() {
  arguments_assert(arguments, 0);
  ("Every passage this song rests on, each against the wordings that are really on offer for it - each set of words once, and the translations that use exactly those words.");
  ("IT IS THE READING LIST FOR CHOOSING WHICH TRANSLATION EACH LINE QUOTES, and for checking that what an explanation quotes is what the page will show.");
  ("It needs no argument because a song's passages cannot be typed onto a command line; it finds its own set from the song's explanations.");
  let references = song_agape_references();
  let compared = await song_wordings(references);
  return compared;
}
