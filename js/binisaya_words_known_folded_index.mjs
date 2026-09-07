import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export function binisaya_words_known_folded_index(known) {
  "A gathered dictionary gathered a second way: every spelling it holds, listed under the folded form the letters Cebuano writes two ways all come out as.";
  "The dictionary is keyed by the spelling each word wore where it was gathered, so a word can only be found by asking for it letter for letter. Cebuano writes the same word more than one way - igsuon beside igsoon, sad-an beside sal-an - and a reader holding one of those spellings finds nothing while the dictionary holds the other. This says which spellings would come out identical, so a reader that has already been told nothing can ask a second time.";
  "Every spelling is kept rather than one being chosen, because two different words can fold together and there is no way here to tell that from one word spelled twice. A list hands the caller the ambiguity to judge; a single answer would hide it and would be wrong about half the time it mattered.";
  "This is built once and handed around rather than being asked per word. Folding every spelling the dictionary holds is the whole cost of the reading, and a caller looking up two hundred roots would otherwise pay it two hundred times.";
  "$plain known";
  "it names a gathered dictionary to read. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let index = {};
  let spellings = object_property_names(known);
  function spelling_put(spelling) {
    let folded = gloss_word_folded(spelling);
    let held = property_get_or_null(index, folded);
    let nothing = null_is(held);
    let gathered = nothing ? [] : held;
    list_add(gathered, spelling);
    property_set(index, folded, gathered);
  }
  each(spellings, spelling_put);
  return index;
}
