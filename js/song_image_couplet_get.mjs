import { number_from_text } from "./number_from_text.mjs";
import { equal } from "./equal.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
export function song_image_couplet_get(n) {
  "the couplet record numbered n, or the first couplet when n names none";
  "THE NUMBER IS READ OUT OF TEXT FIRST, because a command line hands every argument over as text and the numbers in the table are numbers. Without this the match never succeeds from a command line and the answer falls through to the first couplet, so every couplet asked about by hand came back as couplet 1 - the right shape, the wrong couplet, and no complaint from anything.";
  let number = number_from_text(n);
  let couplets = song_image_couplets();
  for (let couplet of couplets) {
    if (equal(couplet.n, number)) {
      return couplet;
    }
  }
  let r = couplets[0];
  return r;
}
