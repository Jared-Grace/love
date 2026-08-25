import { arguments_assert } from "./arguments_assert.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_lower } from "./list_map_lower.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { not } from "./not.mjs";
import { set_includes } from "./set_includes.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
export async function bible_words_names_apart(bible_folder) {
  "$plain bible_folder";
  "The vocabulary of one bible cut in two: the words that are only ever written with a capital, which is what a name looks like from outside the language, and every other word.";
  "★ A WORD IS CALLED A NAME HERE WHEN ITS SMALL-LETTER SPELLING APPEARS NOWHERE IN THE WHOLE BIBLE, AND THAT TEST NEEDS NO LIST OF NAMES AND NO GUESS AT WHAT PART OF SPEECH ANYTHING IS. THE is written with a capital thousands of times because thousands of sentences start with it, but it is also written the, so it falls out; JEHOIACHIN never is, so it stays. Sixty-six books is a great deal of text for an ordinary word to get through without once standing in the middle of a sentence, which is what makes the test worth trusting over that much text and not over a chapter.";
  "Both halves come back in small letters and each word appears in exactly one of them, so the two counted together are the whole vocabulary and neither word is counted twice.";
  arguments_assert(arguments, 1);
  let written = await bible_words_written(bible_folder);
  let lower_written = list_filter(written, text_lower_is);
  let ordinary = list_unique_set(lower_written);
  let lowered = list_map_lower(written);
  let vocabulary = list_unique(lowered);
  function common_is(word) {
    let seen = set_includes(ordinary, word);
    return seen;
  }
  function name_is(word) {
    let seen = common_is(word);
    let n = not(seen);
    return n;
  }
  let common = list_filter(vocabulary, common_is);
  let names = list_filter(vocabulary, name_is);
  let apart = {
    names: names,
    common: common,
  };
  return apart;
}
