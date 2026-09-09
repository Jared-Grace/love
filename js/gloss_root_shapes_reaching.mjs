import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_root_shapes_written } from "./gloss_root_shapes_written.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
export function gloss_root_shapes_reaching(word_folded, root) {
  "Which named shapes of Cebuano word building put a root inside a word it is not otherwise spelled inside - all of them that do, not the first one that does.";
  "Every shape that reaches is returned because the shapes overlap heavily and a first answer would hide that. A root reached by a dropped vowel is often reached by a nasal exchange as well, and reporting one of the two as though it were the account of the word would let a reader add up what each shape buys and get a number larger than the pile.";
  "A spelling of one letter is passed over. One letter sits inside almost every word, so a shape that shortens a two letter root to a single letter would forgive whatever it was asked about, and a forgiveness that cannot fail is the same defect as a check that cannot disagree.";
  "The word is expected already folded and the root bare and lowered, because the caller has a whole store to walk and folding the word once per entry rather than once per spelling is the difference the walk feels. Each spelling is folded here, where it is made.";
  "An empty answer is the useful one. It means no ordinary way of building a Cebuano word puts this root inside this word, which is the pile a person has to read.";
  "$plain word_folded";
  "$plain root";
  "both name words being compared. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let written = gloss_root_shapes_written(root);
  let names = object_property_names(written);
  let reaching = [];
  for (let name of names) {
    let spellings = property_get(written, name);
    for (let spelling of spellings) {
      let size = text_size(spelling);
      let long_enough = less_than(1, size);
      if (long_enough) {
        let folded = gloss_word_folded(spelling);
        let held = text_includes(word_folded, folded);
        if (held) {
          list_add(reaching, name);
          break;
        }
      }
    }
  }
  return reaching;
}
