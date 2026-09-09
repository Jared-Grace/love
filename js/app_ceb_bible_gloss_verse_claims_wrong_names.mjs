import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_chapters_verse_claims_wrong } from "./app_ceb_bible_gloss_chapters_verse_claims_wrong.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export async function app_ceb_bible_gloss_verse_claims_wrong_names() {
  "Every Cebuano word explanation naming a verse of its own chapter that holds nothing built on the same root, named once each by the chapter, the verses the passage covers, the word and the verse it named.";
  "The reading beside this hands its findings back a chapter deep and carries the whole sentence that made each one. A record cannot be kept in that shape: prose is rewritten every time a chapter is re-authored, so a record keyed by it would call the same fault new the first time a comma moved.";
  "★ A ROW HERE IS NOT YET A FAULT, WHICH IS WHY THE RECORD IS A RATCHET AND NOT A NOUGHT. An explanation is allowed to name a verse in order to say what happens in it - that the king was charged there, that the chapter was called a mother's teaching there - and such a sentence is right while being caught. Fifty of the fifty-six claims the store makes do hold, so the six standing here are the ones a reader has to judge one at a time, and freezing them is what turns the check into a warning about the next one.";
  "The four parts are all needed and nothing else is. The chapter and the verses reach the passage, the word reaches the entry inside it, and the verse named separates two wrong claims in one sentence. The sentence itself is left out on purpose: it is the thing being mended, so a record holding it would go stale on the mending.";
  arguments_assert(arguments, 0);
  let chapters = await app_ceb_bible_gloss_chapters_verse_claims_wrong();
  let names = [];
  function chapter_read(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let verses_key = property_get(finding, "verses_key");
      let word = property_get(finding, "word");
      let verse_named = property_get(finding, "verse_named");
      let named = text_combine_multiple([
        chapter_code,
        " ",
        verses_key,
        " ",
        word,
        " ",
        verse_named,
      ]);
      list_add(names, named);
    }
    each(found, finding_read);
  }
  each(chapters, chapter_read);
  let sorted = list_unique_sorted(names);
  return sorted;
}
