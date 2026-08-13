import { items_nearest } from "./items_nearest.mjs";
import { text_edit_distance } from "./text_edit_distance.mjs";
export function texts_nearest(texts, word, apart_maximum) {
  "The words in a list spelled most like a given word: the ones tied for closest, and nothing at all when even the closest is further away than the limit allows.";
  "The picking of the tie is not here - it is the same picking whatever is being compared, and lives one door down. What this adds is the one measure a plain list of words wants: how many one-letter edits apart two spellings are.";
  function lambda$apart(text) {
    let apart = text_edit_distance(text, word);
    return apart;
  }
  let nearest = items_nearest(texts, lambda$apart, apart_maximum);
  return nearest;
}
