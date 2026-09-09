import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_any } from "./list_any.mjs";
export function app_en_learn_bible_gloss_urdu_explain_occurrence_bound_is(
  meaning,
) {
  "Says whether an Urdu explanation is tied to the one place it was written for, so that carrying it to another place would make it say something that was never checked there.";
  "This is the whole reason a repair cannot simply copy. The store explains a small word by what it joins here: 'preposition, and here it tells whose they were'. In one chapter the word 'to' carries sixteen such sentences, each naming a different thing it joins. Any one of them moved to another verse is a claim about that verse which nobody made and nobody read. A sentence that instead says what the word is - 'preposition, that is, the small word that tells the relation between two things' - is true wherever the word stands, and only those may travel.";
  "The words looked for all point at a place rather than at the word: here, above, the verse, the next one, the previous one, this book, this gospel, this spot - and the two that point at the shape of the passage rather than at the word, saying that something is repeated or that a pattern is being followed.";
  "The list began with six words and one of them was 'this verse', which is why it let a copy through that said 'this verse repeats verse fifteen almost word for word'. A sentence about a place does not have to spell the demonstrative: it can name the fifteenth verse, or the previous one, or the next. So the verse is looked for on its own, and every neighbouring direction with it. A list of words somebody typed is only ever as wide as what they happened to think of, which is why the sweep that uses this must be scored a second way as well - by whether the author used the same wording in more than one chapter.";
  arguments_assert(arguments, 1);
  let words = [
    "یہاں",
    "آیت",
    "اُوپر",
    "اگلے",
    "اگلی",
    "پچھلی",
    "پہلے لفظ",
    "اِس کِتاب",
    "اِس اِنجیل",
    "اِس جگہ",
    "دُہرا",
    "سانچہ",
  ];
  function word_found(word) {
    let found = text_includes(meaning, word);
    return found;
  }
  let bound = list_any(words, word_found);
  return bound;
}
