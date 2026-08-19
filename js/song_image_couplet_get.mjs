import { equal } from "./equal.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
export function song_image_couplet_get(n) {
  "the couplet record numbered n, or the first couplet when n names none";
  let couplets = song_image_couplets();
  for (let couplet of couplets) {
    if (equal(couplet.n, n)) {
      return couplet;
    }
  }
  let r = couplets[0];
  return r;
}
