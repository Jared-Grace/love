import { each } from "./each.mjs";
import { gloss_chapters_back_references } from "./gloss_chapters_back_references.mjs";
import { list_add } from "./list_add.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_words_back_referenced(fn) {
  "Every word in one gloss store still explained by pointing the reader further up, commonest first.";
  "The words are what the work is measured in, not the places. The same word standing in forty chapters is one explanation somebody has to write and forty places it then lands, so a list of places says the job is forty times the size it is - and it hides the one fact that decides what to write first, which is that a word is standing in forty chapters.";
  let found = await gloss_chapters_back_references(fn);
  let offenders = property_get(found, "offenders");
  let words = [];
  function chapter_read(chapter) {
    let pointing = property_get(chapter, "pointing");
    function finding_read(finding) {
      let word = property_get(finding, "word");
      list_add(words, word);
    }
    each(pointing, finding_read);
  }
  each(offenders, chapter_read);
  let ranked = list_tally_ranked(words);
  return ranked;
}
