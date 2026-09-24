import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_word_wordings } from "./gloss_chapters_word_wordings.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_word_wordings_ranked(word) {
  "Every distinct sentence the store explaining English words to an Urdu reader has written under one English word, commonest first.";
  "$plain word";
  "the word is one English word as it appears in the text, like that or Then. It names entries in a store and nothing that runs.";
  "Ask this before retiring anything under a word. It is the store itself rather than a ranking of it, so a sentence written once and a sentence written two hundred times both appear, and a near twin of another sentence appears as its own row instead of being folded into it.";
  "ITS NEIGHBOUR ANSWERS THE OPPOSITE QUESTION AND THE NAMES ARE ONE WORD APART, SO THEY ARE WORTH TELLING APART HERE. The one without the ranking takes no word and hands back the single commonest wording for every word at once, to answer whether a word has any real sentence anywhere. This one takes one word and hands back all of them, including the ones that only point at a word met earlier - a retirement list has to see those, because a pointer left behind after the sentence it pointed at has been rewritten is exactly the sort of thing a round is looking for.";
  "Named for the store rather than taking it as a parameter, for the same reason the other rankings are: the name is what a person types when they want to know what one word is carrying.";
  arguments_assert(arguments, 1);
  let r = await gloss_chapters_word_wordings(
    app_en_learn_bible_gloss_urdu_generate,
    word,
  );
  return r;
}
