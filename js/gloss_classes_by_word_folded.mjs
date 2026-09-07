import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_last_or_null } from "./list_last_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export function gloss_classes_by_word_folded(classes) {
  "The classes gathered under the words they were found on, with the two spellings Cebuano gives one sound counted as one word.";
  "A class is a root and a claim about it, and it carries every word it was found on. Turned round this way, a word carries every claim anybody made about it - which is the only way to see one word explained two different ways, because no single class can hold a disagreement with another class.";
  "The spellings are folded together because panulundon and panulondon are one word written twice, and leaving them apart hides exactly the disagreements this exists to surface - the ones where the writing wandered along with the explanation.";
  "A real spelling is kept beside each group rather than the folded key, because the folded key is often not a word anybody writes. The first spelling seen is the one kept, which is arbitrary and is meant to be: it is there to be recognised, never to be quoted as the correct form.";
  "A class found on two spellings of one word is entered once, not twice. Its words are walked in order, so a repeat can only be the entry just made, and that is the whole of the check.";
  "$plain classes";
  "it names gathered classes. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let by_word = {};
  function class_put(one_class) {
    let words = property_get(one_class, "words");
    function word_put(word) {
      let key = gloss_word_folded(word);
      let held = property_get_or_null(by_word, key);
      let first = null_is(held);
      let group = first
        ? {
            word,
            classes: [],
          }
        : held;
      let rows = property_get(group, "classes");
      let last = list_last_or_null(rows);
      let repeat = equal(last, one_class);
      if (not(repeat)) {
        list_add(rows, one_class);
      }
      property_set(by_word, key, group);
    }
    each(words, word_put);
  }
  each(classes, class_put);
  return by_word;
}
