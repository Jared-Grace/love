import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_word_root_chain } from "./gloss_word_root_chain.mjs";
import { gloss_root_claimed_backing } from "./gloss_root_claimed_backing.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_map } from "./list_map.mjs";
export function gloss_classes_backing_mark(classes, known) {
  "Classes of disagreeing roots with the dictionary's own walk on from the root it gave written onto each, and the reading of whether that walk arrives at the root the explanation named.";
  "The walk has to be taken while the dictionary is still open, because by the time a class is read the dictionary is gone and only the two words are left. Its sibling mark gathers the same way and for the same reason. What is put on is the walk itself as well as the reading, so a person looking at a class can see where the dictionary went rather than only being told it went somewhere else.";
  "The walk starts at the root the dictionary gave and not at the root the explanation named, which is the whole difference between this and the reading already in place. A claim standing nearer the surface than the dictionary's root is checked by walking from the claim; a claim standing further back is checked by walking from the root, and until this was written that walk was never taken.";
  "The mark is put onto the classes handed in rather than onto copies of them, the same way its sibling does it, because merging writes onto the object it is given and a copy would be a second thing to keep in step.";
  "$plain classes";
  "$plain known";
  "the first names classes of disagreement to mark, the second a gathered dictionary to walk in. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  function class_mark(one_class) {
    let root = property_get(one_class, "root");
    let claimed = property_get(one_class, "claimed");
    let root_chain = gloss_word_root_chain(known, root);
    let backing = gloss_root_claimed_backing(root_chain, claimed);
    object_merge(one_class, {
      root_chain,
      backing,
    });
    return one_class;
  }
  let r = list_map(classes, class_mark);
  return r;
}
