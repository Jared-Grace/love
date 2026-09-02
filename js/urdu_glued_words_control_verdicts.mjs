import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu_control } from "./ebible_folder_urdu_control.mjs";
import { ebible_version_words_searchable } from "./ebible_version_words_searchable.mjs";
import { urdu_glued_words_decided } from "./urdu_glued_words_decided.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_searchable_occurrences } from "./text_words_searchable_occurrences.mjs";
import { urdu_glued_words_control_verdict_split } from "./urdu_glued_words_control_verdict_split.mjs";
import { each_object } from "./each_object.mjs";
import { urdu_glued_words_control_verdict_keep } from "./urdu_glued_words_control_verdict_keep.mjs";
export async function urdu_glued_words_control_verdicts() {
  "What a second Urdu translation, by a publisher who had no part in any of these rulings, says about every one of them: for each ruled word, how many times that translation writes the letters run together, how many times it writes them with the space, and which of those two the ruling agrees with.";
  "Both counts are handed back beside the answer rather than only the answer, because a reader deciding how much to trust a verdict needs to see how much the control had to say. One occurrence and four hundred both come out as the same word.";
  "The rulings to split and the rulings to keep are answered in different ways and both are here, told apart by whether the record names a spelling with the space in it. A ruling to split names its alternative and so can be contradicted; a ruling to keep names none, so nothing can be looked for and the control can only agree or say nothing.";
  "The whole control translation is read once and every ruling asked of that one reading. Reading it once per ruling would give the same answer three hundred times over at three hundred times the cost, and would let the counts disagree with each other if the reading ever changed underneath them.";
  arguments_assert(arguments, 0);
  let control = ebible_folder_urdu_control();
  let searchable = await ebible_version_words_searchable(control);
  let decided = urdu_glued_words_decided();
  let split = property_get(decided, "split");
  let keep = property_get(decided, "keep");
  let verdicts = {};
  function split_verdict(spaced, word) {
    let glued = text_words_searchable_occurrences(searchable, word);
    let apart = text_words_searchable_occurrences(searchable, spaced);
    let verdict = urdu_glued_words_control_verdict_split(glued, apart);
    verdicts[word] = {
      word,
      spaced,
      glued,
      apart,
      verdict,
    };
  }
  each_object(split, split_verdict);
  for (let word of keep) {
    let glued = text_words_searchable_occurrences(searchable, word);
    let verdict = urdu_glued_words_control_verdict_keep(glued);
    verdicts[word] = {
      word,
      spaced: null,
      glued,
      apart: null,
      verdict,
    };
  }
  let r = {
    control,
    verdicts,
  };
  return r;
}
