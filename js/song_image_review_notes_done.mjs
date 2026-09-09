import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_review_couplets } from "./song_image_review_couplets.mjs";
import { property_get } from "./property_get.mjs";
import { song_image_notes_done } from "./song_image_notes_done.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { song_image_notes_open_unreviewed } from "./song_image_notes_open_unreviewed.mjs";
export async function song_image_review_notes_done() {
  "Mark answered every note standing against every couplet now under review, which is what closing a round of feedback amounts to, and hand back with it every note left open on a couplet that is no longer under review.";
  "IT FINDS ITS OWN SET rather than taking a list of couplets. The couplets under review are already written down in one place, and a list typed at the call would go stale the moment one of them was accepted - answering notes against a picture nobody is looking at any more, and leaving the ones on the picture that replaced it.";
  "IT IS ONE COMMAND BECAUSE A ROUND IS ONE THING. The same work done as one call per couplet leaves nothing behind that says a round was closed, and it drifts from the review list the first time a couplet joins or leaves it.";
  "IT REPORTS THE LOST NOTES IN THE SAME BREATH BECAUSE THIS IS WHERE THEY ARE LOST. Closing a round only ever reaches the couplets standing on the bench, so a couplet accepted while one of its notes was still open takes that note out of sight for good - open for ever, and never looked at again by anything. Twenty-one notes across five couplets had gone that way before anybody counted. Asking for the strays at the one moment a couplet can leave the bench is what turns a silent loss into something a person is handed.";
  "IT STILL DOES NOT CLOSE THEM. The strays come back as a list to answer, not as work marked finished - marking them answered would clear the number and destroy the only evidence that nobody ever replied.";
  arguments_assert(arguments, 0);
  let couplets = song_image_review_couplets();
  async function closed(one) {
    let n = property_get(one, "n");
    let path = await song_image_notes_done(n);
    return path;
  }
  let paths = await list_map_async(couplets, closed);
  let lost = await song_image_notes_open_unreviewed();
  let r = {
    closed: paths,
    lost,
  };
  return r;
}
