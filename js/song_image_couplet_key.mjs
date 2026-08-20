import { equal } from "./equal.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
export function song_image_couplet_key(n) {
  "the couplet number whose folder holds the pictures for couplet n - the couplet it repeats where it repeats one, and itself where it does not";
  "a repeated couplet has no pictures of its own on purpose: the words are the same, so the picture is the same, and drawing it twice would buy two of one thing and then need somebody to keep the two choices agreeing with each other";
  "this exists as its own name because reading the pictures and drawing them are in different files, and the two were answering this question differently. The reader followed same_as and the drawer did not, so three attempts for a repeated couplet were bought, saved, and then read by nobody - the folder they went into is one no reader ever opens. Nothing failed: the draw reported a path, the file was there, and the picker went on showing an empty couplet.";
  "that is the shape of fault this repo keeps meeting, where two places work out the same address by their own reasoning and one of them is wrong. One name answers it for both, so they cannot disagree.";
  let couplet = song_image_couplet_get(n);
  let key = equal(couplet.same_as, 0) ? n : couplet.same_as;
  return key;
}
