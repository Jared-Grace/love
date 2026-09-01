import { urdu_glued_words_half_least } from "./urdu_glued_words_half_least.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { ebible_glued_words_candidates_multiple } from "./ebible_glued_words_candidates_multiple.mjs";
import { urdu_glued_words_decided } from "./urdu_glued_words_decided.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function urdu_glued_words_gate_run() {
  "Gate: every word in the Urdu bible that reads as two, three or four of its own common words run together has been ruled on. Throws so the dispatcher seam exits nonzero.";
  "What this holds is not the spelling but the judging. The words themselves cannot be held to zero, because plenty of them are ordinary Urdu that merely divides; what can be held is that none of them is a word nobody has looked at. A word appearing here that is in neither the split map nor the keep list is a word this repo is silently guessing about.";
  "It earns its keep when the download is fetched again. The source is a file from a publisher and the repair sits on the reading side, so a re-fetch that carries different damage changes nothing anybody would notice: the verses read fine, the app paints, and the new run-together words go into the text unremarked. This is the reading that notices.";
  "It asks the detector for the same set that was judged, by asking for the threshold by name rather than by typing the number here.";
  "Three readings are asked because a word welded in two places is invisible to the reading that cuts once, and one welded in three is invisible to both. Four pieces answers nothing at all today — no Urdu word reads as four of its own common words — and it is asked anyway, because what this gate is for is the damage a re-fetch has not brought yet.";
  "All three come off one reading of the translation. The reading is nearly all of the work and does not change between one number of pieces and the next, so asking three times over would be paying for the same count three times.";
  let least = urdu_glued_words_half_least();
  let bible_folder = ebible_folder_urdu();
  let parts_ruled = [2, 3, 4];
  let answered = await ebible_glued_words_candidates_multiple(
    bible_folder,
    least,
    parts_ruled,
  );
  let decided = urdu_glued_words_decided();
  let split = property_get(decided, "split");
  let keep = property_get(decided, "keep");
  let offenders = [];
  let reached = 0;
  for (let row of answered) {
    let candidates = property_get(row, "candidates");
    reached = reached + list_size(candidates);
    for (let candidate of candidates) {
      let word = property_get(candidate, "word");
      let spelled = split[word];
      let kept = list_includes(keep, word);
      if (spelled) {
        continue;
      }
      if (kept) {
        continue;
      }
      list_add(offenders, word);
    }
  }
  let count = list_size(offenders);
  let hint = text_combine_multiple([
    count,
    " of ",
    reached,
    " run-together words in the Urdu bible have not been ruled on: add each one to the split map or the keep list",
  ]);
  list_empty_is_assert_json(offenders, {
    hint,
  });
  let r = {
    candidates: reached,
    offenders: 0,
  };
  return r;
}
