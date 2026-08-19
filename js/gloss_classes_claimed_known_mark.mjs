import { binisaya_words_known_analysed_is } from "./binisaya_words_known_analysed_is.mjs";
import { list_map } from "./list_map.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_classes_claimed_known_mark(classes, known) {
  "Classes of disagreeing roots with a mark on each saying whether the root the explanation named is a word the dictionary knows at all.";
  "This is what separates a disagreement about depth from a piece of nonsense, and it is the only reading that decides whether prose can be repaired or has to be thrown away. An explanation of magpasalamat naming pasalamat named a real Cebuano word one layer above the root - a reader is told nothing false, only less far back than the dictionary goes. An explanation of makalilisang naming lilisang named a run of letters nobody speaks: the reduplication was read as part of the root. Both come back as the explanation naming a word the dictionary's root sits inside, and nothing in the shape of the two tells them apart.";
  "The dictionary answers it. Forty-eight classes were read by hand before this was written, and the split fell almost exactly where the dictionary knowing the word fell - which is what makes the test worth keeping rather than the reading.";
  "What it asks is whether the dictionary carried an entry, and not whether the word has ever been asked about. Those were once the same question here and they are not the same question at all. Every word the corpus met was asked about, so being held says only that some verse used the word; and the site answers for a word it does not carry as readily as for one it does, so nearly a quarter of the answers held are of a word it had nothing to say about. Asked the old way, ten of the thirty-four disagreements over a root read as nonsense, and eight of the ten - pasaylo, padayag, pahimulos, patalinghog among them - are plain entries the site answers for in full. They read as unknown for no reason but that no verse ever used the bare word.";
  "The mark is put onto the classes handed in rather than onto copies of them. Merging is how a property is put on here, and it writes onto the object it is given and answers nothing, so a copy would have to be made by hand and would then be a second thing to keep in step.";
  "A word the dictionary does not know is not thereby proved to be nonsense. The dictionary is a dictionary and not the language, so this marks where to look rather than what is wrong.";
  function class_mark(one_class) {
    let claimed = property_get(one_class, "claimed");
    let claimed_known = binisaya_words_known_analysed_is(known, claimed);
    object_merge(one_class, {
      claimed_known,
    });
    return one_class;
  }
  let r = list_map(classes, class_mark);
  return r;
}
