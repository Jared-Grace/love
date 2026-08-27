import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_explains_text_replace } from "./gloss_chapters_explains_text_replace.mjs";
export async function app_ceb_bible_gloss_explains_unnamed_source_repair() {
  "Every Cebuano word explanation that credits its root to an analysis the reader cannot see, reworded to say the root plainly.";
  "A learner reading 'the analysis gives its root as' is being told about the tooling that wrote the explanation rather than about the word. Each reworded sentence says exactly what the old one said and leaves the machinery out of it.";
  "The wordings are listed here rather than asked for, because they are the ones this store was written with - a run of letters handed in from outside could reword anything at all, and there would be nothing to check it against.";
  "It takes no set and is given no list. It asks the store what chapters it holds, and a second run over a store already repaired changes nothing, which is how a run proves it worked.";
  let fn = app_ceb_bible_gloss_generate;
  let credited = await gloss_chapters_explains_text_replace(
    fn,
    "The analysis gives its root here as",
    "The root behind it here is",
  );
  let rooted = await gloss_chapters_explains_text_replace(
    fn,
    "The analysis gives its root as",
    "The root behind it is",
  );
  let built = await gloss_chapters_explains_text_replace(
    fn,
    "The analysis builds it on",
    "It is built on",
  );
  let given = await gloss_chapters_explains_text_replace(
    fn,
    "Its root is given as",
    "Its root is",
  );
  let r = {
    credited,
    rooted,
    built,
    given,
  };
  return r;
}
