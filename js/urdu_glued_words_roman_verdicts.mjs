import { property_path_get_2 } from "./property_path_get_2.mjs";
import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu_control_roman } from "./ebible_folder_urdu_control_roman.mjs";
import { ebible_version_words_searchable } from "./ebible_version_words_searchable.mjs";
import { urdu_roman_words } from "./urdu_roman_words.mjs";
import { urdu_roman_segments } from "./urdu_roman_segments.mjs";
import { urdu_glued_words_control_verdicts } from "./urdu_glued_words_control_verdicts.mjs";
import { property_get } from "./property_get.mjs";
import { urdu_glued_words_decided } from "./urdu_glued_words_decided.mjs";
import { text_split } from "./text_split.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
import { or } from "./or.mjs";
import { text_words_searchable_occurrences } from "./text_words_searchable_occurrences.mjs";
import { urdu_glued_words_control_verdict } from "./urdu_glued_words_control_verdict.mjs";
export async function urdu_glued_words_roman_verdicts() {
  "What the Latin-alphabet printing of the second Urdu bible says about every ruling the Urdu-script printing of it already found something to say about, kept as the word against how the Latin printing writes it and what that amounts to.";
  "It answers a question the first control cannot. When one translation writes a space and another does not, that can be two publishing houses following two habits, and no count will tell you which. Here there are not two translations: there is one translation printed in two alphabets, so a difference between the printings is a difference of typesetting and never a difference of wording. Where the Latin printing runs the pieces together, the space in the Urdu printing is a habit; where the Latin printing writes the space too, the boundary is real.";
  "It asks the second control about the very spelling the first one was asked about, rather than working one out for itself. The proposal is the one the detector offered and, for a ruling to leave a word alone, the one the ruler turned down; two controls asked about two different spellings would not be two opinions about anything.";
  "The Latin spelling of the whole word is looked up, never built out of the Latin spellings of its pieces. The vowels move when pieces join, so a built spelling would often stand nowhere in the edition, and a spelling that stands nowhere reads exactly like a publisher who writes the word with a space in it.";
  "The spelling of the spaced form is built out of the pieces, and that is sound for the opposite reason: each piece there is a whole word standing on its own, spelled the way it is spelled when it stands on its own.";
  "A word with no Latin spelling written down for it, or a proposed spacing with a piece nobody has spelled, is left out entirely rather than answered. It then has one opinion about it instead of two, which is honest, where a guessed spelling would have given it two opinions one of which was invented.";
  "Whether a ruling asked for the space is read straight off the list of rulings rather than asked for by name, because most of the words here are not on it. Asking for a name that is not there is an error and would stop the whole reading at the first ruling to leave a word alone.";
  arguments_assert(arguments, 0);
  let control = ebible_folder_urdu_control_roman();
  let searchable = await ebible_version_words_searchable(control);
  let words_roman = urdu_roman_words();
  let segments_roman = urdu_roman_segments();
  let script_judged = await urdu_glued_words_control_verdicts();
  let script_verdicts = property_get(script_judged, "verdicts");
  let decided = urdu_glued_words_decided();
  let split = property_get(decided, "split");
  function spaced_roman(spaced) {
    let pieces = text_split(spaced, " ");
    let romans = [];
    for (let piece of pieces) {
      let latin = segments_roman[piece];
      let unspelled = equal(latin, undefined);
      if (unspelled) {
        let none = null;
        return none;
      }
      list_add(romans, latin);
    }
    let joined = list_join(romans, " ");
    return joined;
  }
  let verdicts = {};
  for (let word of object_property_names(script_verdicts)) {
    let spaced = property_path_get_2(script_verdicts, word, "spaced");
    let solid = words_roman[word];
    let unspelled = equal(solid, undefined);
    let unproposed = equal(spaced, null);
    let apart_text = null;
    let proposed = not(unproposed);
    if (proposed) {
      apart_text = spaced_roman(spaced);
    }
    let untranslated = equal(apart_text, null);
    let unaskable = or(unspelled, untranslated);
    if (unaskable) {
      continue;
    }
    let glued = text_words_searchable_occurrences(searchable, solid);
    let apart = text_words_searchable_occurrences(searchable, apart_text);
    let spacing_ruled = split[word];
    let spacing_wanted = equal_not(spacing_ruled, undefined);
    let verdict = null;
    if (spacing_wanted) {
      verdict = urdu_glued_words_control_verdict(apart, glued);
    }
    let keeping = not(spacing_wanted);
    if (keeping) {
      verdict = urdu_glued_words_control_verdict(glued, apart);
    }
    let judged = {
      word,
      roman: solid,
      roman_spaced: apart_text,
      glued,
      apart,
      verdict,
    };
    verdicts[word] = judged;
  }
  let r = {
    control,
    verdicts,
  };
  return r;
}
