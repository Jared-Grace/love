import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_settled_explains } from "./app_en_learn_bible_gloss_urdu_settled_explains.mjs";
import { gloss_chapters_word_explains_set } from "./gloss_chapters_word_explains_set.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_settled_wording_is } from "./app_en_learn_bible_gloss_urdu_settled_wording_is.mjs";
export async function app_en_learn_bible_gloss_urdu_settled_wording_apply() {
  "Give every explanation in the store that teaches English to an Urdu reader that is a settled wording written for some other word the settled wording written for the word it stands under, and answer with the chapters it rewrote.";
  "It finds its own set. Nothing is named to it and no list is kept anywhere of which words are behind, because the fault it mends is visible in the entry itself: the sentence sitting there is one the table holds, and the table holds a different sentence for this word.";
  "Measured before it was first run: five hundred and ninety-eight entries over thirteen words. Twelve of the thirteen are a word opening its sentence - 'And', 'But', 'The', 'They', 'A', 'In', 'From', 'It', 'We', 'Not', 'At', 'To' - carrying the small-letter wording and so missing the sentence that says why the letter is big. The thirteenth is 'an' carrying the wording for 'a', which withholds the rule that 'an' comes before a vowel sound.";
  "Running it again when nothing is behind rewrites nothing, because the writer leaves an entry alone the moment it already carries its own word's wording. So it may be asked after any authoring, and the honest answer to 'is any of this stale' is to run it and read the count.";
  "Whether a wording may be written over is asked of the predicate rather than assumed here, the same way the shared-label sweep asks its own. That is the whole of the safety: an explanation written for the verse it sits in is not a settled wording, so it is never seen by this.";
  arguments_assert(arguments, 0);
  let explains = app_en_learn_bible_gloss_urdu_settled_explains();
  let r = await gloss_chapters_word_explains_set(
    app_en_learn_bible_gloss_urdu_generate,
    explains,
    app_en_learn_bible_gloss_urdu_settled_wording_is,
  );
  return r;
}
