import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function urdu_roman_spellings_piece_truncations_removed(
  spellings,
  choices,
) {
  "The Latin spellings offered for a run-together Urdu word, with the ones thrown out that are only a spelling of one of its pieces.";
  "★ A SPELLING OF A PIECE CANNOT BE A SPELLING OF THE WHOLE, AND THAT IS A PROOF RATHER THAN A GUESS. If a set of Latin letters is what people write for the first piece on its own, then those letters carry nothing for the second piece, so they are not the whole word written down; they are the whole word written down and then cut short. Nothing here has to judge how likely that is, or how short is too short, or whether the writer meant it. The list of words says the letters spell the piece, and one spelling cannot silently spell two different things.";
  "★ THE COST OF LEAVING ONE IN IS NOT SMALL, BECAUSE THE PIECES ARE COMMON WORDS. The pieces of a run-together word are ordinary short words, which is why they end up welded to something in the first place, and an ordinary short word stands everywhere. Measured against the Latin printing of the control Bible, one such spelling answered thirteen thousand four hundred and fifty-five times for a word that stands forty-seven times in the text being checked. That count then reads as the control insisting the word is written run-together, which is the opposite of what the control was asked and the opposite of what it says.";
  "★ IT REMOVES EVIDENCE AND NEVER ADDS ANY, SO IT CANNOT INVENT AN ANSWER. Every spelling it drops was going to be searched for and counted; nothing it keeps is changed. The worst it can do is leave a word with less to go on than it had, which shows up as the word falling silent, and silence is an answer this reading is allowed to give. The best it does is stop a count that was never about the word from standing as though it were.";
  "It is given the pieces' spellings as they were already worked out for the spaced search rather than looking them up again, because those are the same spellings by construction and a second lookup could only differ by being wrong.";
  "An empty answer is possible and is handed back empty rather than fallen back out of. A word whose every offered spelling is a spelling of one of its pieces has no attested spelling of its own, and a reading of nought is the truth about it; searching for the cut-short ones anyway, because an empty list looked wrong, would put the whole defect back for the sake of tidiness.";
  arguments_assert(arguments, 2);
  let piece_spellings = list_concat_multiple(choices);
  let kept = [];
  for (let spelling of spellings) {
    let cut_short = list_includes(piece_spellings, spelling);
    if (cut_short) {
      continue;
    }
    list_add(kept, spelling);
  }
  return kept;
}
