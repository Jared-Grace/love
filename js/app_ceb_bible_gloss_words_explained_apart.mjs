import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing_classes } from "./app_ceb_bible_gloss_roots_disagreeing_classes.mjs";
import { gloss_classes_words_apart_counted } from "./gloss_classes_words_apart_counted.mjs";
export async function app_ceb_bible_gloss_words_explained_apart(sample_size) {
  "The words the Cebuano app explains one way in one chapter and another way in another, worst first.";
  "The other readers of these findings all ask the dictionary, and the dictionary has nothing to say about four fifths of them. This asks nothing of anybody. One word does not come from two unrelated roots, so where the app explains a word two ways it has written something wrong somewhere, and that is true with no source consulted and no network reached.";
  "That makes this the part of the work that is answerable tonight. It also makes it the larger part: measured on the sightings gathered so far, the words explained more than one way cover several times what the dictionary was able to settle, and almost none of them appear in the dictionary-backed queue at all, because the dictionary was silent on them.";
  "A word explained twice is not always explained wrongly twice - one root can stand behind another, and naming either is defensible. What is not defensible is two claims that cannot both be steps on one path, and telling those apart is a person's job rather than a rule's. The ranking is what makes that job finite.";
  "Every chapter is drawn on, which is the one choice made here; the counting of what the classes cover, and the reasons the sample's reach and the words' total are reported at all, are the shared reading beneath this.";
  "$plain sample_size";
  "how many classes to draw from, said as text as readily as as a number. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let everything = "all";
  let gathered = await app_ceb_bible_gloss_roots_disagreeing_classes(
    everything,
    sample_size,
  );
  let r = gloss_classes_words_apart_counted(gathered);
  return r;
}
