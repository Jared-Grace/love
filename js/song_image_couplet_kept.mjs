import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplet_gloss } from "./song_image_couplet_gloss.mjs";
import { equal } from "./equal.mjs";
export function song_image_couplet_kept(n) {
  "$plain n";
  "Which attempt at a couplet's picture is the one being used, or 0 when nobody has settled on one yet.";
  "IT ANSWERS 0 RATHER THAN NOTHING for a couplet with no picture chosen, so a caller can ask whether there is one to show without first asking whether the couplet has been glossed at all. There are pictures for the whole hymn and glosses for the whole hymn, but the two were finished at different times and a caller should not have to know which.";
  "The one place this is read from. The video, the page for reviewing the pictures and the page a reader sees all show the same attempt because they all ask here, so choosing a different one moves all three at once and none of them can fall behind.";
  arguments_assert(arguments, 1);
  let gloss = song_image_couplet_gloss(n);
  let unglossed = equal(gloss, undefined);
  if (unglossed) {
    let r = 0;
    return r;
  }
  let kept = gloss.kept;
  let unchosen = equal(kept, undefined);
  if (unchosen) {
    let r2 = 0;
    return r2;
  }
  return kept;
}
