import { urdu_glued_words_decided_two } from "./urdu_glued_words_decided_two.mjs";
import { urdu_glued_words_decided_three } from "./urdu_glued_words_decided_three.mjs";
import { property_get } from "./property_get.mjs";
import { objects_merge } from "./objects_merge.mjs";
import { urdu_glued_words_split_contested } from "./urdu_glued_words_split_contested.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function urdu_glued_words_decided() {
  "Every Urdu word anybody has ruled on, from both readings at once: the ones that are more than one word with the spaces missing, and the ones that only look like it.";
  "There are two rulings because there are two questions. One asks what reads as two words run together and one asks what reads as three, and a cut made in one place cannot find a word welded in two. Neither question is a harder version of the other, so neither list contains the other, and the repair and the gate both want all of it.";
  "They are kept apart where they are written down and joined only here. Each was a sitting of somebody reading Urdu word by word, and the record of what was looked at, and why it fell the way it did, belongs with the sitting that did it.";
  "The same word turning up in both keep lists is nothing: it was looked at twice and found fine twice. The same word carrying a spelling in both split maps is refused outright, because that is two sittings handing back two answers for one word, and quietly taking the later one would bury a disagreement that a person has to settle.";
  "★ A WITHDRAWN SPLIT LEAVES ITS RULING WHERE IT WAS WRITTEN AND STOPS BEING A REPAIR HERE. Some words were ruled a split and were then found written both ways by one publisher in its own two printings of one Bible, which means there was never a fact for the ruling to have been right or wrong about. Those words are named on a list of their own, with the reason, and this is where that list is spent: the word comes off the repair side and goes onto the keep side, so everything downstream sees a word that was looked at and left as it stands. Striking them out of the sitting that decided them would destroy the record of that judgment instead of recording a second one, and putting the word back is then a single line deleted rather than a table re-edited.";
  let two = urdu_glued_words_decided_two();
  let three = urdu_glued_words_decided_three();
  let split_two = property_get(two, "split");
  let split_three = property_get(three, "split");
  let ruled = objects_merge([split_two, split_three]);
  let contested = urdu_glued_words_split_contested();
  let split = {};
  let withdrawn = [];
  for (let word of object_property_names(ruled)) {
    let taken_back = list_includes(contested, word);
    if (taken_back) {
      list_add(withdrawn, word);
      continue;
    }
    split[word] = property_get(ruled, word);
  }
  let keep_two = property_get(two, "keep");
  let keep_three = property_get(three, "keep");
  let keep = list_concat_multiple([keep_two, keep_three, withdrawn]);
  let decided = {
    split,
    keep,
  };
  return decided;
}
