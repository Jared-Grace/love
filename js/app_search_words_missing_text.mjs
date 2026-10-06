import { arguments_assert } from "./arguments_assert.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_search_words_unreachable_text } from "./app_search_words_unreachable_text.mjs";
import { list_add } from "./list_add.mjs";
import { app_search_words_absent_text } from "./app_search_words_absent_text.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_search_words_missing_text(
  words_missing,
  words_unreachable,
) {
  "What a reader is told when some of their words came back with nothing: the real reason for each one, rather than both guesses offered at once.";
  "THE TWO CAUSES ARE NOW TOLD APART INSTEAD OF BEING OFFERED TOGETHER. This used to say either no verse holds the word or the connection dropped, and ask about both, because at this point nothing knew which - the catch underneath answered nothing at all, so a word that is in no verse and a word whose lookup never arrived arrived here identical. A reader met one sentence covering both and took the half that promised a retry, which sent them trying again forever over a spelling no retry can fix.";
  "Each cause gets its own sentence over its own words, rather than one sentence bending to cover a mixture. A query can easily hold one word of each kind, and a single sentence covering both would have to name no words at all to stay true - which is how the old one came to say nothing useful about either.";
  "The unreachable words are said first because theirs is the sentence with something to do in it. Trying again is an action; checking a spelling is an action too, but a reader whose connection is dropping cannot tell whether the second one worked.";
  arguments_assert(arguments, 2);
  let words_absent = list_without_multiple(words_missing, words_unreachable);
  let sentences = [];
  let unreachable = list_empty_not_is(words_unreachable);
  if (unreachable) {
    let said = app_search_words_unreachable_text(words_unreachable);
    list_add(sentences, said);
  }
  let absent = list_empty_not_is(words_absent);
  if (absent) {
    let said = app_search_words_absent_text(words_absent);
    list_add(sentences, said);
  }
  let joined = list_join_space(sentences);
  return joined;
}
