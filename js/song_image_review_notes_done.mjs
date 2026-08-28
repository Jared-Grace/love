import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_review_couplets } from "./song_image_review_couplets.mjs";
import { property_get } from "./property_get.mjs";
import { song_image_notes_done } from "./song_image_notes_done.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function song_image_review_notes_done() {
  "Mark answered every note standing against every couplet now under review, which is what closing a round of feedback amounts to.";
  "IT FINDS ITS OWN SET rather than taking a list of couplets. The couplets under review are already written down in one place, and a list typed at the call would go stale the moment one of them was accepted - answering notes against a picture nobody is looking at any more, and leaving the ones on the picture that replaced it.";
  "IT IS ONE COMMAND BECAUSE A ROUND IS ONE THING. The same work done as one call per couplet leaves nothing behind that says a round was closed, and it drifts from the review list the first time a couplet joins or leaves it.";
  arguments_assert(arguments, 0);
  let couplets = song_image_review_couplets();
  async function closed(one) {
    let n = property_get(one, "n");
    let path = await song_image_notes_done(n);
    return path;
  }
  let paths = await list_map_async(couplets, closed);
  return paths;
}
