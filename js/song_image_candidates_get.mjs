import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { song_image_candidates } from "./song_image_candidates.mjs";
import { song_image_candidate_drawn } from "./song_image_candidate_drawn.mjs";
import { song_image_drawn_attempts_known } from "./song_image_drawn_attempts_known.mjs";
export function song_image_candidates_get(n) {
  "the candidate images for couplet n, following same_as so a repeated couplet shows the same candidates as the couplet it repeats, with every attempt drawn for it on the end";
  "the drawn ones go on the end rather than the front, and that is not a matter of taste. A choice is remembered as a position in this list, so anything put in front of the found ones would silently move every choice already made along by one - the picture chosen last week would quietly become its neighbour, with nothing to show that it had happened.";
  "every attempt is a row rather than only the newest, which is the whole point of keeping them. Two wordings for the same symbol are told apart by looking at both, and a list that shows only the last one makes that comparison impossible at exactly the moment it is wanted.";
  "the attempts go on in the order they were drawn, so a position already remembered keeps meaning the same picture as more are drawn - a new attempt lands after every existing row and moves nothing";
  "a couplet nobody has searched for still answers with the drawn ones, because a symbol with nothing found for it is exactly the symbol most worth drawing";
  let key = song_image_couplet_key(n);
  let candidates = song_image_candidates();
  let found = candidates[key];
  let listed = equal(found, undefined) ? [] : found;
  let known = song_image_drawn_attempts_known();
  let attempts = equal(known[key], undefined) ? [] : known[key];
  function attempt_to_candidate(attempt) {
    let candidate = song_image_candidate_drawn(key, attempt);
    return candidate;
  }
  let drawn = list_map(attempts, attempt_to_candidate);
  let whole = list_concat(listed, drawn);
  return whole;
}
