import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu_control } from "./ebible_folder_urdu_control.mjs";
import { ebible_version_words_searchable } from "./ebible_version_words_searchable.mjs";
import { urdu_glued_words_spacings } from "./urdu_glued_words_spacings.mjs";
import { urdu_glued_words_decided } from "./urdu_glued_words_decided.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_searchable_occurrences } from "./text_words_searchable_occurrences.mjs";
import { urdu_glued_words_control_verdict } from "./urdu_glued_words_control_verdict.mjs";
import { each_object } from "./each_object.mjs";
import { text_words_searchable_occurrences_most } from "./text_words_searchable_occurrences_most.mjs";
export async function urdu_glued_words_control_verdicts() {
  "What a second Urdu translation says about every ruling anybody has made about a run-together word in the first one, kept as the word against how the second translation writes it and what that amounts to.";
  "The second translation is evidence about Urdu rather than about our file, which is the one thing that can contradict the person who made the ruling. It is a count and never a verdict on a sentence: it says how the word is written elsewhere, and whoever is reading still decides.";
  "Both kinds of ruling are asked the same question here, and it took a defect to get them there. A ruling to put a space in names the spelling it wants, so the control could always be asked whether it writes it. A ruling to leave a word alone names nothing, and while nothing was looked for on its behalf every such ruling came back silent - including one where the control writes the spaced spelling hundreds of times and the welded one never, which is a flat contradiction and was reported as no opinion. The spelling to look for is the one the detector proposed and the ruler turned down.";
  "The control is read once and every ruling asked of that one reading, because the reading is nearly all of the work and it does not change between one word and the next.";
  arguments_assert(arguments, 0);
  let control = ebible_folder_urdu_control();
  let searchable = await ebible_version_words_searchable(control);
  let spacings = await urdu_glued_words_spacings();
  let decided = urdu_glued_words_decided();
  let split = property_get(decided, "split");
  let keep = property_get(decided, "keep");
  let verdicts = {};
  function split_verdict(spaced, word) {
    let glued = text_words_searchable_occurrences(searchable, word);
    let apart = text_words_searchable_occurrences(searchable, spaced);
    let verdict = urdu_glued_words_control_verdict(apart, glued);
    let judged = {
      word,
      spaced,
      glued,
      apart,
      verdict,
    };
    verdicts[word] = judged;
  }
  each_object(split, split_verdict);
  for (let word of keep) {
    let glued = text_words_searchable_occurrences(searchable, word);
    let known = spacings[word];
    let unoffered = equal(known, undefined);
    let offered = unoffered ? [] : known;
    let best = text_words_searchable_occurrences_most(searchable, offered);
    let spaced = property_get(best, "phrase");
    let apart = property_get(best, "count");
    let verdict = urdu_glued_words_control_verdict(glued, apart);
    let judged = {
      word,
      spaced,
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
