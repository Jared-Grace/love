import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_word_explains_set } from "./gloss_chapters_word_explains_set.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_explain_back_reference_is } from "./gloss_explain_back_reference_is.mjs";
export async function app_ceb_bible_gloss_explains_over_pointers_set(explains) {
  arguments_assert(arguments, 1);
  ("Write a settled wording for each of the named Cebuano words over the explanations of those words that do nothing but point the reader further up, leaving every other explanation alone, and answer with the chapters that were rewritten.");
  ("The writing underneath is told three things and only one of them is ever a choice. It is told which store to write in, and there is one Cebuano gloss store; it is told which explanations may be written over, and the answer here is always the same one - the ones that only point back; and it is told the wordings, which is the whole of what the caller came with. Saying the two settled ones here leaves each caller about its wordings.");
  ("Writing over a pointer and nothing else is not a detail of how this is done, it is the rule the callers exist to keep. A wording written for the sentence it sits in is worth more than one settled word by word, so putting the settled one in place of both would be a loss dressed up as a repair. Four callers each spelled that rule out for themselves, which is four places it could have been spelled differently.");
  let r = await gloss_chapters_word_explains_set(
    app_ceb_bible_gloss_generate,
    explains,
    gloss_explain_back_reference_is,
  );
  return r;
}
