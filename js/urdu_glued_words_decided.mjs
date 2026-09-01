import { urdu_glued_words_decided_two } from "./urdu_glued_words_decided_two.mjs";
import { urdu_glued_words_decided_three } from "./urdu_glued_words_decided_three.mjs";
import { property_get } from "./property_get.mjs";
import { objects_merge } from "./objects_merge.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function urdu_glued_words_decided() {
  "Every Urdu word anybody has ruled on, from both readings at once: the ones that are more than one word with the spaces missing, and the ones that only look like it.";
  "There are two rulings because there are two questions. One asks what reads as two words run together and one asks what reads as three, and a cut made in one place cannot find a word welded in two. Neither question is a harder version of the other, so neither list contains the other, and the repair and the gate both want all of it.";
  "They are kept apart where they are written down and joined only here. Each was a sitting of somebody reading Urdu word by word, and the record of what was looked at, and why it fell the way it did, belongs with the sitting that did it.";
  "The same word turning up in both keep lists is nothing: it was looked at twice and found fine twice. The same word carrying a spelling in both split maps is refused outright, because that is two sittings handing back two answers for one word, and quietly taking the later one would bury a disagreement that a person has to settle.";
  let two = urdu_glued_words_decided_two();
  let three = urdu_glued_words_decided_three();
  let split_two = property_get(two, "split");
  let split_three = property_get(three, "split");
  let split = objects_merge([split_two, split_three]);
  let keep_two = property_get(two, "keep");
  let keep_three = property_get(three, "keep");
  let keep = list_concat_multiple([keep_two, keep_three]);
  let decided = {
    split,
    keep,
  };
  return decided;
}
