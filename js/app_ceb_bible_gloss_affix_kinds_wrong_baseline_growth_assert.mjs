import { app_ceb_bible_gloss_affix_kinds_wrong_baseline_path } from "./app_ceb_bible_gloss_affix_kinds_wrong_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_ceb_bible_gloss_affix_kinds_wrong_baseline_growth_assert(
  known,
) {
  "Refuse to record a word wearing a wrong piece-name the record did not already hold.";
  "Unlike its sibling for invented letters, this record starts full rather than empty. Twelve hundred of these were found and most were repaired one authored sentence at a time; what is left is a tail with no shortcut in it, and banking that tail is the honest thing to do rather than pretending the store is clean.";
  "What may never happen is the tail growing. A name arriving here that the record did not hold is a chapter authored today with the same fault the repair was spent on, and the remedy is to write the sentence correctly rather than to widen the record - so the rewrite is refused at exactly the moment somebody would reach for it.";
  let path = app_ceb_bible_gloss_affix_kinds_wrong_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would bless a new explanation naming a piece the dictionary gives the word no piece of - name only the kinds of piece the dictionary gives, or name none",
  );
}
