import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapter_pointers_addressed_generic } from "./gloss_chapter_pointers_addressed_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_explain_back_reference_is } from "./gloss_explain_back_reference_is.mjs";
export async function app_en_learn_bible_gloss_urdu_chapter_pointers_addressed(
  chapter_code,
) {
  "Writes an address beside every Urdu explanation in one chapter that tells the reader they have met this word before, wherever the chapter settles which meeting was meant, and answers with the words that got one.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN03, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The pointing is recognised by the wordings the writing itself uses, which is the same reading the gate over these sentences does. Recognising them some other way here would let the two disagree about which sentences are even in question.";
  arguments_assert(arguments, 1);
  let changes = await gloss_chapter_pointers_addressed_generic(
    chapter_code,
    app_en_learn_bible_gloss_urdu_generate,
    gloss_explain_back_reference_is,
  );
  return changes;
}
