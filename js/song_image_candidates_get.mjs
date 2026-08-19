import { equal } from "./equal.mjs";
import { song_image_candidates } from "./song_image_candidates.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
export function song_image_candidates_get(n) {
  "the candidate images for couplet n, following same_as so a repeated couplet shows the same candidates as the couplet it repeats; an empty list means nobody has searched for that symbol yet";
  let couplet = song_image_couplet_get(n);
  let key = equal(couplet.same_as, 0) ? n : couplet.same_as;
  let candidates = song_image_candidates();
  let found = candidates[key];
  if (equal(found, undefined)) {
    let r = [];
    return r;
  }
  return found;
}
