import { equal } from "./equal.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
import { song_image_candidates } from "./song_image_candidates.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_candidate_drawn } from "./song_image_candidate_drawn.mjs";
export function song_image_candidates_get(n) {
  "the candidate images for couplet n, following same_as so a repeated couplet shows the same candidates as the couplet it repeats, with the drawn one on the end";
  "the drawn one goes on the end rather than the front, and that is not a matter of taste. A choice is remembered as a position in this list, so anything put in front of the found ones would silently move every choice already made along by one - the picture chosen last week would quietly become its neighbour, with nothing to show that it had happened.";
  "a couplet nobody has searched for still answers with the drawn one, because a symbol with nothing found for it is exactly the symbol most worth drawing";
  let couplet = song_image_couplet_get(n);
  let key = equal(couplet.same_as, 0) ? n : couplet.same_as;
  let candidates = song_image_candidates();
  let found = candidates[key];
  let listed = equal(found, undefined) ? [] : found;
  let drawn = song_image_candidate_drawn(key);
  let whole = list_concat_single_right(listed, drawn);
  return whole;
}
