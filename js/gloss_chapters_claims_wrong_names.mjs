import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_claims_wrong_names_generic } from "./gloss_chapters_claims_wrong_names_generic.mjs";
export function gloss_chapters_claims_wrong_names(chapters) {
  "Every wrong verse claim a sweep found, named once each by the chapter, the verses its passage covers, the word and the verse the explanation named.";
  "A SWEEP HANDS ITS FINDINGS BACK A CHAPTER DEEP AND CARRIES THE WHOLE SENTENCE THAT MADE EACH ONE, AND A RECORD CANNOT BE KEPT IN THAT SHAPE. Prose is rewritten every time a chapter is re-authored, so a record keyed by it would call the same fault new the first time a comma moved.";
  "The four parts are all needed and nothing else is. The chapter and the verses reach the passage, the word reaches the entry inside it, and the verse named separates two wrong claims made in one sentence. The sentence itself is left out on purpose: it is the thing being mended, so a record holding it would go stale on the mending.";
  "This is the shape of every store's record rather than of one store's, so it is written here once. What a store keeps to itself is which sweep it runs and which file it holds the answer against.";
  "Only the fourth part differs between one sweep's findings and another's - a verse claim is told apart by the verse it named, and an occurrence claim by where in the passage it was said - so the naming itself is asked for and the verse is named here as the part that separates two of these.";
  arguments_assert(arguments, 1);
  let part = "verse_named";
  let sorted = gloss_chapters_claims_wrong_names_generic(chapters, part);
  return sorted;
}
