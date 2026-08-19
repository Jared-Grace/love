import { binisaya_words_known_broken_down_is } from "./binisaya_words_known_broken_down_is.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_null_is } from "./property_null_is.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_classes_claimed_known_mark(classes, known) {
  "Classes of disagreeing roots with a mark on each saying whether the root the explanation named is a word the dictionary knows at all.";
  "This is what separates a disagreement about depth from a piece of nonsense, and it is the only reading that decides whether prose can be repaired or has to be thrown away. An explanation of magpasalamat naming pasalamat named a real Cebuano word one layer above the root - a reader is told nothing false, only less far back than the dictionary goes. An explanation of makalilisang naming lilisang named a run of letters nobody speaks: the reduplication was read as part of the root. Both come back as the explanation naming a word the dictionary's root sits inside, and nothing in the shape of the two tells them apart.";
  "The dictionary answers it. Forty-eight classes were read by hand before this was written, and the split fell almost exactly where the dictionary knowing the word fell - which is what makes the test worth keeping rather than the reading.";
  "Two marks are put on and not one, because neither of the two things the gathered answers can be asked is the question on its own. Being held says the word was asked about, which happens when some verse used it bare and not otherwise - pasaylo, padayag, pahimulos and patalinghog are each a plain entry, and each read as unknown for years for no reason but that no psalm ever used the bare word. Carrying a breakdown says the site took the word apart, which it does for a word built out of a root and does not do for a root; gugma is the commonest noun in the language and carries no breakdown at all.";
  "Read them together and the pair says what neither says alone. Where the named root is one the dictionary's root sits inside, the word is built out of something by construction, so a breakdown is owed and its absence means the letters were got from nowhere - which is how bulah and labih were found and how the other thirty-two of that reading were cleared. Where the named root is not of that shape the absence means nothing, and only being held is worth reading.";
  "The mark is put onto the classes handed in rather than onto copies of them. Merging is how a property is put on here, and it writes onto the object it is given and answers nothing, so a copy would have to be made by hand and would then be a second thing to keep in step.";
  "A word the dictionary does not know is not thereby proved to be nonsense. The dictionary is a dictionary and not the language, so this marks where to look rather than what is wrong.";
  function class_mark(one_class) {
    let claimed = property_get(one_class, "claimed");
    let missing = property_null_is(known, claimed);
    let claimed_known = not(missing);
    let claimed_broken_down = binisaya_words_known_broken_down_is(
      known,
      claimed,
    );
    object_merge(one_class, {
      claimed_known,
      claimed_broken_down,
    });
    return one_class;
  }
  let r = list_map(classes, class_mark);
  return r;
}
