import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { urdu_glued_words_half_least } from "./urdu_glued_words_half_least.mjs";
import { ebible_glued_words_candidates_multiple } from "./ebible_glued_words_candidates_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export async function urdu_glued_words_spacings() {
  "Every spelling with the spaces put back that the detector proposes for a run-together word of the Urdu bible, kept as the word against the spellings proposed for it.";
  "It exists so that a ruling to leave a word alone can be contradicted. A ruling to put a space in names the spelling it is proposing, so a second translation can be asked whether it writes that spelling; a ruling to leave the word as it is names nothing, and without this there is nothing to ask about and every such ruling comes back as silence. The proposal is the detector's rather than the ruler's, but it is the same proposal the ruler turned down, which is exactly the thing worth checking.";
  "Both readings are asked for, the one that cuts a word in two and the one that cuts it in three, off a single reading of the translation. A word turns up in both, cut in different places, and both cuts are kept: they are rival claims about one word and neither is the other's refinement, so choosing between them here would be deciding, without evidence, a question the evidence is about to answer.";
  "The same spelling proposed twice is kept once. Nothing downstream counts the proposals, but a list that repeats itself invites being counted, and the repetition would mean nothing if it were.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_urdu();
  let half_least = urdu_glued_words_half_least();
  let answered = await ebible_glued_words_candidates_multiple(
    bible_folder,
    half_least,
    [2, 3],
  );
  let spacings = {};
  for (let row of answered) {
    let candidates = property_get(row, "candidates");
    for (let candidate of candidates) {
      let word = property_get(candidate, "word");
      let segments = property_get(candidate, "segments");
      let spaced = list_join(segments, " ");
      let known = spacings[word];
      let first = equal(known, undefined);
      if (first) {
        known = [];
        spacings[word] = known;
      }
      let fresh = list_includes_not(known, spaced);
      if (fresh) {
        list_add(known, spaced);
      }
    }
  }
  return spacings;
}
