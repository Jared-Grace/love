import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplet_glosses } from "./song_image_couplet_glosses.mjs";
export function song_image_couplet_gloss(n) {
  "what couplet n rests on in Scripture, followed through same_as so a couplet that repeats another one answers with the account of the words it repeats rather than with nothing";
  "it goes through the same key the drawing and the picker go through, so a repeat cannot end up showing one couplet's picture beside another couplet's reasons for it";
  let key = song_image_couplet_key(n);
  let glosses = song_image_couplet_glosses();
  let gloss = glosses[key];
  return gloss;
}
