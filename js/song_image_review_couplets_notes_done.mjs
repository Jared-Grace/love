import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_review_couplets } from "./song_image_review_couplets.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_notes_done } from "./song_image_notes_done.mjs";
import { list_add } from "./list_add.mjs";
export async function song_image_review_couplets_notes_done() {
  "Mark every note standing against every couplet on the review bench as answered, at the end of a round in which all of them have been worked through.";
  "IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, because the set is already written down. The bench is the list of what was put up for review, so a couplet cannot be missed by being left out of an argument and the command cannot drift from what is actually on the page - which is the difference between a command and running the single one eleven times by hand.";
  "IT IS RUN AFTER THE REDRAWING AND NEVER BEFORE, for the same reason the single one is: a note is answered by the picture that comes after it, so running this first retires a fault that is still on the screen.";
  "IT ANSWERS WITH THE KEY AND NOT THE COUPLET NUMBER, because two couplets that repeat a symbol share one folder of drawings and therefore one file of notes. Marked by couplet number, the shared file would be written twice and the second write would carry a copy that predates the first.";
  arguments_assert(arguments, 0);
  let asked_list = song_image_review_couplets();
  let paths = [];
  for (let asked of asked_list) {
    let key = song_image_couplet_key(asked.n);
    let path = await song_image_notes_done(key);
    list_add(paths, path);
  }
  return paths;
}
