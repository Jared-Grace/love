import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapter_explains_text_replace } from "./gloss_chapter_explains_text_replace.mjs";
export async function app_en_learn_bible_gloss_urdu_chapter_explains_text_replace(
  chapter_code,
  before,
  after,
) {
  "One chapter of the Urdu Bible gloss with a settled run of wording swapped for another wherever a word explanation says it, and the count of explanations that changed.";
  "★ THIS EXISTS SO THE MEND CAN BE RUN FROM THE COMMAND LINE AT ALL. The reading underneath takes the store as a function, and a command line hands every argument over as a run of letters, so naming the store there gives a piece of text whose name is nothing and the path comes back pointing at a place that does not exist. Naming the store in the code instead of in the argument is what closes that gap.";
  "The other way of closing it was to let the reading underneath take the store's name and look the function up itself. That was turned down because the argument would then be a function's name, and a command that can be pointed at any function by its argument is the one shape the permission floor exists to keep out. Here the store is fixed by the code and the arguments are only prose a reader sees.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN10, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain before";
  "$plain after";
  "the two are runs of letters, the wording to look for and the wording to leave in its place. They are prose a reader sees and nothing that runs.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_chapter_explains_text_replace(
    chapter_code,
    fn,
    before,
    after,
  );
  return r;
}
