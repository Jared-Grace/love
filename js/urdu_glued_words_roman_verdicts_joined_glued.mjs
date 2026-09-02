import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu_control_roman } from "./ebible_folder_urdu_control_roman.mjs";
import { ebible_version_words_searchable } from "./ebible_version_words_searchable.mjs";
import { urdu_roman_lexicon } from "./urdu_roman_lexicon.mjs";
import { urdu_roman_spellings_most } from "./urdu_roman_spellings_most.mjs";
import { urdu_glued_words_control_verdicts } from "./urdu_glued_words_control_verdicts.mjs";
import { property_get } from "./property_get.mjs";
import { urdu_glued_words_decided } from "./urdu_glued_words_decided.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { text_words_searchable_occurrences } from "./text_words_searchable_occurrences.mjs";
import { add } from "./add.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { not } from "./not.mjs";
import { list_take } from "./list_take.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
export async function urdu_glued_words_roman_verdicts_joined_glued() {
  arguments_assert(arguments, 0);
  let control = ebible_folder_urdu_control_roman();
  let searchable = await ebible_version_words_searchable(control);
  let lexicon = await urdu_roman_lexicon();
  let most = urdu_roman_spellings_most();
  let script_judged = await urdu_glued_words_control_verdicts();
  let script_verdicts = property_get(script_judged, "verdicts");
  let decided = urdu_glued_words_decided();
  let split = property_get(decided, "split");
  let counted = {};
  function occurrences(phrases) {
    let total = 0;
    for (let phrase of phrases) {
      let fresh = property_exists_not(counted, phrase);
      if (fresh) {
        counted[phrase] = text_words_searchable_occurrences(searchable, phrase);
      }
      let standing = property_get(counted, phrase);
      total = add(total, standing);
    }
    return total;
  }
  function spellings_of(urdu) {
    let plain = text_accent_marks_removed(urdu);
    let all = lexicon[plain];
    let unheard = not(all);
    if (unheard) {
      let none = null;
      return none;
    }
    let few = list_take(all, most);
    return few;
  }
  function choices_of(pieces) {
    let choices = [];
    for (let piece of pieces) {
      let few = spellings_of(piece);
      let unheard = equal(few, null);
      if (unheard) {
        let none = null;
        return none;
      }
      list_add(choices, few);
    }
    return choices;
  }
  function joined_apart(chosen) {
    let phrase = list_join(chosen, " ");
    return phrase;
  }
  function joined_glued(chosen) {
    let phrase = list_join(chosen, "");
    return phrase;
  }
  let r = {
    control,
    script_verdicts,
    split,
    occurrences,
    spellings_of,
    choices_of,
    joined_apart,
    joined_glued,
  };
  return r;
}
