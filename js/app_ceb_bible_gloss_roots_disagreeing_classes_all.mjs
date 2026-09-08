import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing_classes } from "./app_ceb_bible_gloss_roots_disagreeing_classes.mjs";
export async function app_ceb_bible_gloss_roots_disagreeing_classes_all(
  sample_size,
) {
  "Every disagreement between a Cebuano explanation and the dictionary, gathered by the root the explanation named and with no reading of the pair left out.";
  "$plain sample_size";
  "how many classes to draw from, said as text as readily as as a number. It names nothing that runs.";
  "The gathering underneath is asked which reading of a pair to show, and the word for all of them is one word that four readings each wrote out for themselves. None of them is choosing: a reading that narrows the classes afterwards by its own test has to be handed the whole set first, or it narrows a narrowing and reports a share of a share.";
  "Only the one argument is bound and everything else is handed straight back, so a caller keeps the count of how many classes there were in total as well as the classes themselves. That count is what says whether the sample reached the end, and a wrapper that dropped it would make every one of these readings unable to say how much it had looked at.";
  ("The word itself still stands in ",
    fn_name("gloss_roots_disagreeing_classes_shown"),
    ", which is where it is recognised rather than supplied. Those two are deliberately left apart: one of them decides what all means and the other only asks for it.");
  arguments_assert(arguments, 1);
  let everything = "all";
  let gathered = await app_ceb_bible_gloss_roots_disagreeing_classes(
    everything,
    sample_size,
  );
  return gathered;
}
