import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_word_root_chain } from "./gloss_word_root_chain.mjs";
import { gloss_root_claimed_backing } from "./gloss_root_claimed_backing.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_map } from "./list_map.mjs";
export function gloss_classes_backing_mark(classes, known) {
  "Every gathered disagreement marked with the dictionary's walk on from the root it gave, and with what that walk says about the root the explanation named.";
  "The walk is kept beside the reading rather than thrown away once it has been read. A reader meeting a row in the queue asks where the dictionary actually went before deciding anything about it, and a reading that answered elsewhere without saying where else would send them straight back to the dictionary to find out.";
  "The root the dictionary gave is handed to the reading along with its walk, because the commonest thing an explanation does is name that very root spelled with the other vowel - and a walk never contains the word it starts from, so on the walk alone perfect agreement reads as a disagreement.";
  "$plain classes";
  "$plain known";
  "the first names gathered disagreements to mark, the second a gathered dictionary to read them against. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  function class_mark(one_class) {
    let root = property_get(one_class, "root");
    let claimed = property_get(one_class, "claimed");
    let root_chain = gloss_word_root_chain(known, root);
    let backing = gloss_root_claimed_backing(root, root_chain, claimed);
    object_merge(one_class, {
      root_chain,
      backing,
    });
    return one_class;
  }
  let r = list_map(classes, class_mark);
  return r;
}
