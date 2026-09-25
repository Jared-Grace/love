import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export function gloss_chapters_claims_wrong_names(chapters) {
  "Every wrong verse claim a sweep found, named once each by the chapter, the verses its passage covers, the word and the verse the explanation named.";
  "A SWEEP HANDS ITS FINDINGS BACK A CHAPTER DEEP AND CARRIES THE WHOLE SENTENCE THAT MADE EACH ONE, AND A RECORD CANNOT BE KEPT IN THAT SHAPE. Prose is rewritten every time a chapter is re-authored, so a record keyed by it would call the same fault new the first time a comma moved.";
  "The four parts are all needed and nothing else is. The chapter and the verses reach the passage, the word reaches the entry inside it, and the verse named separates two wrong claims made in one sentence. The sentence itself is left out on purpose: it is the thing being mended, so a record holding it would go stale on the mending.";
  "This is the shape of every store's record rather than of one store's, so it is written here once. What a store keeps to itself is which sweep it runs and which file it holds the answer against.";
  arguments_assert(arguments, 1);
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
