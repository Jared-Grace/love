import { equal } from "./equal.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
export function song_image_couplet_key(n) {
  "the couplet number whose folder holds the pictures for couplet n - the couplet it repeats where it repeats one, and itself where it does not";
  "the pictures follow the symbol and not the words, which is the whole of the rule. A repeated couplet shares the earlier one's folder while it is still asking for the earlier one's symbol, and keeps a folder of its own the moment it asks for a different one - so nothing has to be told twice and nothing can disagree. Written the other way round, following same_as alone, the repeat's own drawings would be bought and then read by nobody.";
  "and same_as goes on meaning that the words repeat, because a second reader needs exactly that. The hymn's own page leaves a repeated line out - the same words twice in a row read as a mistake on a page, and the second card would open onto the passages the first one already showed. That is true whether or not the film shows a different picture behind the second singing, so the two questions had to come apart rather than one of them being deleted.";
  "this exists as its own name because reading the pictures and drawing them are in different files, and the two were answering this question differently. The reader followed same_as and the drawer did not, so three attempts for a repeated couplet were bought, saved, and then read by nobody - the folder they went into is one no reader ever opens. Nothing failed: the draw reported a path, the file was there, and the picker went on showing an empty couplet.";
  "that is the shape of fault this repo keeps meeting, where two places work out the same address by their own reasoning and one of them is wrong. One name answers it for both, so they cannot disagree.";
  let couplet = song_image_couplet_get(n);
  let repeated = not_equal(couplet.same_as, 0);
  if (not(repeated)) {
    return n;
  }
  let earlier = song_image_couplet_get(couplet.same_as);
  let shared = equal(couplet.symbol, earlier.symbol);
  let key = shared ? couplet.same_as : n;
  return key;
}
