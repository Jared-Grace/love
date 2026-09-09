import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_any } from "./list_any.mjs";
export function app_en_learn_bible_gloss_urdu_explain_occurrence_bound_is(
  meaning,
) {
  "Says whether an Urdu explanation is tied to the one place it was written for, so that carrying it to another place would make it say something that was never checked there.";
  "This is the whole reason a repair cannot simply copy. The store explains a small word by what it joins here: 'preposition, and here it tells whose they were'. In one chapter the word 'to' carries sixteen such sentences, each naming a different thing it joins. Any one of them moved to another verse is a claim about that verse which nobody made and nobody read. A sentence that instead says what the word is - 'preposition, that is, the small word that tells the relation between two things' - is true wherever the word stands, and only those may travel.";
  "The words looked for all point at a place rather than at the word: here, the next word, the word before, the next verb, this verse, above.";
  arguments_assert(arguments, 1);
  let words = ["یہاں", "اگلے لفظ", "پہلے لفظ", "اگلے فعل", "اِس آیت", "اُوپر"];
  function word_found(word) {
    let found = text_includes(meaning, word);
    return found;
  }
  let bound = list_any(words, word_found);
  return bound;
}
